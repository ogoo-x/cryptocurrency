import styles from './coins.module.css';
import {useState} from 'react';

import Bitcoin from '../Assets/bitcoincoin.png';
import Eth from '../Assets/eth.png';
import Lite from '../Assets/lite.png';

import Arrow from '../Assets/ArrowRightTransparent.png';
import ArrowFilled from '../Assets/Arrow Right.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

import React,{useEffect} from 'react'

function Coins() {

  useEffect(()=> {
    AOS.init();
  }, []);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div className={styles.body}>
    <div className={styles.container}> 
    <div className={styles.mainsection4}>
      <h3 data-aos="zoom-in"
          data-aos-easing="ease" 
          data-aos-duration="500"
          data-aos-delay="100">Trade Securely And Market The High Growth Cryptocurrencies.</h3>
      <br /><br />
      <div className={styles.cards}>
        <div className={`${styles.card} ${open? "active" : "notactive"}`} 
             onClick={() => {setOpen(true); 
                             setOpen1(false); 
                             setOpen2(false)}}>
          <img src={Bitcoin} alt="" />
          <br />
          <div className={styles.name}>
            <h2>Bitcoin</h2>
            <p>BTC</p>
          </div>
          <br />
          <p>Digital currency in which a record of transactions is maintained.</p>
          <br />
          <div className={styles.swapArrow}>
            <img src={Arrow} alt="" className={`${styles.clearArrow} ${open? "notvisible" : "visible"}`}/>
            <div className={`${styles.filledArrow} ${open? "visible" : "notvisible"}`}>
              <p>Start Mining</p>
              <img src={ArrowFilled} alt="" />
            </div>
        </div>
        </div>
       
        <br />
        <div className={`${styles.card} ${open1? "active" : "notactive"}`} 
             onClick={() => {setOpen1(true);
                             setOpen(false); 
                             setOpen2(false);}}>
            <img src={Eth} alt="" />
            <br />
            <div className={styles.name}>
              <h2>Ethereum</h2>
              <p>ETH</p>
            </div>
            <br />
            <p>Blockchain technology to create and run decentralized digital applications.</p>
            <br />
            <div className={styles.swapArrow}>
              <img src={Arrow} alt="" className={`${styles.clearArrow} ${open1? "notvisible" : "visible"}`}/>
              <div className={`${styles.filledArrow} ${open1? "visible" : "notvisible"}`}>
                <p>Start Mining</p>
                <img src={ArrowFilled} alt="" />
              </div>
          </div>
        </div>
        
        <br />
        <div className={`${styles.card} ${open2? "active" : "notactive"}`} 
             onClick={() => {setOpen2(true);
                             setOpen1(false); 
                             setOpen(false);}}>
            <img src={Lite} alt="" />
            <br />
            <div className={styles.name}>
              <h2>Litecoin</h2>
              <p>LTC</p>
            </div>
            <br />
            <p>Cryptocurrency that enables instant payments to anyone in the world.</p>
            <br />
            <div className={styles.swapArrow}>
              <img src={Arrow} alt="" className={`${styles.clearArrow} ${open2? "notvisible" : "visible"}`}/>
              <div className={`${styles.filledArrow} ${open2? "visible" : "notvisible"}`}>
                <p>Start Mining</p>
                <img src={ArrowFilled} alt="" />
              </div>
          </div>
         </div>
       
      </div>
    </div>
    </div> 
    </div>
  )
}

export default Coins