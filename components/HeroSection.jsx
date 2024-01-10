import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <div className="relative   h-[680px] md:h-[757px] text-center text-[36px] md:text-[112px]" id='DOMOV'>
      <div style={{

        background: 'linear-gradient(180deg, #15172F 57.81%, rgba(27, 28, 46, 0.30) 100%)',
      }}>
        <Image
          unoptimized={true}
          quality={100}
          className="absolute top-[0px] left-[50%] translate-x-[-50%]   object-cover w-full  "
          style={{
            background: 'linear-gradient(180deg, #15172F 57.81%, rgba(27, 28, 46, 0.30) 100%)',
          }}
          alt="hero-image"
          height={757}
          width={800}
          src="/mask-group@2x.png"
        />
      </div>
      <div className="relative flex flex-col md:justify-center items-center w-full h-full ">

        <div className="relative  tracking-[0.07em] uppercase font-black inline-block sm:mt-0 mt-28 ">

          <div className="z-10 relative">
            <p className="m-0">PRENÁJOM</p>
            <p className="m-0 text-[36px] md:text-[40px] leading-[151.6%]">
              STAVEBNEJ TECHNIKY
            </p>
          </div>
        </div>
        <div className="relative  text-mid font-medium inline-block w-full max-w-[536px]">
          Poskytujeme prenájom stavebnej techniky pre všetky stavebné firmy a jednotlivcov
        </div>
        <a href='#types' className=" text-white relative no-underline [background:linear-gradient(90deg,_#EF6A20_0%,_#E83F3A_100%)] w-[218px] h-14 flex flex-col items-center justify-center text-center text-smi mt-[70px]">
          <div className="w-[200.5px] h-6 flex flex-row items-center justify-center gap-[7px] ">
            <div className="relative tracking-[0.1em] uppercase font-extrabold">
              Typy produktov
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </a>
      </div>
      <div className='mx-10 md:mx-0 '>
        <div className="relative bg-white w-full max-w-[743px] flex flex-col md:flex-row gap-10 md:gap-0 -mt-16 mx-auto items-center justify-center  md:justify-between py-[17px] px-10 md:px-[167px] box-border">
          <img
            className="relative w-[150px] h-[60.7px] object-cover"
            alt=""
            src="/snimka-obrazovky-20231202-o-1844-1@2x.png"
          />
          <img
            className="relative  object-cover"
            alt=""
            src="partner-2nd.svg"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection