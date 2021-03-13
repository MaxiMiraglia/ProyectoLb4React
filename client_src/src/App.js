import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Registro from './components/Registro';
import Login from './components/Login';
import Logged from './components/Logged';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <div className="header">
          <Navbar />
        </div>

        <div className="content">
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/home' component={Home}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/registro' component={Registro}></Route>
            <Route exact path='/logged' component={Logged}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;