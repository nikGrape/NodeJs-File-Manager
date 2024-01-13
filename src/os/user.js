import os from 'os';
import { addGreenColor } from '../utils/colors.js';

export const user = () => {
	console.log(addGreenColor(os.userInfo().username));
};

