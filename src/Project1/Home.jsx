import React, { forwardRef, useRef } from 'react'
import './Home.css'
import Navbar from './Navbar'
import Black from './assets/black.png'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import Main from './main'
import { Form } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useState } from 'react'



const Home = () => {
    const [showSlidebar, setShowSlidebar ] = useState(false)
    const togglebar =()=>{
      setShowSlidebar(prev => !prev);
    }
  
  return (
    
    <div>
    <div className='hero'>
      < Navbar onToggleSidebar={togglebar} />

      <motion.h1  initial={{y:-100 , opacity:0}} whileInView={{y:0,opacity:1}}  transition={{ type:"spring" ,duration:0.2 ,delay:1.3, stiffness:200,damping:10}} style={{width:"30px", fontSize:'4.7rem', fontWeight:700, color:"#F1DABF", padding:'80px'}}>Blvck Tumbler</motion.h1>
      
      <motion.div initial={{scale:0,opacity:1}} animate={{scale:1}} transition={{type:"spring", duration:0.4 ,delay:0.4, stiffness:180,damping:10}} className='coffe-mug'>
        <img src={Black}  alt="" />
      </motion.div>
      <motion.div initial={{y:100, opacity:0, }} whileInView={{ y:0 ,opacity:1}} transition={{type:"spring", delay:1.2,stiffness:180,damping:10}} className="coffe-circle">

      </motion.div>

     <motion.div initial={{y:100, opacity:0 }} whileInView={{y:0, opacity:1}} transition={{  type:"spring",delay:1.8,stiffness:200,damping:12}} className="parent-box">
     <div className="child-box">
       <div className="content-box">
        <h1 style={{  fontSize:"24px",fontWeight:"400", lineHeight:"2.8rem"}}>Black Lifestyle Lovers,</h1>
        <h1  style={{color:"#90867A",fontSize:"14px", fontWeight:"400", width:"400px", lineHeight:"1.7rem"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur, cumque eos neque dolorem <br />architecto deserunt quis voluptatibus in quisquam quia <br /> ducimus</h1>
       </div>
       <div className="color-box"></div>
     </div>

   <div className="child-box1">
       <div className="content-box1">
        <h1 style={{  fontSize:"24px",fontWeight:"400", lineHeight:"2.8rem"}}>Blvck Tumbler
</h1>
        <h1  style={{color:"#90867A",fontSize:"14px", fontWeight:"400", width:"400px", lineHeight:"1.7rem"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur,Delectus aspernatur, Delectus aspernatur,Delectus aspernatur <br /> ducimus</h1>
       </div>
       <div className="color-box1"></div>
     </div>
     
     </motion.div>
      <AnimatePresence>
      {showSlidebar && (
      <motion.div   initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
             
              transition={{ type: 'spring', stiffness: 120, damping: 10 ,ease:'eseOut' }}   className="slide-bar"  >
        <div style={{    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    marginTop: '200px',
    paddingLeft:'20px'
}}>
        <div style={{ width:'1px',backgroundColor:'white', height:"75px"   }}></div>
        <div style={{ fontSize:'38px', color:'white' }}>
          <FaFacebook />  <br />
         <AiFillTwitterCircle /> <br />
          <FaInstagram />
        </div>
        <div style={{width:'1px',backgroundColor:'white', height:"75px"    }}></div>
        </div>
      </motion.div>
      )}
      </AnimatePresence>
    </div>
     
     <Main/>
      
    </div>
  )
}

export default Home
