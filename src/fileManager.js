import { welcome, goodBye, usage, invalidInput } from './utils/messages.js';
import { pwd } from './nwd/pwd.js';
import { up, cd } from './nwd/cd.js';
import { ls } from './nwd/ls.js';

const args = process.argv.slice(2);

if (!args[0].startsWith('--username=')) {
	usage();
	process.exit(1);
}

const username = args[0].split(' ')[1];

process.on('SIGINT', () => {
	goodBye(username);
	process.exit(0);
});
welcome(username);
pwd();

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
	console.log(data);
	const tmp = data.toString().split(' ')[0].trim();
	switch (tmp) {
		case 'pwd':
			pwd();
			break;
		case 'up':
			up();
			break;
		case 'ls':
			ls();
			break;
		case 'cd':
			console.log(data.toString().split(' '));
			cd(data.toString().split(' ')[1].trim());
			break;
		default:
			console.log(data);
			invalidInput(data);
	}
	if (data.toString().trim() != 'pwd') pwd();
});
