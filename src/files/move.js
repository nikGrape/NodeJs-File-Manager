import fs from 'fs';
import { cp } from './copy.js';
import { invalidInput } from '../utils/messages.js';

/**
 *
 * @param {string} path_to_file
 * @param {string} path_to_new_director
 */
export const mv = (path_to_file, path_to_new_directory) => {
	const absolutePathToFile = cp(path_to_file, path_to_new_directory);

	if (!absolutePathToFile) return;

	fs.rm(absolutePathToFile, (err) => {
		if (err) invalidInput('');
	});
};
