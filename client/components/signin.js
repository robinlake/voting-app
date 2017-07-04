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
        <h1>Don't have an account? Sign up</h1>
        Validation
        <form action="" method="post">
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input type="text" id="email" name="email" class="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="passwword" id="password" name="password" className="form-control"/>
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    )
  }
}

module.exports = SignIn;