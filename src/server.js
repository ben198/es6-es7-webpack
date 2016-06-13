import express from 'express';
import path from 'path';
import httpProxy from 'http-proxy';
import bundle from './server/bundle';
import http from 'http';

const proxy = httpProxy.createProxyServer();
const app = express();
const port = 3000;
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

bundle();
app.all('/dist/*', (req, res) => {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
});

proxy.on('error', (e) => {
    console.log('Could not connect to proxy, please try again...');
});

const server = http.createServer(app).listen(port, () => {
    console.log(`Our new app is listening on port ${port}`);
});
