import { motion } from "framer-motion"


const parent = {
     initial : {rotate: 0},
     animate : {rotate: 360}
    
}

const Lesson1 = () => {
    return (
        <div>
            <motion.div className="size-64 bg-indigo-500  rounded-lg " 
            variants={parent}
            initial='initial'
            animate='animate'
            transition={{type: 'spring', duration: 5}}
            >
            
            </motion.div>
        </div>
    );
};

export default Lesson1;