import Newsletter from "../components/Newsletter"
import Socials from "../components/Socials"
import PageContactForm from "../forms/PageContactForm"
import ImageCarousal from "../components/ImageCarousal"
import { Link } from "react-router-dom"
import ButtonBorder from "../components/ButtonBorder"
import TextCarousal from "../components/TextCarousal"

function Home() {

  return (
    <>
      <div>
        <ImageCarousal />

        <div className="max-w-8xl mx-auto my-32">
          <div className="grid grid-cols-2">
            <div>
              <img src="images/home-1.jpg" className=" -mt-28" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl mb-12">
                Welcome to <br /> BM Packing Solutions
              </h2>
              <div className="flex flex-col gap-8">
                <p>BM Packing is a company with deep rooted relationships was started by a young and energetic entrepreneur in 2006.</p>
                <p>Since its birth BM has grown hard to reach an enviable position among the multi talented business house in the machine industry.</p>
              </div>
              <Link to="/aboutus" ><ButtonBorder text="Learn More" /></Link>
            </div>
          </div>
        </div>

        <div className="bg-lightGrey py-32">
          <div className="max-w-8xl mx-auto grid grid-cols-2 gap-4">
            <div>
              <div className="grid place-content-center bg-white">
                <img src="/images/home-product-1.jpg" className="w-[80%] h-[500px]" />
              </div>
              <div className="mt-6">
                <p className="text-2xl">FLOWRAP MACHINE</p>
                <p className="text-lightBrown text-2xl">SOAP PACK</p>
              </div>
            </div>
            <div>
              <div className="grid place-content-center bg-white">
                <img src="/images/home-product-2.jpg" className="w-[80%] ml-20 h-[500px]" />
              </div>
              <div className="mt-4">
                <p className="text-2xl">FLOWRAP MACHINE</p>
                <p className="text-lightBrown text-2xl">SOAP PACK</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-w-8xl mx-auto my-28">
        <div className="flex flex-col justify-center w-1/3 pr-40">
          <p className=" mb-4 text-4xl">BM Packing <br />Demo</p>
          <p>Our commitment towards quality has always been the driving force behind its success and growth since its inception, and it continues to be the guideline into the future endeavors.</p>
        </div>
        <div className="w-2/3">
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
