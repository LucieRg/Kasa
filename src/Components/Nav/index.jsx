import "../../styles/nav.scss"
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className='nav'>
    <Link to="/Kasa"> Accueil</Link>
     <Link to="/about">À propos</Link>
    </nav>
  )
}

export default Nav