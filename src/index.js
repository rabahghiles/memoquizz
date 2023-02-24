import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './ui/views/app.view';
import Final from './ui/views/final.view';
import Quizz from './ui/views/quizz.view';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/quizz' element={<Quizz />} />
        <Route path='/final' element={<Final />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
