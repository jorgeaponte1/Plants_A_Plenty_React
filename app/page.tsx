import Navbar from "./components/Navbar"
import HeroVideo from "./components/HeroVideo"
import FeaturedPlant from "./components/FeaturedPlant"
import ProductSlider from "./components/ProductSlider"
import PlantCare from "./components/PlantCare"
import Testimonial from "./components/Testimonial"
import Subscription from "./components/Subscription"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Main Container */}
      <div className="flex flex-col gap-y-10 items-center">
        <HeroVideo />
        {/* Main Container */}
        <div className="w-full m-auto bg-white">
          <FeaturedPlant />
          <ProductSlider />
          <PlantCare />
          <Testimonial />
          <Subscription />
        </div>
        <Footer />
      </div>
    </>
  )
}
