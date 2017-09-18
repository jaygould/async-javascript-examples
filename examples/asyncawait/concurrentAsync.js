import { getUserData, getDragonData, getHouseData } from '../../server';

//Data and DOM selector queries
let $test3div = document
	.getElementById('asyncawait')
	.getElementsByClassName('test3content')[0];
let $test4div = document
	.getElementById('asyncawait')
	.getElementsByClassName('test4content')[0];

/********
	/
	/ Concurrent Async A - uses Promise.all to run function when all async functions are resolved
	/
	/*******/
export const concurrentAsyncawaitA = () => {
	$test3div.innerHTML = 'Concurrent Async/await A started...';

	//A works, but the async functions are still called one after another (not in
	//parallel)
	async function dataFuntion() {
		try {
			console.log('Concurrent function A started...');
			let dragons = getDragonData();
			let houses = getHouseData();
			let theData = await Promise.all([dragons, houses]);
			console.log('Concurrent function A finished...', theData);

			$test3div.innerHTML = `Received test 3 data: ${JSON.stringify(theData)}`;
		} catch (err) {
			console.error(err);
		}
	}
	dataFuntion();
};

/********
	/
	/ Concurrent Async B - slightly different way of performing parallel async functions but not as easy to call something when all are received
	/
	/*******/

export const concurrentAsyncawaitB = () => {
	$test4div.innerHTML = 'Concurrent Async/await B started...';

	//use async keyword and await keyword means there's no chaining, and it looks
	//like synchronous code
	async function userDataFuntion() {
		try {
			console.log('Concurrent function B started...');
			let dragons = getDragonData();
			let houses = getHouseData();
			let usersAndDragons = await [dragons, houses];
			$test4div.innerHTML = '';
			for (let i = 0; i < usersAndDragons.length; i++) {
				usersAndDragons[i].then(data => {
					$test4div.innerHTML += `<br />Received test 4 data: ${JSON.stringify(
						data
					)}`;
				});
			}
		} catch (err) {
			console.error(err);
		}
	}
	userDataFuntion();
};
