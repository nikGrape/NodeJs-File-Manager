import fs from 'fs';
import path from 'path';
import { getCurrentDir } from '../nwd/env.js';
import { invalidInput, use } from '../utils/messages.js';

/**
 *
 * @param {string} path_to_file
 * @param {string} path_to_new_directory
 */
export const cp = (path_to_file, path_to_new_directory) => {
	if (!path_to_file || !path_to_new_directory) {
		invalidInput('2 arguments required');
		use('cp path_to_file path_to_new_directory');
		return false;
	}
	const currentDir = getCurrentDir();
	const absolutePathToFile = path.resolve(currentDir, path_to_file);
	if (!fs.existsSync(absolutePathToFile)) {
		invalidInput(`${path_to_file} doesn't exitst`);
		return false;
	}
	if (!fs.existsSync(path.resolve(currentDir, path_to_new_directory))) {
		invalidInput(`${path_to_new_directory} doesn't exitst`);
		return false;
	}

	const newPathToFile = path.join(
		path.resolve(currentDir, path_to_new_directory),
		path.basename(path_to_file)
	);

	const input = fs.createReadStream(absolutePathToFile);
	const output = fs.createWriteStream(newPathToFile);

	input.pipe(output);

	return absolutePathToFile;
};
