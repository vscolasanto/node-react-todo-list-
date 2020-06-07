import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react';

import Menu from './template/Menu';
import Routes from './Routes';

function App() {
  return (
    <div className="container">
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
