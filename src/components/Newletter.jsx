import styles from "./newsletter.module.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

import React,{useEffect} from 'react';
  
 
function Newletter() {
  
  useEffect(()=> {
    AOS.init();
  }, []);
  return (
    <div className={styles.body}>
      <div className={styles.bg}
           data-aos="zoom-in"
           data-aos-easing="ease" 
           data-aos-duration="1000"
           data-aos-delay="100">
        <div className={styles.mainsection}>
          <div>
            <h3>Start mining now</h3>
            <br />
            <p>Join now with CRAPPO to get the latest news and start mining now</p>
          </div>
          <br />
          <form action="" className={styles.form}>
             <input type="text" placeholder="Enter your email" />
              <br />
             <button>Subscribe</button>
          </form>
         
        </div>
      </div>
    </div>
  )
}

export default Newletter