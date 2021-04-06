import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import About from "./routes/About";
import SingleCocktail from './routes/SingleCocktail';
import Error from './routes/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
