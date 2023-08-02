import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//create root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter> 
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);
/*
ReactDOM.render(
          <App />,
  document.getElementById('root')
);*/
