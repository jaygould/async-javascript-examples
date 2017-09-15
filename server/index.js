//Fake server to simulate asynchronous behaviour
const userArray = [{ username: 'bolton', dob: '06/01/1900' }];
export const getUserData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(userArray);
		}, 1000);
	});
};
