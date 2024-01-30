import {  motion, useCycle } from 'framer-motion';

const Lesson7 = () => {
    const [x, cycle] = useCycle(100, -100)
    return (
        <div
         className="border border-red-500">
            <motion.div className="size-64 bg-indigo-500  rounded-lg " 

            animate={{x: x}}
            onTap={() => cycle()}
            >

            </motion.div>
           

        </div>
    );
};

export default Lesson7;