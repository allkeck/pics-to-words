import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/App/App.jsx';

import { images, results } from './data.js';

import './scss/index.scss';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App data={images} results={results} />);
