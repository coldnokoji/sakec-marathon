import logo from '../assets/img/logo.png';
import './Navbartwo.css'
import { NavLink } from 'react-router-dom';

const Navbartwo = () => {
  


  return (
    <>
    <div className='nav-body'>
    <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <div><img src={logo} alt="Logo" className="Logo" /></div>
      <div>
      <ul>
        <li><NavLink className="navlink2" to="/" >Home</NavLink></li>
        <li><NavLink className="navlink2" to="/about" >Guide</NavLink></li>
        <li><NavLink className="navlink2" to="/team" >Team</NavLink></li>
        <li><NavLink className="navlink2" to="/contact" >Contact</NavLink></li>
        <li><button class="button-29" role="button">Register</button></li>
      </ul>
      </div>
    </nav>
    <section></section>
    </div>
    </>
  )
}

export default Navbartwo;