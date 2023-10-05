/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'

export default function FindUsSection() {
  return (
    <section id="contact">
      <div className="w-auto mt-20 mx-3 md:mx-10 lg:mx-0 lg:w-full h-auto">
        <div className="w-full h-auto justify-center">
          <p className="text-3xl md:text-5xl text-center text-white font-bold py-10 font-lora">
            Find Us
          </p>
        </div>
        <div className="w-full h-auto flex flex-col lg:flex-row font-lora">
          <div className="w-full lg:w-9/12 text-5xl text-white">
            <Image priority src="/img/maps.png" width={1920} height={500} />
          </div>
          <div className="w-full lg:w-3/12 text-center flex flex-col gap-8 mt-5 lg:mt-0">
            <div className="w-full h-auto flex flex-col gap-5">
              <p className="text-orange-300 text-2xl">Contact:</p>
              <p className="text-lg text-white ">(518)-918-1284</p>
            </div>
            <div className="w-full h-auto flex flex-col gap-5">
              <p className="text-orange-300 text-2xl">Address:</p>
              <p className="text-lg text-white ">941 Main Street, Suite 201 Newport</p>
            </div>
            <div className="w-full h-auto flex flex-col gap-5">
              <p className="text-orange-300 text-2xl">Write Us:</p>
              <p className="text-lg text-white">info@goodtaste.io</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
