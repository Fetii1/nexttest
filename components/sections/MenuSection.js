import React from 'react'

import MenuProduct from '../MenuProduct'

export default function MenuSection() {
  return (
    <section id="menu" className="max-w-4xl mx-auto">
      <div className="w-full h-auto flex flex-col">
        <div className="w-auto my-3 md:my-10 h-auto">
          <h2 className="text-white text-3xl font-bold md:text-5xl text-center font-lora">
            Our Popular Menu
          </h2>
        </div>
        <div className="w-auto mx-10 md:1/2 lg:w-2/3 md:mx-10 lg:mx-auto flex flex-col items-center justify-between md:flex-row">
          <MenuProduct />
        </div>
      </div>
    </section>
  )
}
