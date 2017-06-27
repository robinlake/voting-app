import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Link, hashHistory} from 'react-router'
import Login from './components/login.js'
import {Header} from './components/header.js'


class App extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <Login />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))