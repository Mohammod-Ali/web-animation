import  { useEffect, useRef } from 'react';
import {  ElementOrSelector, inView, motion, useInView } from 'framer-motion';


const Lesson8 = () => {

    const ref = useRef<HTMLDivElement>(null)

    // useEffect( () => {
    //     inView(ref.current as ElementOrSelector, (info) => {
    //         console.log('in view', info)
    //     })
    // },[])

    const inView = useInView(ref)

     

    return (
        <div
         className="border border-red-500">
            <motion.div className="size-64 bg-indigo-500  rounded-lg " 

            ref={ref}
            animate={ inView ? {opacity: 1, x: 0, transition: {delay: 1}} : { opacity: 0, x: -500 }}
            >

            </motion.div>
           

        </div>
    );
};

export default Lesson8;