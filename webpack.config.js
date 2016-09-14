const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './main.js',
    output: {
        path: buildPath,
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\js?$/,
                exclude: [nodeModulesPath],
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'react-hmre']
                }
            }

        ]
    }
}