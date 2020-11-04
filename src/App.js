import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Header from './Header.js';
import Technologies from './Technologies.js';

// Component => App contain components
// <Header />
// <Technologies />
const App = () => {
  return (
      <div>
          {/*<Header />*/}
          <Technologies />
      </div>
  );
}

export default App;