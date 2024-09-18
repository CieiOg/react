import {Link, NavLink} from 'react-router-dom'
import './NavBar.module.css'

const NavBar = () => {
  return (
    <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'../pages/Historia.jsx'}>Historia</NavLink>
        <NavLink to={'../pages/Cadastro.jsx'}>Cadastro</NavLink>
       
    </nav>
  )
}

export default NavBar