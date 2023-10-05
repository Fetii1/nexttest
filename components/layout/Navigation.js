import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

const NavItem = ({ children, href }) => {
  const router = useRouter()

  return (
    <li className="w-full flex flex-col hover:cursor-pointer justify-top md:w-auto md:mr-6">
      <Link
        className=" block py-4 md:py-0 border-b border-gray-200 md:border-b-0 md:border-transparent"
        href={href}
      >
        {children}
      </Link>
      {router.asPath == href && (
        <div className=" w-auto md:w-full h-5 -mt-5">
          <div className="w-5 h-1 md:w-2 md:h-2 md:mt-7 mt-1 rounded-none md:rounded-full block mx-auto bg-orange-300" />
        </div>
      )}
    </li>
  )
}

export default function Navigation() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="text-white shadow-lg">
      <div className="container">
        <div className="flex text-center flex-wrap flex-row py-6 justify-between ">
          <div className="md:w-3/12 w-1/2">
            <SVG src="/svg/logo.svg" className="fill-current text-white w-auto h-10" />
          </div>
          <div className="w-1/2 md:hidden flex justify-center sm:justify-end">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <SVG
                src="/svg/menu.svg"
                className="fill-current text-white w-6 h-6"
                onClick={() => setMenu(!menu)}
              />
            </label>
          </div>

          <div
            className={`w-full md:w-1/2 md:flex justify-center md:justify-center ${
              menu ? ' flex' : ' hidden'
            }`}
          >
            <ul className="w-full flex p-5 flex-col md:w-auto md:p-0 font-lora uppercase md:flex-row items-center">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/#about">About</NavItem>
              <NavItem href="/#menu">Menu</NavItem>
              <NavItem href="/#contact">Contact</NavItem>
            </ul>
          </div>
          <div className="w-3/12 hidden lg:block"></div>
        </div>
      </div>
    </div>
  )
}
