/* eslint-disable react/jsx-key */
import MenuItems from 'content/MenuItems'
import Image from 'next/image'
import React from 'react'

export default function MenuProduct() {
  return MenuItems.menuCards.map((card) => (
    <div className="w-auto h-auto md:m-5 flex flex-col mb-5">
      <Image src={card.src} width={500} height={500} alt={'Just another menu image'} />
      <div className="w-full h-auto text-center">
        <p className="text-white font-lora font-bold text-2xl pt-3 pb-5">{card.title}</p>
      </div>
    </div>
  ))
}
