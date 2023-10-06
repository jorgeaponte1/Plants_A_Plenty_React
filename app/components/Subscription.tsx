import React from "react"
import Image from "next/image"

function Subscription() {
  return (
    <section
      id="subscription"
      className="h-auto flex flex-col items-center justify-center"
    >
      <h2 className="font-sansita_swashed font-bold text-center text-5xl sm:text-6xl flex justify-center items-center mx-16 mb-16">
        The Gift That Keeps On Giving
      </h2>
      <div className="flex lg:flex-row flex-col justify-between items-center gap-y-10">
        <article className="flex flex-col justify-center items-center gap-y-10 lg:w-1/2">
          <p>
            Welcome to our monthly plant subscription service! Each month,
            you&apos;ll receive a carefully curated selection of plants straight
            to your door, chosen for their beauty and ease of care. From lush
            ferns to colorful succulents, our expert team will handpick a
            variety of plants that will thrive in your home or office.
          </p>

          <p>
            With your subscription, you&apos;ll also receive detailed care
            instructions and tips to ensure your plants stay healthy and
            vibrant. Plus, as a subscriber, you&apos;ll enjoy exclusive access
            to new and rare plant varieties, as well as discounts on other
            plant-related products in our shop.
          </p>

          <p>
            Whether you&apos;re a seasoned plant enthusiast or just starting out
            on your green journey, our subscription service is the perfect way
            to bring more life and joy into your space. So why wait? Sign up
            today and start enjoying the benefits of having beautiful, healthy
            plants in your home every month!
          </p>
        </article>
        <article className="lg:w-1/2">
          <Image
            src="/subscriptionImage.webp"
            alt="four house plants photo"
            width={400}
            height={400}
            className="block sm:w-[400px] w-full h-auto mx-auto rounded-[50%] border-[30px] border-solid border-[wheat]"
          />
          <button className="flex items-center justify-center w-[200px] text-center align-middle uppercase font-bold tracking-[2px] text-[black] transition-all duration-[0.3s] ease-linear mt-10 mb-auto mx-auto px-2.5 py-5 rounded-none border-[3px] border-solid border-black hover:text-[#c4c4c4] font-serif">
            Subscription
          </button>
        </article>
      </div>
    </section>
  )
}

export default Subscription
