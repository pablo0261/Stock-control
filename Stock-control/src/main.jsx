import React from "react"; 
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"; 
import { Provider } from 'react-redux';
import App from './App'; 
import store from './redux/store/index';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);