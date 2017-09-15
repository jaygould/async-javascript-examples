//Data and DOM selector queries
let $test1div = document
	.getElementById('promise')
	.getElementsByClassName('test1content')[0];

/********
/
/ Simple Promise
/
/*******/
export const simplePromise = () => {
	$test1div.innerHTML = 'Simple Promise start...';

	let userDataPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			let dataExample = [{ username: 'jonsnow', dob: '16/08/1989' }];
			if (dataExample) {
				//resolve: skips to the then() function
				resolve(dataExample);
			} else {
				//reject: skips to the catch() function
				reject('There was an error because of the recession or something.');
			}
		}, 2000);
	});

	userDataPromise
		.then(response => {
			$test1div.innerHTML = `Received test 1 data: ${JSON.stringify(response)}`;
		})
		.catch(error => {
			console.log(error);
		});
};
