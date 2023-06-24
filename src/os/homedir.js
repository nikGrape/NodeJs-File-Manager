import os from 'os';
import { addGreenColor } from '../utils/colors.js';

export const homedir = () => {
	console.log(addGreenColor(os.homedir()));
};
