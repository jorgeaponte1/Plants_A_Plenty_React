import HeroVideo from "./components/HeroVideo"
import FeaturedPlant from "./components/FeaturedPlant"
import ProductSlider from "./components/ProductSlider"
import PlantCare from "./components/PlantCare"
import Testimonial from "./components/Testimonial"
import Subscription from "./components/Subscription"
import Header from "./components/Header"
import Footer from "./components/Footer"

// import { getServerSession } from "next-auth"
// import { authOptions } from "./api/auth/[...nextauth]/route"

export default function Home() {
  // const session = await getServerSession(authOptions)

  return (
    <>
      {/* Main Container */}
      <Header />
      <div className="flex flex-col sm:gap-y-16 gap-y-8 items-center">
        <HeroVideo />
        {/* Main Container */}
        <div className="lg:w-4/5 w-full m-auto bg-white pb-16 flex flex-col items-center justify-center sm:gap-y-16 gap-y-10 lg:px-5 px-10">
          <FeaturedPlant />
          <ProductSlider />
          {/* <h1>Server Side Rendered</h1>
          <pre>{JSON.stringify(session)}</pre> */}
          <PlantCare />
          <Testimonial />
          <Subscription />
        </div>
      </div>
      <Footer />
    </>
  )
}
