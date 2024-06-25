import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';// eslint-disable-next-line no-unused-vars
import React from 'react'
import HomeRouting from './routing/homerouting/HomeRouting'

const App = () => {
  return (
    <Router>
      <HomeRouting />
      <ToastContainer /> {/* Place ToastContainer here */}
    </Router>
  );
};

export default App;
