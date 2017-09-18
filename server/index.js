//Fake server to simulate asynchronous behaviour
export const getUserData = () => {
	const userArray = [{ username: 'bolton', dob: '06/01/1900' }];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(userArray);
		}, 1000);
	});
};
export const getHouseData = () => {
	console.log('Get Houses started');

	const houseArray = [
		{ house: 'Tyrell' },
		{ house: 'Baratheon' },
		{ house: 'Frey' }
	];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Get Houses finished');
			resolve(houseArray);
		}, 1000);
	});
};
export const getDragonData = () => {
	console.log('Get Dragons started');

	const dragonArray = [
		{ dragon: 'Drogon' },
		{ dragon: 'Rhaegal' },
		{ dragon: 'Viserion' }
	];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Get Dragons finished');
			resolve(dragonArray);
		}, 4000);
	});
};
