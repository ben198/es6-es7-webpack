import webpack from 'webpack';
import path from 'path';
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'dist');
const mainPath = path.resolve(__dirname, 'src', 'client.js');

const config = {
    devtool: 'eval',
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        mainPath
    ],
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: [nodeModulesPath],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};

export default config;
