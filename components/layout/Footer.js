import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="w-full h-auto bg-gray-800 mt-10 shadow-xl font-lora">
      <hr className="w-auto mx-3 md:mx-10 mt-10 border-1 border-orange-300"></hr>
      <div className="w-auto mb-10 mx-2 md:mx-10 gap-8 h-auto flex md:flex-row flex-col justify-center md:justify-between pt-10 items-center md:items-end">
        <p className="text-white text-base ">© 2023 Good Taste | All rights reserved.</p>
        <div className="md:w-auto h-auto flex gap-3 text-orange-300 flex-row">
          <Link href={'#'}>
            <Image className="w-6 h-6" src="svg/facebook.svg" width={16} height={16} />
          </Link>
          <Link href={'#'}>
            <Image className="w-6 h-6" src="svg/instagram.svg" width={16} height={16} />
          </Link>
          <Link href={'#'}>
            <Image className="w-6 h-6" src="svg/tiktok.svg" width={16} height={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
