import Navbar from "./components/Navbar"
import HeroVideo from "./components/HeroVideo"
import FeaturedPlant from "./components/FeaturedPlant"
import ProductSlider from "./components/ProductSlider"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
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
          <About />
          <Testimonials />
          <Subscription />
        </div>
        <Footer />
      </div>
    </>
  )
}
