import React from 'react';
import { render } from 'react-dom';
import Foo from './components/Foo/Foo';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './components/styles.scss';

render(
    <Foo/>,
    document.getElementById('container')
);