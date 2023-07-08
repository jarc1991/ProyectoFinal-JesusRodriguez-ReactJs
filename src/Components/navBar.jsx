import CardWid from './cardWidget'
import './navBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    
    <>

    <nav>

      <div className='navContainer'>

            <Link to='/' className='linkLogo'>
            <h3 className="titleNav">Adele Store</h3>
            </Link>

            <NavLink to={`/categoria/indumentaria`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><button className="btn__nav">Indumentaria</button></NavLink>
            <NavLink to={`/categoria/discos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><button className="btn__nav">Discos</button></NavLink>
            <NavLink to={`/categoria/deportes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><button className="btn__nav">Deportes</button></NavLink>
            <NavLink to={`/categoria/box`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><button className="btn__nav">Box</button></NavLink>

            <CardWid className="Card"/>

      </div>

    </nav>

    </>
  )
}

export default NavBar

