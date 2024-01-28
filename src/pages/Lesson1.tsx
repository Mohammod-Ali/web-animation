import { easeInOut, motion } from "framer-motion"
import { useRef } from "react";


const parent = {
    hidden: { scale: 0.9, x: 0, y: 0},
    visible: {
        x:[ 0, 300, -300, 0],
        y: [ 0, 300, -300, 0],
        rotate: [ 0, 300, -300, 0],
        scale: 1,
        transition: {
            ease : 'easeInOut',
            duration: 5,
            repeat: Infinity,
            opacity: {
                duration: 0.5,
            },
            rotate: {
                delay: 1,
                repeat: Infinity
            }
        },
    },
    //  initial : {rotate: 0},
    //  animate : {rotate: 360}
    
}

const Lesson1 = () => {
    const parentRef = useRef(null)
    return (
        <div
        ref={parentRef}
         className="border border-red-500">
            <motion.div className="size-64 bg-indigo-500  rounded-lg " 
            variants={parent}
            initial='hidden'
            animate='visible'
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