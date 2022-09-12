import {useState} from 'react';
import styles from './info.module.css';
import Button from './Button';

import AOS from 'aos';
import 'aos/dist/aos.css';

import React,{useEffect} from 'react'

function Info() {

  useEffect(()=> {
    AOS.init();
  }, []);

  const [hashUnit, setHashUnit] = useState('0.055 130 59');
  const [dollar, setDollar] = useState('97.38');

  const Calculate=(e) => {
    e.preventDefault();
    let currentNum=document.querySelector('#num').value;
    let currentRate=document.querySelector('#rate').value;

    let sum= (parseFloat(currentNum)*parseFloat(currentRate))/15000;
    setHashUnit(sum);
    let sum2= sum*1777.32;
    setDollar(sum2);
    document.querySelector('#num').value="";
    
  }

  return (
    <div className={styles.body}>
    <div className={styles.mainsection3}>
        <h3 data-aos="fade-up"
            data-aos-easing="ease" 
            data-aos-duration="1000"
            data-aos-delay="200">How Much Can You Earn With Us?</h3>
        <br />
        <p className={styles.smallText}
           data-aos="fade-up"
           data-aos-easing="ease" 
           data-aos-duration="1000"
           data-aos-delay="200">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Porro, id similique temporibus dignissimos tempore odio?</p>
        <br />
        <div className={styles.valuation}
             data-aos="zoom-in"
             data-aos-easing="ease" 
             data-aos-duration="1000"
             data-aos-delay="200">
          <div>
            <div className={styles.input}>
              <input type="text" name="" id="num" placeholder='Enter your hash rate' />
              <select name="" id="rate">
                <option value="1000000">TH/s</option>
                <option value="0.000001">H/s</option>
                <option value="0.001">KH/s</option>
                <option value="1">MH/s</option>
                <option value="1000">GH/s</option>
              </select>
              <div onClick={Calculate}>
                <Button title={"Calculate"}/>
              </div>
              
            </div>
            <br /><br />
            <div>
              <p className={styles.bluu}>ESTIMATED 24 HOUR REVENUE:</p>
              <h2>{hashUnit}ETH <span className={styles.bluu}>(${dollar})</span> </h2>
              <br />
              <p>Revenue will change based on mining difficulty and Ethereum price.</p>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Info