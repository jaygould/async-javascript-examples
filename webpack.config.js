module.exports = {
	context: __dirname,
	entry: {
		app: './app.js'
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/assets/',
		filename: 'bundle.js'
	}
};
