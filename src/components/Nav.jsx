import {useState} from 'react';
import Logo from '../Assets/Logo.svg';
import Button from './Button';
import styles from './nav.module.css';

function Nav() {

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.div}>
      <div className={styles.nav}>
        <a href="#">
        <div className={styles.logo}>
          <img src={Logo} alt="" /> 
          <p>CRAPPO</p> 
        </div>
        </a>
        <div className={`${styles.navigation} ${open ? 'navigationopen' : 'navigationclose'}`}>
            <ul>
              <a href="#"><li>Products</li></a>
              <a href="#"><li>Features</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Contact</li></a>
            </ul>
            <div className={styles.cta}>
              <a href="#"><p className={styles.login}>Login</p></a>
              <p>|</p>
              <a href="#"><Button /></a>
            </div>
         
        </div>

        {/* For mobile */}
        <div className={`${styles.hamburger} ${open ? 'rotate180' : 'rotate0'}`} onClick={() => {setOpen(!open)}}>
          <span  className={`${styles.one} ${open ? 'ex' : 'normal'}`} onClick={() => {setOpen(!open)}}></span>
          <span  className={`${styles.two} ${open ? 'ex2' : 'normal'}`} onClick={() => {setOpen(!open)}}></span>
        </div>
      </div>
    </div>
  )
}

export default Nav