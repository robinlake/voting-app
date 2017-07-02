
var React = require('react');
var Link = require('react-router-dom').Link;

class About extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>About the polling app</h1>
        <p>Create your own custom polls and have people vote on them</p>
      </div>
    )
  }
}

module.exports = About;