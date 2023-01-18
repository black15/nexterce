import {useEffect, useState} from 'react'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import {HiOutlineFingerPrint} from 'react-icons/hi'

export const Hero = ({images}) => {

  const [pickImg, setPickImg] = useState(0)
  const prevSlide = () => {
    const isFirst = pickImg === 0;
    const nextIndex = isFirst ? images.length - 1 : pickImg - 1
    setPickImg(nextIndex)
  }
  const nextSlide = () => {
    const isFirst = pickImg === 0;
    const nextIndex = isFirst ? pickImg + 1 : pickImg + 1
    nextIndex !== images.length ? setPickImg(nextIndex) : setPickImg(0)
  }
  const goToSlide = (index) => {
    setPickImg(index)
  }

  return (
    <section>
      <div className="md:h-80 lg:h-96 xl:h-[700px] my-4 bg-center bg-cover flex flex-col justify-around items-center rounded duration-300 ease-in-out group" style={{backgroundImage: `url(${images[pickImg].url})`}}>
          {/* Left arrow */}
        {/* <div className="absolute left-6 hidden group-hover:block">
          <BsFillArrowLeftCircleFill fontSize={'2em'} onClick={() => prevSlide()} />
        </div> */}
          {/* Image Description */}
        <div className="flex flex-col justify-center items-center">
          {/* <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">WELCOME TO
            <span className="text-amber-500"> NEXTERCE</span>
          </h1>
          <p className="mt-5 text-center text-lg text-white opacity-70">This webiste is about programming and things like that</p>
          <a className="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full" href="#">Shop Now
          </a> */}
        </div>
          {/* Right Arrow */}
        {/* <div className="absolute right-6 hidden group-hover:block">
          <BsFillArrowRightCircleFill fontSize={'2em'} onClick={() => nextSlide()} />
        </div> */}
          {/* Slider Lines */}
        <div className="flex flex-row space-x-2 items-ceneter mt-72">
          {images.map((image, index) => (<span key={image.id}><HiOutlineFingerPrint className='text-gray-300 transition duration-300 hover:text-blue-400' fontSize={'1.5em'} cursor={'pointer'} onClick={() => goToSlide(index)} /></span>))}
        </div>
      </div>
    </section>
  )
}
