import React from 'react';
import ReactDOM from 'react-dom/client';
import './component/padgecss/padge.css';
import App from './App';
import {Menu}  from './component/context/context';
import { BrowserRouter as R } from 'react-router-dom';
import Con from './component/context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
<>

<Con>
<R>
  <App />
</R>
</Con>

</>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
