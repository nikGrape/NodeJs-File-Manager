import { addGreenColor, addRedColor, addYellowColor } from './colors.js';

export const usage = () => {
	console.log('usage example:');
	console.log(`npm run start -- --username=your_username`);
};

export const welcome = (username) => {
	console.log(`Welcome to the File Manager, ${addYellowColor(username)}!`);
};

export const goodBye = (username) => {
	console.log(
		`\nThank you for using File Manager, ${addYellowColor(username)}, goodbye!`
	);
};

export const invalidInput = (input) => {
	console.log(addRedColor(`Invalid input: ${input}`));
};

export const use = (command) => {
	console.log(`Invalid input: ${addGreenColor(input)}`);
};
