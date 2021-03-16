import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Registro from './components/Registro';
import Login from './components/Login';
import Logged from './components/Logged';
import NotFound from './components/NotFound';
import PublicRoute from './Utils/PublicRoute';
import PrivateRoute from './Utils/PrivateRoute';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <div className="header">
          <Navbar />
        </div>

        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/registro" component={Registro} />
            <PrivateRoute path="/logged" component={Logged} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;