import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Charachter from "./components/charachter";
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Charachter />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;