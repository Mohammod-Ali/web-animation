import { motion } from "framer-motion"
import { useRef } from "react";


const parent = {
     initial : {rotate: 0},
     animate : {rotate: 360}
    
}

const Lesson1 = () => {
    const parentRef = useRef(null)
    return (
        <div
        ref={parentRef}
         className="border border-red-500">
            <motion.div className="size-64 bg-indigo-500  rounded-lg " 
            variants={parent}
            initial='initial'
            animate='animate'
            transition={{type: 'spring', duration: 5}}
            drag
            dragSnapToOrigin
            dragElastic = {0.5}
            dragConstraints={parentRef}
            whileDrag={{
                scale: 1.1,
                boxShadow: '0px 10px 10px #000',
            }}
            >
            
            </motion.div>
        </div>
    );
};

export default Lesson1;