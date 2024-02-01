import {  motion, useAnimate } from 'framer-motion';

const Lesson9 = () => {

    const [ scope, animate ] = useAnimate()

    const handleClick = () => {
        animate([
            [scope.current, {rotate : 45 }],
            [scope.current, {opacity : 0 }],
            [scope.current, {rotate : 45 }],
            [scope.current, {opacity : 1 }],
            [scope.current, {rotate : 95 }],
        ])
    }

    return (
        <div
         className="border border-red-500">
            <div className="size-64 bg-indigo-500  rounded-lg " 
            ref={scope}
           onClick={handleClick}
            >
            </div>
           

        </div>
    );
};

export default Lesson9;