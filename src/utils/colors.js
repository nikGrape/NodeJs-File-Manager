/**
 * @param {string | number} text
 */
export const addGreenColor = (text) => {
	return `\x1b[32m${text}\x1b[0m`;
};

/**
 * @param {string | number} text
 */
export const addBlueColor = (text) => {
	return `\x1b[34m${text}\x1b[0m`;
};

/**
 * @param {string | number} text
 */
export const addYellowColor = (text) => {
	return `\x1b[33m${text}\x1b[0m`;
};

/**
 * @param {string | number} text
 */
export const addRedColor = (text) => {
	return `\x1b[31m${text}\x1b[0m`;
};
