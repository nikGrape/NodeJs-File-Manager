import { welcome, goodBye, usage, invalidInput } from './utils/messages.js';
import { pwd } from './nwd/pwd.js';
import { up, cd } from './nwd/cd.js';
import { ls } from './nwd/ls.js';
import { cat } from './files/cat.js';
import { add } from './files/add.js';
import { rn } from './files/rename.js';
import { cp } from './files/copy.js';
import { mv } from './files/move.js';
import { rm } from './files/remove.js';

const args = process.argv.slice(2);

if (args.length < 1 || !args[0].startsWith('--username=')) {
	usage();
	process.exit(1);
}

const username = args[0].split('=')[1];

process.on('SIGINT', () => {
	goodBye(username);
	process.exit(0);
});
welcome(username);
pwd();

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
	const [command, ...args] = data.split(' ').map((v) => v.toString().trim());
	console.log('command: ', command);
	console.log(args);
	switch (command) {
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
			cd(args[0]);
			break;
		case 'cat':
			cat(args[0]);
			break;
		case 'add':
			add(args[0]);
			break;
		case 'rn':
			rn(args[0], args[1]);
			break;
		case 'cp':
			cp(args[0], args[1]);
			break;
		case 'mv':
			mv(args[0], args[1]);
			break;
		case 'rm':
			rm(args[0]);
			break;
		default:
			console.log(data);
			invalidInput(data);
	}
	if (data.toString().trim() != 'pwd') pwd();
});
