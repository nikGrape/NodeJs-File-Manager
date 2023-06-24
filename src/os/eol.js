import os from 'os';

export const eol = () => {
	process.stdout.write(os.EOL);
};
