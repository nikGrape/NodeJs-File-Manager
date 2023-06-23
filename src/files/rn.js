import fs from 'fs';
import path from 'path';
import { getCurrentDir } from '../nwd/env.js';
import { invalidInput, use } from '../utils/messages.js';

export const rn = (oldName, newName) => {
	if (!oldName || !newName) {
		invalidInput('2 arguments are required');
    use('rn path_to_file new_filename')
		return;
	}
	const oldPath = path.resolve(getCurrentDir(), oldName);
	const newPath = path.resolve(path.dirname(oldPath), newName);
	console.log(oldPath, newPath);

	if (!fs.existsSync(oldPath)) {
		invalidInput(`file doesn't exist`);
		return;
	}

	fs.rename(oldPath, newPath, (err) => {
		if (err) {
			invalidInput('');
		}
	});
};
