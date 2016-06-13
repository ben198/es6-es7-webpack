import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackConfig from '../../webpack.config.js';
import path from 'path';
const mainPath = path.resolve(__dirname, '..', 'client.js');

function bundle() {

    let bundleStart = null;
    const compiler = webpack(webpackConfig);
    compiler.plugin('compile', () => {
        console.log('Bundling...');
        bundleStart = Date.now();
    });
    compiler.plugin('done', () => {
        console.log(`Bundled in ${Date.now() - bundleStart} ms!`);
    });
    const bundler = new webpackDevServer(compiler, {
        publicPath: '/dist/',
        hot: true,
        quiet: false,
        noInfo: true,
        stats: {
            colors: true 
        }
    });
    bundler.listen(8080, 'localhost', () => {
        console.log('Bundling project, please wait...');
    });

}

export default bundle;
