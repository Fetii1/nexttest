import Image from 'next/image'

export default function HeroSection() {
  return (
    <div>
      <div className="w-full h-auto flex md:flex-row flex-col justify-start md:justify-between bg-slate-800">
        <div className="w-full h-auto md:h-full flex flex-col md:flex-row justify-start md:justify-center items-center my-10 md:my-auto">
          <h1 className="text-white text-4xl md:text-7xl lg:text-8xl font-lora font-bold">
            But first, <br className="hidden md:block" />
            food!
          </h1>
        </div>
        <div className="h-auto w-full flex justify-end md:items-center">
          <Image src="/img/hero.png" width={659} height={919} alt="Picture of the author" />
        </div>
      </div>
    </div>
  )
}
