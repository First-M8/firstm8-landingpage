
import React from 'react';
// import NavBar from './components/NavBar';
import Home from './components/Home';
import Team from './components/Team';
import styles from './scss/styles.scss';
import {Route, Switch} from 'react-router'
import About from './components/About';
import Footer from './components/Footer';
//Main body of the frontend.

const App = () => {

  //render Team page logic  

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-column">
        </div>
      </header>
        {/* <NavBar/> */}
        {/* <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/team" render={renderTeam}/>
        </Switch> */}
        <Home></Home>
        <About></About>
        <Team></Team>
        <Footer></Footer>
    </div>
  ) 
}

export default App;

