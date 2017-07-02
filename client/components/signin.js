var React = require('react');
import Login from './login';
import MyPolls from './mypolls';


class SignIn extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Sign in to create polls</h1>
        {/*<Login />*/}
        <MyPolls />
        <button>Click here to log in </button>
      </div>
    )
  }
}

module.exports = SignIn;