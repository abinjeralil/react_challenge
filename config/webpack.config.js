const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = path.resolve(__dirname, './../dist/');

// const HOST = process.env.HOST || '127.0.0.1';
// const PORT = process.env.PORT || '9000';

const HOST = 'localhost';
const PORT = '9000';

// require('dotenv').config();

const config = {
	mode: 'development',
	output: {
		path: buildPath,
		publicPath: '/',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js',
	},
	entry: {
		app: './src/index.jsx',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react"
						]
					}
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react"
						]
					}
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
				],
			},
			{
				test: /\.(jpe?g|png|gif)$/,
				loader: 'url-loader',
				options: {
					// Images larger than 10 KB won’t be inlined
					limit: 10 * 1024,
					name: 'images/[hash].[ext]'
				}
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				loader: 'image-webpack-loader',
				options: {
					bypassOnDebug: true
				},
				// Specify enforce: 'pre' to apply the loader
				// before url-loader/svg-url-loader
				// and not duplicate it in rules with them
				enforce: 'pre'
			}
		]
	},
	resolve: {
		alias: {
			'@Root': path.resolve(__dirname, "../src"),
			'@Components': path.resolve(__dirname, "../src/components")
		}
	},
	devServer: {
		contentBase: buildPath,
		compress: true,
		noInfo: true,
		hot: true,
		inline: true,
		historyApiFallback: true,
		port: PORT,
		host: HOST,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					enforce: true
				}
			}
		}
	}
}

module.exports = config;