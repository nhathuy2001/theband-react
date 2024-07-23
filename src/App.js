import React from'react';
import "./styles/style.scss"
import Home from './components/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Content/>
      <Home/>
    </div>
  );
}

export default App;
