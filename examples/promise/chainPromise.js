import { getUserData } from '../../server';

//Data and DOM selector queries
let $test2div = document
	.getElementById('promise')
	.getElementsByClassName('test2content')[0];

/********
	/
	/ Chained Promise
	/
	/*******/
export const chainPromise = () => {
	$test2div.innerHTML = 'Chained Promise start...';

	function saveUserData(sortedUserData) {
		return new Promise((resolve, reject) => {
			//save the user data (this would be asyncronous so we will simulate with a setTimeout)
			setTimeout(() => {
				let saveWasSucesfull = true;
				if (saveWasSucesfull) {
					resolve(sortedUserData);
				} else {
					reject('failed');
				}
			}, 2000);
		});
	}

	let userDataChain = getUserData()
		.then(userData => {
			//at this point, userData has been resolved (received from the server)
			//from the getUserData() function

			//we can return anything to another then() function, such as manipulated data
			userData.push({
				username: 'gendri',
				dob: '12/12/1900'
			});
			return userData;
		})
		.then(sortedUserData => {
			//the final then() in the chain will be the resolved value for this chain,
			//and we can access this value by another then() function
			//from the userDataChain (below)
			return saveUserData(sortedUserData);
		})
		.catch(error => {
			//return the caught error to the final catch handler below
			throw error;
		});

	//This will output a Promise pending notice - because at this point the
	//userDataChain is still in progress as it contains asynchronous data flow
	console.log(userDataChain);

	//see output of Promise chain using then(), receiving the final resolved
	//values (success or error)
	userDataChain
		.then(response => {
			$test2div.innerHTML = `Received test 2 data: ${JSON.stringify(response)}`;
		})
		.catch(error => {
			console.log(error);
		});
};
