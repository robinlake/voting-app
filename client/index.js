import React from 'react'
import ReactDOM from 'react-dom'
//import {Router, Route, Link, hashHistory} from 'react-router'
var ReactRouter = require('react-router-dom')
import Login from './components/login.js'
import Header from './components/header.js'
var Router = ReactRouter.BrowserRouter
var Route = ReactRouter.Route
var Switch = ReactRouter.Switch
var Navbar = require('./components/navbar')
var Home = require('./components/home')
var MyPolls = require('./components/mypolls')
var AllPolls = require('./components/allpolls')
var SignIn = require('./components/signin')


class App extends React.Component {
  render(){
    return(
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Login}></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="/mypolls" component={MyPolls}></Route>
              <Route path="/allpolls" component={AllPolls}></Route>
              <Route path="/signin" component={SignIn}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))