import styles from './stats.module.css';
import Button from './Button';

import User from '../Assets/UserIcon.png';
import Earth from '../Assets/EarthIcon.png';
import Chart from '../Assets/ChartIcon.png';

import EthIllustration from '../Assets/EthIllustration.webp';
import microDesign from '../Assets/microDesign2.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

import React,{useEffect} from 'react'

function Stats() {

  useEffect(()=> {
    AOS.init();
  }, []);

  return (
    <div>
      <div className={styles.body}>
      <div className={styles.mainsection2}>
        <div className={styles.center}>
          <div className={styles.statistics}>
            <div className={styles.individualStat}
                  data-aos="fade-up"
                  data-aos-easing="ease" 
                  data-aos-duration="1000"
                  data-aos-delay="200">
              <img src={Chart} alt="" className={styles.statIcon}/>
              <div className={styles.statText}>
                <h2>$30B</h2>
                <p>Digital Currency Exchange</p>
              </div>
            </div>
            
            <div className={styles.individualStat}
                  data-aos="fade-up"
                  data-aos-easing="ease" 
                  data-aos-duration="1000"
                  data-aos-delay="200">
              <img src={Earth} alt="" className={styles.statIcon}/>
              <div className={styles.statText}>
                <h2>190+</h2>
                <p>Countries Around the World</p>
              </div>
            </div>

            <div className={styles.individualStat}
                  data-aos="fade-up"
                  data-aos-easing="ease" 
                  data-aos-duration="1000"
                  data-aos-delay="200">
              <img src={User} alt="" className={styles.statIcon}/>
              <div className={styles.statText}>
                <h2>$10M</h2>
                <p>Trusted Wallet Investors</p>
              </div>
            </div>
          </div>
        </div>
        
        <br />
        <br />
        <br />

        <div className={styles.container}>
          <div className={`${styles.valueProp} ${styles.children}`}
                data-aos="fade-up"
                data-aos-easing="ease" 
                data-aos-duration="1000"
                data-aos-delay="200">
            <h1>Why you should choose CRAPPO</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laboriosam? 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, praesentium.</p>
            <br />
            <Button title={"Learn More"}/>
          </div>
          <img src={EthIllustration} 
               alt="Ethereum Illustration" 
               className={`${styles.illustration} ${styles.children}`}
               data-aos="zoom-in"
               data-aos-easing="ease" 
               data-aos-duration="1000"
               data-aos-delay="100"/>
        </div>
      </div>
      </div>
      <img src={microDesign} alt="" className={styles.microDesign}/>
    </div>
  )
}

export default Stats