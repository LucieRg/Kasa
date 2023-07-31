import "../../styles/nav.scss"
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className='nav'>
    <NavLink to="/Kasa"> Accueil</NavLink>
     <NavLink to="/about">À propos</NavLink>
    </nav>
  )
}

export default Nav