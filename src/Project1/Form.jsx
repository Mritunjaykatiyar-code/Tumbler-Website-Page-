import React from 'react'
import './Form.css'
import Map from './assets/world-map.png'
import backGround from './assets/coffee-cover.jpg'
import { motion, useInView } from 'framer-motion';
import Appstore from './assets/app_store.png'
import Playstore from './assets/play_store.png';
import Footer from './Footer';

const Form = () => {
  return (
    <div>
      <div className="main">
        <div className="form">

        </div>
        <motion.h1 initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'spring', delay: 0.4, duration: 0.9, stiffness: 180, damping: 15, ease: "easeOut" }}>Buy our products <br /> from anywhere</motion.h1>
        <form >
          <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'spring', delay: 0.9, duration: 1.8, stiffness: 180, damping: 15, ease:'easeInOut' }} style={{ display: 'flex', gap: '15px' }}>
            <input style={{ height: '42px', maxWidth: '160px', borderRadius: '5px', border: '1px solid #9CA3AF', padding: '10px' }} type="text" placeholder='Name' />
            <input style={{ height: '42px', maxWidth: '210px', borderRadius: '5px', border: '1px solid #9CA3AF', padding: '10px' }} type="text" placeholder='Email' />
          </motion.div>

          <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'spring', delay: 1.3, duration: 2.6, stiffness: 180, damping: 15, ease:'easeInOut' }} style={{ display: 'flex', gap: '15px', marginTop: '32px' }}>
            <input style={{ height: '42px', maxWidth: '280px', borderRadius: '5px', border: '1px solid #9CA3AF', padding: '10px' }} type="text" placeholder='Country' />
            <input style={{ height: '42px', maxWidth: '160px', borderRadius: '5px', border: '1px solid #9CA3AF', padding: '10px' }} type="text" placeholder='Zip code' />
          </motion.div>
          <motion.button initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'spring', delay: 1.9, duration: 3.5, stiffness: 180, damping: 15, ease:'easeInOut' }} style={{ marginTop: '35px', backgroundColor: '#F19509', height: '42px', width: '379px', border: 'none', color: 'white', borderRadius: '5px' }}>Order Now</motion.button>
        </form>
        <div>
          <motion.img initial={{ scale: 0, opacity: 1 }} whileInView={{ scale: 1 }} transition={{ type: "spring", duration: 3, delay: 1.5, stiffness: 180, damping: 10, ease:'easeInOut' }} style={{ position: 'absolute', left: '570px', top: '1450px', width: '500px', height: "300px" }} src={Map} alt="" />
        </div>
        <div style={{ height: "400px", width: "100%", position: "relative" }}>
          <img
            style={{
              width: "97%",
              height: "400px",
              objectFit: "cover",      
              marginTop: "150px",
              borderRadius: "10px",
            }}
            src={backGround}
            alt=""
          />

          <motion.h1 initial={{y:100}} whileInView={{y:0}} transition={{type:'spring', stiffness:150, damping:12, duration:0.9 ,ease: "easeOut"}}
            style={{
              position: "absolute",
              top: "250px",
              left: "700px",
              fontSize: "36px",
              fontFamily: "sans-serif",
              fontWeight: 600
            }}
          >
            Download the app
          </motion.h1>

          <motion.p initial={{y:100 , opacity:0}} whileInView={{y:0 ,opacity:1}} transition={{type:'spring', stiffness:150, damping:12, duration:0.9 ,delay:0.6 ,ease: "easeOut" }}
          
          style={{
            position: "absolute",
              top: "315px",
              left: "690px",
              width:'350px',
              fontSize:'16px'
          }}>Lorem ipsum dolor sit amet consedolor sit amet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; consectetur adipisicing elit. Officiis</motion.p>
          <motion.img initial={{y:100 , opacity:0}} whileInView={{y:0 ,opacity:1}} transition={{type:'spring', stiffness:150, damping:12, duration:0.9 ,delay:0.9 ,ease: "easeOut"}} style={{
          width:'210px',
          height:'70px',
          position: "absolute",
          top: "380px",
          left: "660px"
         }} src={Appstore} />


         <motion.img initial={{y:100 , opacity:0}} whileInView={{y:0 ,opacity:1}} transition={{type:'spring', stiffness:150, damping:12, duration:0.9 ,delay:1.3 ,ease: "easeOut" }} style={{
          width:'210px',
          height:'73px',
          position: "absolute",
          top: "380px",
          left: "890px"
         }} src={Playstore}  />
        </div>
         
      </div>

      <Footer/>
    </div>
  )
}

export default Form;
