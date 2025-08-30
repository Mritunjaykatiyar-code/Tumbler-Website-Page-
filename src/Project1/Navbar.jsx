import React, { useRef, useState } from 'react'
import'./Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, spring } from 'framer-motion'
import Home from './Home.jsx'

const Navbar = ({onToggleSidebar}) => {



  
  return (
    <motion.div initial={{y:-100,opacity:0}}  animate={{y:0, opacity:1}} transition={{ type:"spring", stiffness:120,damping:10, duration:0.3}} className='nav'>
    <h1 style={{color:'#F19509', fontSize:'1.5rem'}}>CODERS <span style={{color:"white"}}>COFFEE.</span></h1>
    <GiHamburgerMenu style={{color:"white", fontSize:"1.9rem" ,zIndex:'10', cursor:'pointer'}}  onClick={onToggleSidebar}  />
    </motion.div>
  )
}

export default Navbar;
