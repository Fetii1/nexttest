/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import AboutCards from 'content/AboutCards'
import Image from 'next/image'
import React from 'react'

export default function AboutCard() {
  return AboutCards.cards.map((card) => (
    <div className="p-5 w-90 h-full border-2 my-3 md:my-0 border-orange-300 flex flex-col gap-4 items-start">
      <Image key={card.id} src={card.src} width={32} height={32} />
      <h2 key={card.id} className="text-white font-lora">
        {card.title}
      </h2>
      <p key={card.id} className="text-white font-karla">
        {card.description}
      </p>
    </div>
  ))
}
