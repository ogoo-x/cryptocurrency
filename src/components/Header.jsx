import styles from './header.module.css' ;
import Illustration from '../Assets/Illustration.webp';
import ButtonInfo from './ButtonInfo';
import Arrow from '../Assets/Arrow Right.png';
import microDesign from '../Assets/microDesign1.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

import React,{useEffect} from 'react'

  

function Header() {
  
  useEffect(()=> {
    AOS.init();
  }, []);

  return (
    <div  data-aos="fade-up"
          data-aos-easing="ease" 
          data-aos-duration="1000"
          data-aos-delay="100">
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={`${styles.children} ${styles.valueProp}`}>
            <div className={styles.prompt}>
              <p className={styles.save}>75% SAVE</p>
              <p>For the Black Friday weekend</p>
            </div>
            <br />
            <h1>Fastest & secure <br /> platform to invest <br /> in crypto</h1>
            <br />
            <p>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
            <br />
            <ButtonInfo title={"Try for FREE"} icon={Arrow} marginLeft={"10px"}/>
          </div>

          <img src={Illustration} 
               alt="Bitcoin Illustration" 
               className={`${styles.illustration} ${styles.children}`}/>
        </div>
      </div>
      <img src={microDesign} alt="" className={styles.microDesign}/>
    </div>
    
  )
}

export default Header