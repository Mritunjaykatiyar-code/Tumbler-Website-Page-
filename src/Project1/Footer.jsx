import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaMapLocation } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import paymentMethod from './assets/credit.png'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <div>
      <div className="footer" style={{
        width:"100%",
        height:'370px',
        backgroundColor:'#EF8D07',
        marginTop:'15px'
      }}>
         
       <div className="footer-main" style={{
        display:'flex',
        justifyContent:'space-evenly'
       }}>
        <motion.div initial={{y:100,opacity:'0'}} whileInView={{y:0,opacity:1}} transition={{duration:0.6 , stiffness:180 , damping:10 , type:'tween' , ease:'easeInOut'}}
        
          className="right" style={{
          width:'400px',
          height:'270px',
      
          padding:'35px',
          color:'white'

        }}>
           
            <h3 style={{position:'relative' , top:'15px', fontWeight:700, fontSize:'30px'}}>CODERS CAFE</h3>
            <p style={{position:"relative" , top:"35px" , fontSize:'14px' , width:'300px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero, praesentium ab atque? Quidem maxime, numquam dolores</p>
            <p style={{fontSize:'16px', position:'relative',top:"35px"}}><IoCall /> +1 (123) 456-7890</p>
           <p style={{position:'relative', fontSize:'16px', top:'25px'}}> <FaMapLocation /> Noida, Uttar Pradesh</p>

        </motion.div>
        <motion.div   initial={{y:100,opacity:'0'}} whileInView={{y:0,opacity:1}} transition={{duration:0.6 , stiffness:180 , damping:10 , type:'tween' , ease:'easeInOut',delay:0.4}} 
        
        className="mid" style={{
          width:'400px',
          height:'270px',
         
          padding:'35px',
          color:'white'
          }}>
                         <h3 style={{position:'relative' , top:'15px', fontWeight:700, fontSize:'30px'}}>Quick Links</h3>
                         <p style={{position:'relative', top:'30px', fontSize:'16px', lineHeight:'30px'}}>Home <br />  About <br /> Contact Us <br /> Privacy Policy</p>
                         <p style={{position:'relative',left:'200px', bottom:'105px',fontSize:'16px' , lineHeight:'30px'}}>Home <br /> About <br /> Contact Us <br /> Privacy Policy</p>
          </motion.div>
        <motion.div  initial={{y:100,opacity:'0'}} whileInView={{y:0,opacity:1}} transition={{duration:0.6 , stiffness:180 , damping:10 , type:'tween' , ease:'easeInOut' , delay:0.8}}
        
          className="left" style={{
          width:'400px',
          height:'270px',
          
          padding:'35px',
          color:'white'
          }}>
           <h3 style={{position:'relative' , top:'15px', fontWeight:700, fontSize:'30px'}}>Follow Us</h3>
           <span style={{position:'relative',top:'25px',fontSize:'32px'}}><FaFacebook /> <FaInstagram /> <FaTelegram /> <FaGoogle /></span>

           <h3 style={{position:'relative',top:'45px', fontSize:'20px'}}>Payment Methods</h3>

           <img style={{position:'relative', width:'300px' , top:'45px'}} src={paymentMethod} />
         
        </motion.div>
        
       </div>
          <div style={{
            width:'93%',
            height:'2px',
            backgroundColor:'white',
            margin:'auto',
            marginTop:'30px'
          }}></div>

          <h6 style={{textAlign:'center', marginTop:'20px', color:'white', fontSize:'16px'}}>Copyright © 2024 Company Name. All rights reserved.</h6>
      </div>
    </div>
  )
}

export default Footer;
