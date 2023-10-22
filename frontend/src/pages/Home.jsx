import { useRef } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import Newsletter from "../components/Newsletter"
import Socials from "../components/Socials"
import PageContactForm from "../forms/PageContactForm"
import ImageCarousal from "../components/ImageCarousal"
import { Link } from "react-router-dom"
import ButtonBorder from "../components/ButtonBorder"
import TextCarousal from "../components/TextCarousal"

function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })


  const variants = {
    visible: { opacity: 0, y: 100 },
    hidden: {
      opacity: 1,
      y: 0
    }
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })
  return (
    <>
      <div>
        <ImageCarousal />

        <motion.div
          animate={scrollYProgress > 0 ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 2, ease: 'easeOut' }}
          ref={ref}
          className="max-w-8xl mx-auto my-8 md:my-32 px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center items-center">
              <img src="images/home-1.jpg" className="md:-mt-28 mb-12 md:mb-0" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-4xl mb-4 md:mb-12">
                Welcome to <br /> BM Packing Solutions
              </h2>
              <div className="flex flex-col gap-4 md:gap-8 text-sm md:text-base ">
                <p>BM Packing is a company with deep rooted relationships was started by a young and energetic entrepreneur in 2006.</p>
                <p>Since its birth BM has grown hard to reach an enviable position among the multi talented business house in the machine industry.</p>
              </div>
              <Link to="/aboutus" ><ButtonBorder text="Learn More" /></Link>
            </div>
          </div>
        </motion.div>

        <div className="bg-lightGrey py-8 md:py-32 px-6 md:px-0">
          <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="grid place-content-center bg-white">
                <img src="/images/home-product-1.jpg" className="w-[80%] h-[250px] md:h-[500px] object-cover" />
              </div>
              <div className="mt-6">
                <p className="text-xl md:text-2xl">FLOWRAP MACHINE</p>
                <p className="text-lightBrown text-xl md:text-2xl">SOAP PACK</p>
              </div>
            </div>
            <div>
              <div className="grid place-content-center bg-white">
                <img src="/images/home-product-2.jpg" className="w-[80%] ml-20 h-[250px] md:h-[500px] object-cover" />
              </div>
              <div className="mt-4">
                <p className="text-xl md:text-2xl">FLOWRAP MACHINE</p>
                <p className="text-lightBrown text-xl md:text-2xl">SOAP PACK</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row max-w-8xl mx-auto my-12 md:my-32 gap-6 px-6 md:px-0">
        <div className="flex flex-col justify-center md:w-1/3 md:pr-40 text-sm md:text-base">
          <p className="mb-2 md:mb-4 text-2xl md:text-4xl">BM Packing <br />Demo</p>
          <p>Our commitment towards quality has always been the driving force behind its success and growth since its inception, and it continues to be the guideline into the future endeavors.</p>
        </div>
        <div className="md:w-2/3">
          <img src="/images/home-2.jpg" />
        </div>
      </div>

      <TextCarousal />
      <PageContactForm />
      <Socials />
      <Newsletter />

    </>
  )
}

export default Home
