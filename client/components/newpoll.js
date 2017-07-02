var React = require('react');

class NewPoll extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>New polls page</h1>
        <form action="">
          question
          <input type="text"/><br />
          answer 1
          <input type="text"/><br />
          answer 2
          <input type="text"/>
        </form>
      </div>
    )
  }
}

module.exports = NewPoll;