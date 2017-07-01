var React = require('react');
import Login from './login'


class SignIn extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Sign in to create polls</h1>
        {/*<Login />*/}
      </div>
    )
  }
}

module.exports = SignIn;