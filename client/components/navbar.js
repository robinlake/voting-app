var React = require('react')
var ReactRouter = require('react-router-dom')
var NavLink = ReactRouter.NavLink

function Navbar() {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName='active' to='/mypolls'>
          my polls
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/allpolls'>
          all polls
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/about'>
          about
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/signin'>
          sign in
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/newpoll'>
          new poll
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Navbar