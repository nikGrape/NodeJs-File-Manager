import os from 'os';

export const cpus = () => {
	const cpu = os.cpus();
	console.log(`Overall amount of CPUS: ${cpu.length}`);
	console.log('+---------+------------+-----------+');
	console.log(`|  index  |    model   |   speed   |`);
	console.log('+---------+------------+-----------+');

	for (let i = 0; i < cpu.length; i++) {
		console.log(
			`|    ${i + 1}    |  ${cpu[i].model}  |  ${cpu[i].speed / 10} GHz  |`
		);
	}
	console.log('+---------+------------+-----------+');
	console.log(`|  TOTAL:  ${cpu.length}                       |`);
	console.log('+----------------------------------+');
};
