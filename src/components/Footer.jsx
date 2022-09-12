import styles from './footer.module.css';
import Logo from '../Assets/Logo.svg';

import Bitcoin from '../Assets/Bitcoin.png';
import Mastercard from '../Assets/Mastercard.png';
import Visa from '../Assets/Visa.png';

import FB from '../Assets/FB.svg';
import IG from '../Assets/IG.svg';
import YT from '../Assets/YT.svg';
import Twitter from '../Assets/Twitter.svg';
import LinkedIn from '../Assets/LinkedIn.svg'

function Footer() {
  return (
    <div className={styles.body}>
      <div className={styles.quickLinks}>
        {/* 01 */}
        <div className={styles.one}>
          <div className={styles.logo}>
            <img src={Logo} alt="" /> 
            <a href="#"> 
              <p>CRAPPO</p> 
            </a>
          </div>
        </div>
        <br /><br /><br />
        {/* 02 */}
        <div className={styles.two}>
          <p className={styles.topic} style={{fontSize: "20px"}}>Quick Link</p>
          <br />
          <ul style={{fontWeight:"300", lineHeight:"2rem"}}>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>Products</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Features</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
        </div>
        <br /><br /><br />
        {/* 03 */}
        <div className={styles.two}>
        <p className={styles.topic} style={{fontSize: "20px", fontWeight: "500"}}>Resources</p>
          <br />
          <ul style={{fontWeight:"300", lineHeight:"2rem"}}>
            <a href="#"><li>Download Whitepaper</li></a>
            <a href="#"><li>Smart Token</li></a>
            <a href="#"><li>Blockchain Explorer</li></a>
            <a href="#"><li>Crypto API</li></a>
            <a href="#"><li>Interest</li></a>
          </ul>
        </div>
        <br /><br /><br />
        {/* 04 */}
        <div  className={styles.four}>
          <h3>We accept following payment systems</h3>
          <br /><br />
          <div className={styles.paymentMedia}>
            <img src={Visa} alt="" />
            <img src={Mastercard} alt="" />
            <img src={Bitcoin} alt="" />
          </div>
        </div>
      </div>

      <br /><br /><br /><br /><br />

      <div className={styles.mainFooter}>
        <p>©2021 CRAPPO. All rights reserved</p>
        <br /><br />
        <div className={styles.socialMediaIcons}>
          <a href="#"><img src={FB} alt="Facebook Icon" className={styles.icon}/></a>
          <a href="https://www.instagram.com/normalisprettyboring/"><img src={IG} alt="Instagram Icon" className={styles.icon}/></a>
          <a href="#"><img src={YT} alt="YouTube Icon" className={styles.icon}/></a>
          <a href="https://twitter.com/OgooAzubogu"><img src={Twitter} alt="Twitter Icon" className={styles.icon}/></a>
          <a href="#"><img src={LinkedIn} alt="LinkedIn Icon" className={styles.icon}/></a>
        </div>
      </div>
      <br /><br /><br />
    </div>
  )
}

export default Footer