import { getCurrentDir } from './env.js';
import { addBlueColor } from '../utils/colors.js';

export const pwd = () => {
	const currentDir = getCurrentDir();
	const msg = `You are currently in `;
	console.log(`+${'-'.repeat(msg.length + currentDir.length + 4)}+`);
	console.log(`|  ${msg + addBlueColor(currentDir)}  |`);
	console.log(`+${'-'.repeat(msg.length + currentDir.length + 4)}+`);
};
