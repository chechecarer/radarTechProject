module.exports = {
	port: 8080,
	devtool: "eval-source-map",
	entry: [
	"./src/index.js" 
	],
	output: {
		path: __dirname + "/out",
		publicPath: './out/',
		filename: "bundle.js"
	},
	externals:{

	},
	resolve: {
		extensions: ['', 'js', 'jsx']
	},
	postcss: [
		require('autoprefixer')
	],
	module: {
		loaders: [
			{
				test: /\.js$/, 
				loader: "jsx!babel"
			},
			{
				test: /\.css$/,
				loader: "style!css?module"
			},
			{
				test: /\.scss$/,
				loader: "style!css!sass"
			},
			{
				test: /\.svg$/,
				loader: "url?limit=8192"
			},
			{
				test: /\.json/,
				loader: "json"
			}
		]
	},
	devServer:{
		colors: true,
		historyApiFallback: true,
		inline: true
	}
		
	
}