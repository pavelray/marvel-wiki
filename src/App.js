import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/Header/Header.component';
import AboutPage from './pages/AboutPage/AboutPage.component';
import Charecters from './pages/CharecterPage/Charecter.component';
import HomePage from './pages/HomePage/HomePage.component';
import CharecterSearchPage from './pages/SearchPage/CharecterSearchPage.component';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/charecters" component={Charecters} />
        <Route exact path="/search" component={CharecterSearchPage} />
        <Route exact path="/search/:name" component={CharecterSearchPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
