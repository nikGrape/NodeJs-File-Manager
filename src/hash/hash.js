import fs from 'fs';
import path from 'path';
import { createHash } from 'node:crypto';

import { getCurrentDir } from '../nwd/env.js';
import { invalidInput, use } from '../utils/messages.js';

export const hash = async (path_to_file) => {
	if (!path_to_file) {
		invalidInput('Argument is required');
		use('hash path_to_file');
		return;
	}

	const target = path.resolve(getCurrentDir(), path_to_file);
	if (!fs.existsSync(target)) {
		invalidInput(`${path_to_file} doesn't exist`);
		return;
	}

	const content = fs.readFileSync(target, { encoding: 'utf-8' });

	const res = createHash('sha256').update(content).digest('hex');

	console.log(res);
};
