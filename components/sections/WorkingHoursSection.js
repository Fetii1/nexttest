import React from 'react'
import ButtonComponent from './ButtonComponent'

export default function WorkingHoursSection() {
  return (
    <div>
      <div className="w-full h-auto mt-10">
        <div className="w-full mt-16 md:mb-20 h-full">
          <ButtonComponent title="Get Directions" />
        </div>
        <div className="w-auto mx-5 md:mx-0 md:w-full h-full bg-gray-800 flex flex-col justify-evenly lg:flex-row shadow-lg">
          <div
            className="w-full h-72 flex justify-center items-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('/img/workin.png')` }}
          >
            <h1 className="w-full h-full flex items-center justify-center font-bold text-3xl md:text-5xl text-orange-300 bg-gradient-to-r font-lora from-slate-800 to-slate-800/50">
              Working Hours
            </h1>
          </div>
          <div className="w-full h-full flex bg-gary-800 justify-center">
            <div className="w-full h-auto p-10 flex justify-center gap-5 items-center text-center flex-col lg:flex-row">
              <div className="w-auto h-auto flex flex-col gap-6 lg:gap-8 mb-2 md:mb-0">
                <p className="text-xl uppercase text-white font-karla">Monday to Friday</p>
                <p className="text-white text-2xl font-bold font-lora">08:00 AM</p>
                <p className="text-white text-2xl font-bold font-lora">03:00 PM</p>
              </div>
              <div className="w-auto h-auto flex flex-col gap-6 lg:gap-8 font-karla">
                <p className="text-xl uppercase text-white">Saturday</p>
                <p className="text-white text-2xl font-bold font-lora">08:00 AM</p>
                <p className="text-white text-2xl font-bold font-lora">04:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
