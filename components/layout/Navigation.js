import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

const NavItem = ({ children, href }) => {
  const router = useRouter()
  return (
    <li className="w-full flex flex-col hover:cursor-pointer justify-top md:w-auto md:mr-6">
      <Link
        className=" flex flex-col py-4 md:py-0 border-b border-gray-200 md:border-b-0 md:border-transparent"
        href={href}
      >
        {children}
      </Link>

      {router.asPath == href && (
        <div className=" w-auto md:w-full">
          <div className="w-5 h-1 md:mt-2 -mt-3 md:w-2 md:h-2 rounded-none md:rounded-full mx-auto bg-orange-300" />
        </div>
      )}
    </li>
  )
}

export default function Navigation() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="text-white">
      <div className="container">
        <div className="flex text-center flex-wrap flex-row py-6 justify-between ">
          <div className="md:w-3/12 w-1/2">
            <SVG src="/svg/logo.svg" className="fill-current text-white w-auto h-10" />
          </div>
          <div className="w-1/2 md:hidden md:pr-0 flex md:justify-center justify-end pr-5">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <SVG
                src="/svg/menu.svg"
                className="fill-current text-white w-6 h-6"
                onClick={() => setMenu(!menu)}
              />
            </label>
          </div>

          <div
            className={`w-full md:w-1/2 md:flex justify-center items-top md:justify-center ${
              menu ? ' flex' : ' hidden'
            }`}
          >
            <ul className="w-full flex p-5 flex-col md:w-auto md:p-0 font-lora uppercase md:flex-row items-top">
              <NavItem href="/" scroll={false}>
                <p className="hover:text-orange-300 ">Home</p>
              </NavItem>
              <NavItem href="/#about" scroll={false}>
                <p className="hover:text-orange-300 ">About</p>
              </NavItem>
              <NavItem href="/#menu" scroll={false}>
                <p className="hover:text-orange-300 ">Menu</p>
              </NavItem>
              <NavItem href="/#contact" scroll={false}>
                <p className="hover:text-orange-300 ">Contact</p>
              </NavItem>
            </ul>
          </div>
          <div className="w-3/12 hidden lg:block"></div>
        </div>
      </div>
    </div>
  )
}
