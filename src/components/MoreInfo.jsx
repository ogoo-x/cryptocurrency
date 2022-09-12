import Chart from '../Assets/Chart.webp';
import Statistic from '../Assets/Statistic.webp';
import Table from '../Assets/Table.webp';

import Button from './Button'
import styles from './moreinfo.module.css';

import microDesign from '../Assets/microDesign3.png'
import microDesign1 from '../Assets/microDesign4.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

import React,{useEffect} from 'react'
  
function MoreInfo() {
  
  useEffect(()=> {
    AOS.init();
  }, []);

  return (
    <div>
      <img src={microDesign1} alt="" className={styles.microDesign1}/>
      <div className={styles.body}>
        <div className={styles.mainsection}>
          <h3 data-aos="zoom-in"
              data-aos-easing="ease" 
              data-aos-duration="1000"
              data-aos-delay="100">Market Sentiments, Portfolio, And Run The Infrastructure Of Your Choice</h3>
          <br /><br /><br /><br />
          <div className={styles.section1}>
            <div className={`${styles.children} ${styles.valueProp}`}
                 data-aos="fade-in"
                 data-aos-easing="ease" 
                 data-aos-duration="1000"
                 data-aos-delay="100">
              <h3>Invest Smart</h3>
              <br />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur rem ducimus vitae maiores dolorum alias.</p>
              <br />
              <Button title={"Learn More"}/>
            </div>
            <br />
            <img src={Chart} 
                 alt="Chart" 
                 className={`${styles.illustration} ${styles.children}`}
                 data-aos="zoom-in"
                 data-aos-easing="ease" 
                 data-aos-duration="1000"
                 data-aos-delay="100"/>
          </div>
          <br /><br /><br /><br />
          <div className={styles.section2}>
            <div className={`${styles.children} ${styles.valueProp}`}
                 data-aos="fade-in"
                 data-aos-easing="ease" 
                 data-aos-duration="1000"
                 data-aos-delay="100">
              <h3>Detailed Statistics</h3>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Libero deserunt commodi quos adipisci! Corporis, vero?</p>
                <br />
              <Button title={"Learn More"}/>
              <br />
            </div>
            <br />
            <img src={Statistic} 
                 alt="" 
                 className={`${styles.illustration} ${styles.children}`}
                 data-aos="zoom-in"
                 data-aos-easing="ease" 
                 data-aos-duration="1000"
                 data-aos-delay="100"/>
          </div>
          <br /><br /><br /><br />
          <div className={styles.section3}>
            <div className={`${styles.children} ${styles.valueProp}`}
                 data-aos="fade-in"
                 data-aos-easing="ease" 
                 data-aos-duration="1000"
                 data-aos-delay="100">
              <h3>Grow Your Profit And Track Your Investments</h3>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sit enim odit distinctio dolore id incidunt?</p>
              <br />
              <Button title={"Learn More"}/>
            </div>
            <br />
            <img src={Table} 
                 alt="" 
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

export default MoreInfo