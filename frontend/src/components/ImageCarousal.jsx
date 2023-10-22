import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const images = [
    { src: "/images/ab-1.jpg", mainHeading: 'Packing Solution Is Our Main Strength!', subHeading: 'Soap Wrapping Machines' },
    { src: "/images/ab-2.jpg", mainHeading: 'Packing Solution Is Our Main Strength!', subHeading: 'Soap Wrapping Machines' },
    { src: "/images/ab-3.jpg", mainHeading: 'Packing Solution Is Our Main Strength!', subHeading: 'Soap Wrapping Machines' }
];

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

export const ImageCarousal = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    className="overflow-hidden w-full h-[250px] sm:h-[400px] md:h-[700px]"
                    key={page}
                    src={images[imageIndex].src}
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
                />
                <div className="absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-8">
                    <div className="select-none">
                        <div className="text-xl md:text-4xl text-white text-center">{images[imageIndex].mainHeading.toUpperCase()}</div>
                        <div className="flex justify-center my-4 md:my-8"><div className="w-12 md:w-32 h-[1px] bg-lightBrown"></div></div>
                        <div className="text-base md:text-3xl text-white text-center">{images[imageIndex].mainHeading}</div>
                    </div>
                </div>
            </AnimatePresence>
            <div className="absolute top-[50%] translate-y-[-50%] right-0 rounded-full px-2 md:px-6 text-white text-xl md:text-6xl flex justify-center items-center cursor-pointer" onClick={() => paginate(1)}>
                <i className="fa-solid fa-angle-right"></i>
            </div>
            <div className="absolute top-[50%] translate-y-[-50%] left-0 rounded-full px-2 md:px-6 text-white text-xl md:text-6xl flex justify-center items-center cursor-pointer" onClick={() => paginate(-1)}>
                <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className="absolute bottom-5 left-[50%] translate-x-[-50%] text-white text-sm md:text-2xl flex gap-2">
                {images.map((item, index)=><i key={item.src} className="fa-regular fa-circle cursor-pointer" style={{color:imageIndex === index ? "#b39573" : '#fff'}} onClick={()=> setPage([index, index < page ? -1 : 1])}></i>)}
            </div>
        </div >
    );
};


export default ImageCarousal