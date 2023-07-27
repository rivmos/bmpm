import Product from "../components/Product"
import Newsletter from "../components/Newsletter"
import Socials from "../components/Socials"
import PageContactForm from "../forms/PageContactForm"

function Home() {

  return (
    <>
      <div>
        <Product />
        <Newsletter />
        <PageContactForm />
      </div>
    </>
  )
}

export default Home
