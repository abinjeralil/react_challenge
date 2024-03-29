const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const getFilesFromDir = require("./config/file_loader");
const PAGE_DIR = path.join("src", "pages", path.sep);

// loading js files
const jsFiles = getFilesFromDir(PAGE_DIR, [".js"]);
const entry = jsFiles.reduce((obj, filePath) => {
	const entryChunkName = filePath.replace(path.extname(filePath), "").replace(PAGE_DIR, "");
	obj[entryChunkName] = `./${filePath}`;
	return obj;
}, {});

// loading html files
const htmlFiles = getFilesFromDir(PAGE_DIR, [".html"]);
const htmlPlugins = htmlFiles.map(filePath => {
	const fileName = filePath.replace(PAGE_DIR, "");
	return new HtmlWebPackPlugin({
		chunks: [fileName.replace(path.extname(fileName), ""), "vendor"],
		template: filePath,
		filename: fileName
	})
});

module.exports = {
	mode: 'development',
	entry: entry,
	plugins: [...htmlPlugins],
	resolve: {
		alias: {
			src: path.resolve(__dirname, "src"),
			components: path.resolve(__dirname, "src", "components")
		}
	},
	module: {
		rules: [{
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
		}]
	},
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