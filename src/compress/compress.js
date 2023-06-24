import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { invalidInput, use } from '../utils/messages.js';
import { getCurrentDir } from '../nwd/env.js';

export const compress = (path_to_file, path_to_destination) => {
	if (!path_to_file || !path_to_destination) {
		invalidInput('2 arguments required');
		use('cp path_to_file path_to_destination');
		return false;
	}
	const currentDir = getCurrentDir();
	const absolutePathToFile = path.resolve(currentDir, path_to_file);
	const absolutePathToDist = path.resolve(currentDir, path_to_destination);
	if (!fs.existsSync(absolutePathToFile)) {
		invalidInput(`${path_to_file} doesn't exitst`);
		return false;
	}
	if (!fs.existsSync(path.dirname(absolutePathToDist))) {
		invalidInput(`${path.dirname(absolutePathToDist)} doesn't exitst`);
		return false;
	}

	const input = fs.createReadStream(absolutePathToFile);
	const output = fs.createWriteStream(absolutePathToDist);

	const brotli = zlib.createBrotliCompress();

	const stream = input.pipe(brotli).pipe(output);

	stream.on('finish', () => {
		console.log(`${path_to_file} Compressed succesfully`);
	});
};
