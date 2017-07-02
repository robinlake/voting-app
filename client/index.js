import React from 'react'
import ReactDOM from 'react-dom'
//import {Router, Route, Link, hashHistory} from 'react-router'
var ReactRouter = require('react-router-dom')
var Header = require('./components/header')
var Router = ReactRouter.BrowserRouter
var Route = ReactRouter.Route
var Switch = ReactRouter.Switch
import { createBrowserHistory } from 'history';
var Navbar = require('./components/navbar')
var Home = require('./components/home')
var MyPolls = require('./components/mypolls')
var AllPolls = require('./components/allpolls')
var SignIn = require('./components/signin')
import { Provider } from 'react-redux';
import store, { history } from './store'

class App extends React.Component {
  render(){
    return(
      <div>
        <Provider store={store}>
          <Router history={history} >
            <div>
              <Header />
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/mypolls" component={MyPolls}></Route>
                <Route path={"/home"} component={Home}></Route>
                <Route path="/allpolls" component={AllPolls}></Route>
                <Route path="/signin" component={SignIn}></Route>
              </Switch>
            </div>
          </Router>
        </Provider>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))