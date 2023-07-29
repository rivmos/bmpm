import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { testimonialsData } from "../data/testimonials";

const variants = {
    enter: (direction) => {
        return {
            display: 'none',
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        display: 'block',
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            display: 'none',
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const TestimonialSlide = ({imageIndex}) => {
    return (
        <>
            <div className="select-none">
                <div className="text-xl md:text-3xl text-center mb-8">{testimonialsData[imageIndex].clientComment.toUpperCase()}</div>
                <p className="text-sm md:text-xl text-center">{testimonialsData[imageIndex].clientMessage}</p>
                <div className="flex justify-center my-8"><div className="w-16 h-[1px] bg-white"></div></div>
                <div className="text-base md:text-xl text-center">{testimonialsData[imageIndex].clientName}</div>
                <div className="text-base md:text-xl text-center">{testimonialsData[imageIndex].clientCompanyName}</div>
            </div>
        </>
    )
}

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

export const TextCarousal = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 testimonials, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 testimonialsData.
    const imageIndex = wrap(0, testimonialsData.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="relative overflow-hidden bg-cara">
            <div className="text-center mt-6 md:mt-16 text-darkGrey text-2xl md:text-4xl">Clients Are Important To Us</div>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    className="overflow-hidden w-full h-[250px] sm:h-[400px] md:h-[600px]"
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                >
                    <div className="absolute md:px-8 py-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-white border-2 text-white">
                        <TestimonialSlide imageIndex={imageIndex}/>
                    </div>
                </motion.div>
            </AnimatePresence>
            <div className="absolute top-[50%] translate-y-[-50%] right-0 rounded-full w-16 h-16 text-white text-xl md:text-6xl flex justify-center items-center cursor-pointer" onClick={() => paginate(-1)}>
                <i class="fa-solid fa-angle-right"></i>
            </div>
            <div className="absolute top-[50%] translate-y-[-50%] left-0 rounded-full w-16 h-16 text-white text-xl md:text-6xl flex justify-center items-center cursor-pointer" onClick={() => paginate(1)}>
                <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="absolute bottom-5 left-[50%] translate-x-[-50%] text-white text-sm md:text-2xl flex gap-2 ">
                {testimonialsData.map((item, index) => <i key={item.clientName} class="fa-solid fa-circle cursor-pointer" style={imageIndex === index ? {color:"#fff"} : {color:'#00000050'}} onClick={() => setPage([index, index < page ? -1 : 1])}></i>)}
            </div>
        </div >
    );
};


export default TextCarousal