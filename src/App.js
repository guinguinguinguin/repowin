import React, { useEffect } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Workspace from './components/layout/Workspace';
import store from './store/index';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const getInitialScreen = () => {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Workspace />} />
            </Routes>
          </BrowserRouter>
      </Provider>
    )
  };

  return (
    getInitialScreen()
  );
}

export default App;
