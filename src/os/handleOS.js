import { invalidInput } from '../utils/messages.js';
import { architecture } from './architecture.js';
import { cpus } from './cpus.js';
import { eol } from './eol.js';
import { homedir } from './homedir.js';
import { user } from './user.js';

export const handleOS = (arg) => {
	switch (arg) {
		case '--EOL':
			eol();
			break;
		case '--cpus':
			cpus();
			break;
		case '--homedir':
			homedir();
			break;
		case '--username':
			user();
			break;
		case '--architecture':
			architecture();
			break;
		default:
			invalidInput(`unknown command os ${arg}`);
	}
};
