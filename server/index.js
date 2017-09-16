//Fake server to simulate asynchronous behaviour
export const getUserData = () => {
	const userArray = [{ username: 'bolton', dob: '06/01/1900' }];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(userArray);
		}, 1000);
	});
};
