import path from 'path';
import fs from 'fs';

import { getCurrentDir, setCurrentDir } from './env.js';
import { invalidInput } from '../utils/messages.js';

export const up = () => {
	setCurrentDir(path.dirname(getCurrentDir()));
};

/**
 *
 * @param {string} path
 */
export const cd = (dir) => {
	try {
		const newPath = path.resolve(getCurrentDir(), dir);

		if (fs.lstatSync(newPath).isDirectory())
			setCurrentDir(path.resolve(getCurrentDir(), newPath));
		else {
			invalidInput(newPath);
		}
	} catch (err) {
		invalidInput(path.resolve(getCurrentDir(), dir));
	}
};
