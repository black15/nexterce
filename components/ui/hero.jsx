import React from 'react'

export const Hero = () => {
  return (
    <section
      className="h-72 md:h-80 lg:h-96 xl:h-[500px] m-4 bg-[url('https://s3.amazonaws.com/cms.ipressroom.com/219/files/20210/EMBARGOED+GeForce+Ampere+RTX+Laptop.jpg')] bg-cover bg-center flex  justify-center items-center rounded-lg">
      <div className="flex flex-col justify-center items-center">
          <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">WELCOME TO
          <span className="text-amber-500"> NEXTERCE</span>
          </h1>
          <p className="mt-5 text-center text-lg text-white opacity-70">This webiste is about programming and things like that</p>
          <a className="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full" href="#">Shop Now
          </a>
      </div>
    </section>
  )
}
