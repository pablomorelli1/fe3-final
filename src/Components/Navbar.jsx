import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useUsersState } from '../Context/Context';

const Navbar = () => {
  const { themeState, themeDispatch } = useUsersState();

  const switchTheme = () => {
    if (themeState.theme) {
      themeDispatch({ type: 'SWITCH_DARK' })
    } else {
      themeDispatch({ type: 'SWITCH_LIGHT' })
    }
  }

  return (
    <nav style={{ backgroundColor: themeState.navColor }}>
      <span>Digital House Odontologia</span>
      <div>
        <Link to='/'>
          <h3 style={{ color: themeState.color }}>Home</h3>
        </Link>
        <Link to='/contact'>
          <h3 style={{ color: themeState.color }}>Contact</h3>
        </Link>
        <Link to='/favs'>
          <h3 style={{ color: themeState.color }}>Favs</h3>
        </Link>
        <button className='themeButton' onClick={switchTheme}>
          {themeState.theme ? '🌙' : '🌕'} 
        </button>
      </div>

    </nav>
  )
}

export default Navbar