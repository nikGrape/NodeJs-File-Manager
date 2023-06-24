import fs from 'fs';
import path from 'path';
import { invalidInput, use } from '../utils/messages.js';
import { getCurrentDir } from '../nwd/env.js';

export const rm = async (path_to_file) => {
	if (!path_to_file) {
		invalidInput('Argument is required');
		use('rm path_to_file');
	}
	const target = path.resolve(getCurrentDir(), path_to_file);

	if (!fs.existsSync(target)) {
		invalidInput(`${path_to_file} doesn't exist`);
		return;
	}

	fs.rm(target, (err) => {
		if (err) invalidInput('');
	});
};
