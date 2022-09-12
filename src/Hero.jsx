import React from 'react';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Info from "./components/Info";
import Coins from "./components/Coins";
import MoreInfo from "./components/MoreInfo";
import Newletter from './components/Newletter';
import Footer from './components/Footer';

function Hero() {
  return (
    <div>
        <Nav />
     <Header />
     <Stats />
     <Info />
     <Coins />
     <MoreInfo />
     <Newletter />
     <Footer />
    </div>
  )
}

export default Hero