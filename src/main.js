import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './components/styles.scss';

render(
    <App/>,
    document.getElementById('appRoot')
);