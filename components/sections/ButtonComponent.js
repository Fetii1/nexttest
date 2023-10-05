import React from 'react'

export default function ButtonComponent(props) {
  return (
    <div className="w-full h-auto flex justify-center">
      <button className="border-2 w-auto border-orange-300 transition text-orange-300 hover:bg-orange-300 hover:text-slate-800">
        <p className=" p-3 font-karla">{props.title}</p>
      </button>
    </div>
  )
}
