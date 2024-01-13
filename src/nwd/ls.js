import fs from 'fs';
import path from 'path';
import { addBlueColor, addGreenColor } from '../utils/colors.js';
import { getCurrentDir } from './env.js';

/**
 * @param {Number} nameFieldLength
 */
const printHeader = (nameFieldLength) => {
	nameFieldLength += nameFieldLength % 2 == 0 ? 0 : 1;
	console.log(`+---------+${'-'.repeat(nameFieldLength)}+-----------------+`);
	console.log(
		`| (index) |${' '.repeat(nameFieldLength / 2 - 2)}Name${' '.repeat(
			nameFieldLength / 2 - 2
		)}|      Type       |`
	);
	console.log(`+---------+${'-'.repeat(nameFieldLength)}+-----------------+`);
};

/**
 * @param {number} index
 * @param {string} name
 * @param {Number} nameFieldLength
 * @param {string} type
 */
const printFileLine = (index, name, nameFieldLength, type) => {
	nameFieldLength += nameFieldLength % 2 == 0 ? 0 : 1;
	const spaceBeforeName = Math.ceil((nameFieldLength - name.length) / 2);
	const spaceAfterName = nameFieldLength - name.length - spaceBeforeName;
	const nameStr = `${' '.repeat(spaceBeforeName)}${
		type == 'file' ? addGreenColor(name) : addBlueColor(name)
	}${' '.repeat(spaceAfterName)}`;

	const typeStr =
		type == 'file'
			? `|      ${addGreenColor('File')}       |`
			: `|    ${addBlueColor('Directory')}    |`;

	const indexLength = `${index}`.length;
	const spaceBeforeInd = Math.ceil((9 - indexLength) / 2);
	const spaceAfterInd = 9 - indexLength - spaceBeforeInd;
	const indexStr = `|${' '.repeat(spaceBeforeInd)}${
		type == 'file' ? addGreenColor(index) : addBlueColor(index)
	}${' '.repeat(spaceAfterInd)}|`;

	console.log(`${indexStr}${nameStr}${typeStr}`);
};

/**
 * @param {Number} nameFieldLength
 */
const printBottom = (nameFieldLength) => {
	console.log(`+---------+${'-'.repeat(nameFieldLength)}+-----------------+`);
};

/**
 * @param {[{name: string, type: string}]} files
 */
const printFiles = (files) => {
	const maxFileNameLength = Math.max(...files.map((v) => v.name.length)) + 6;
	printHeader(maxFileNameLength);
	files.forEach((v, i) => printFileLine(i, v.name, maxFileNameLength, v.type));
	printBottom(maxFileNameLength);
};

export const ls = async () => {
	const currentDir = getCurrentDir();
	fs.readdir(currentDir, (err, files) => {
		if (err) throw new Error('FS operation failed');

		printFiles(
			files
				.map((v) => ({
					name: v,
					type: fs.lstatSync(path.resolve(currentDir, v)).isDirectory()
						? 'dir'
						: 'file',
				}))
				.sort((a, b) => {
					if (a.type == b.type) {
						return a.name > b.name ? 1 : -1;
					} else {
						return b.type == 'dir' ? 1 : -1;
					}
				})
		);
	});
};
