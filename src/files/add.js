import path from 'path';
import fs from 'fs';
import { invalidInput, use } from '../utils/messages.js';
import { getCurrentDir } from '../nwd/env.js';

export const add = async (fileName) => {
	if (!fileName) {
		invalidInput('Argument is required');
		use('add new_file_name');
		return;
	}
	try {
		const filePath = path.resolve(getCurrentDir(), fileName);
		if (fs.existsSync(filePath)) {
			invalidInput(`${fileName} already exists`);
			return;
		}

		if (!fs.existsSync(path.dirname(filePath))) {
			invalidInput(`${path.dirname(filePath)} doesn't exist`);
			return;
		}

		fs.createWriteStream(filePath, {
			flags: 'a+',
		});
	} catch (err) {
		invalidInput('');
	}
};
