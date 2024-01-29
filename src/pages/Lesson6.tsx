import { useAnimationControls, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Lesson6 = () => {

    const controls = useAnimationControls()
    const [toggle, setToggle] = useState(false)
    
   useEffect( ( ) =>{
    controls.start((i)=> ({x: 200, transition: { delay: i*1} }))
   },[])
    

    return (


        <div
        onMouseEnter={() => controls.stop()}
         className="border border-red-500">
            <motion.div className="size-64 bg-indigo-500  rounded-lg " 
           animate={controls}
           custom={1}
            >
            <button className='bg-green-500  mb-10 px-2 py3'>Forward</button>
            </motion.div>
            <motion.div className="size-64 bg-indigo-500  rounded-lg " 
           animate={controls}
           custom={2}
            >
            <button className='bg-green-500  mb-10 px-2 py3'>Forward</button>
            </motion.div>
            <motion.div className="size-64 bg-indigo-500  rounded-lg " 
           animate={controls}
           custom={3}
            >
            <button className='bg-green-500  mb-10 px-2 py3'>Forward</button>
            </motion.div>

        </div>
    );
};

export default Lesson6;