import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { delay } from 'motion';
import Blackcoffee from './assets/coffee1-Cf01rm9W.png'
import Coldcoffee from './assets/coffe3.jpg'
import Hotcoffee from './assets/coffee1-Cf01rm9W.png'
import { MdDescription } from 'react-icons/md';
import { div } from 'motion/react-client';
import Form from './Form';

const coffeeData =[
  {
    id:1,
    title:"BLack Coffee",
    description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: Blackcoffee
  },
  {
    id:2,
    title:"Cold Coffee",
    description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: Coldcoffee},
  {
    id:3,
    title:"Hot Coffee",
    description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: Hotcoffee}
]

const Main = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once:false });

  return (

    <div>
      <div className="coffee" ref={ref}>
        <motion.h1 initial={{ y: 100, opacity: 0 }} animate={isInView ?{y:0, opacity:100}:{}} transition={{ type: "spring",  stiffness: 200, damping: 10 }} style={{ marginTop: "50px", textAlign: "center", fontSize: "30px", fontWeight: "700" }}>Fresh and  <span style={{ color: '#F19509' }}>Tasty coffee</span></motion.h1>
      <motion.p initial={{scale:0,}} animate={isInView?{scale:1}:{}} transition={{ type:"spring",delay:0.2,stiffness:200, damping:15} } style={{ width: "500px", marginLeft: "400px", fontSize: "14px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit eum &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  ducimus, distinctio cum eaque totam voluptatem ex dolorem fuga</motion.p>
    </div>

     <div   style={{display:'flex', justifyContent:'space-around', gap:'2rem'  }}>
         {coffeeData.map(({id,title,description,image})=>(
             <motion.div  initial={{y:100,opacity:0}}  whileInView={{y:0,opacity:1}} transition={{type:"spring", stiffness:120,damping:10, delay:0.8, ease:'easeOut',}} key={id} style={{ height: "200px" , width:"200px",textAlign:'center' , }}>
                <motion.img whileHover={{scale:1.1}} src={image} alt={title} style={{ width:"100%", filter: 'drop-shadow(10px 30px 15px #3030307a)'}} />
                <h3 style={{color:'#F19509', marginTop:'0.8rem' , fontSize:'24px' , fontWeight:'700'}}>{title}</h3>
                <p style={{fontSize:'16px', textAlign:'center'}}>{description}</p>
             </motion.div>
          
         ))}
     </div>
    <Form/>
    </div >

  
    
  )
}

export default Main;

