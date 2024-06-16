import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
    <ToastContainer
    position="top-right"
    autoClose={500}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    draggable
    pauseOnHover
    theme="light"
    transition="Bounce" />
    </Provider>
  </React.StrictMode>,
)
