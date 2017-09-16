import { getUserData } from '../../server';

//Data and DOM selector queries
let $test1div = document
	.getElementById('asyncawait')
	.getElementsByClassName('test1content')[0];

/********
	/
	/ Simple Async
	/
	/*******/
export const simpleAsyncawait = () => {
	$test1div.innerHTML = 'Simple Async/await started...';
	async function userDataFuntion() {
		let users = await getUserData();
		$test1div.innerHTML = `Received test 1 data: ${JSON.stringify(users)}`;
	}

	userDataFuntion();
};
