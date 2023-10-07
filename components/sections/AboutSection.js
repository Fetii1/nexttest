import React from 'react'
import AboutCard from '../AboutCard'

export default function AboutSection() {
  return (
    <section id="about" className="container py-14 2xl:text-3xl">
      <div className="w-full h-auto flex lg:flex-row flex-col">
        <div className="w-auto mx-5 md:mx-10 md:w-auto text-center md:text-left lg:pl-8 lg:w-7/12 h-auto">
          <p className="text-3xl md:text-5xl my-5 font-bold font-lora text-white">How it started</p>
          <p className="text-white font-karla py-5">
            Welcome to our restaurant in Michigan, where we serve up delicious food with a side of
            warmth and hospitality. Our menu features a wide variety of dishes that are prepared
            using the freshest ingredients, sourced from local farmers and suppliers. Whether you're
            in the mood for a juicy steak, a crisp salad, or a hearty pasta dish, our chefs have got
            you covered. At our restaurant, we pride ourselves on providing a memorable dining
            experience, from the moment you step through the door to the last bite of dessert. Our
            knowledgeable and friendly staff are always on hand to answer any questions you may have
            and ensure that your dining experience is nothing short of exceptional. So come on down
            and join us for a meal you will not forget!
          </p>
        </div>
        <div className=" w-auto mx-5 md:mx-10 md:grid md:grid-cols-2 lg:w-5/12 md:gap-4 items-center lg:mr-8">
          <AboutCard />
        </div>
      </div>
    </section>
  )
}
