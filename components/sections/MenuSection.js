import React from 'react'
import MenuProductComponent from './MenuProductComponent'

export default function MenuSection() {
  return (
    <section id="menu">
      <div className="w-full h-auto bg-slate-800 flex flex-col">
        <div className="w-auto my-5 md:my-10 h-auto">
          <h2 className="text-white text-3xl font-bold md:text-5xl text-center font-lora">
            Our Popular Menu
          </h2>
        </div>
        <div className="w-auto mx-10 md:1/2 lg:w-2/3 md:mx-10 lg:mx-auto flex flex-col items-center justify-between md:flex-row">
          <MenuProductComponent />
        </div>
      </div>
    </section>
  )
}
