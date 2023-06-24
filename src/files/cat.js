import fs from 'fs';
import path from 'path';
import { getCurrentDir } from '../nwd/env.js';
import { invalidInput, use } from '../utils/messages.js';

export const cat = (fileName) => {
	if (!fileName) {
		invalidInput('Argument is required');
		use('cat path_to_file');
		return;
	}
	const filePath = path.resolve(getCurrentDir(), fileName);
	try {
		if (!fs.lstatSync(filePath).isFile()) {
			invalidInput(filePath + ' - is not a file');
			return;
		}
		const stream = fs.createReadStream(filePath, {
			flag: 'r',
			encoding: 'utf-8',
			highWaterMark: 64,
		});

		stream.on('error', (err) => {
			invalidInput(err.message);
		});

		stream.on('data', (chunk) => {
			process.stdout.write(chunk);
		});

		stream.on('close', () => {
			process.stdout.write('\n');
		});
	} catch (err) {
		invalidInput(filePath + ' - is not a file');
	}
};
