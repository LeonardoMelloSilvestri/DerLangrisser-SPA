import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Floating from './Components/Floating/Floating';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Characters from './Components/Characters/Characters';
import Items from './Components/Items/Items';

function App() {
  return (
    <div className="App indigo lighten-2 white-text">
      <BrowserRouter>
        <Navbar />
        <Floating />
        <div>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/characters" component={() => <Characters />} />
          <Route path="/items" component={() => <Items />} />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
      )
    }
    
    export default App;
