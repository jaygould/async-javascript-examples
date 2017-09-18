import { getUserData } from '../../server';

//Data and DOM selector queries
let $test2div = document
	.getElementById('asyncawait')
	.getElementsByClassName('test2content')[0];

/********
	/
	/ Chained Async
	/
	/*******/
export const chainAsyncawait = () => {
	$test2div.innerHTML = 'Chained Async/await started...';

	//use async keyword and await keyword means there's no chaining, and it looks
	//like synchronous code
	async function userDataFuntion() {
		try {
			let users = await getUserData();
			let updatedUsers = _addToData(users);
			let finalUsers = await _saveUserData(updatedUsers);
			$test2div.innerHTML = `Received test 2 data: ${JSON.stringify(
				finalUsers
			)}`;
		} catch (err) {
			console.error(err);
		}
	}
	userDataFuntion();
};

const _addToData = users => {
	users.push({
		username: 'eddard',
		dob: '02/09/1900'
	});
	return users;
};
const _saveUserData = users => {
	//save the user data (this would be asyncronous so we will simulate with a setTimeout)
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let saveWasSucesfull = true;
			if (saveWasSucesfull) {
				resolve(users);
			} else {
				reject('failed');
			}
		}, 2500);
		//
	});
};
