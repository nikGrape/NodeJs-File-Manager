import path from 'path';
import os from 'os';

export const CURRENT_DIR = 'RS_FILE_MANAGER_CURRENT_DIR';

if (!process.env[CURRENT_DIR]) process.env[CURRENT_DIR] = os.homedir();

/**
 *
 * @param {string} path
 */
export const setCurrentDir = (path) => {
	process.env[CURRENT_DIR] = path;
};

export const getCurrentDir = () => {
	return process.env[CURRENT_DIR];
};
