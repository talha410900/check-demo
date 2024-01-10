import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>

      <div className="relative [background:linear-gradient(111deg,_#1B1C2E_0.03%,_#3A3F97_99.73%)]  box-border h-2.5 border-t-[10px] w-full border-solid border-chocolate " />

      <footer className="relative [background:linear-gradient(111deg,_#1B1C2E_0.03%,_#3A3F97_99.73%)]  w-full">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[60px] p-8 md:p-16">


          <div className="flex flex-col items-start justify-start gap-[34px] ">

            <div className=" tracking-[0.07em] uppercase font-black">
              ADRESA
            </div>
            <a href='https://www.google.com/maps/dir//Závodná+78,+821+06+Bratislava/@48.135238,17.1081745,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x476c89dab58c7061:0xcccb13af2095248b!2m2!1d17.1905805!2d48.1352047?entry=ttu' target='_blank' >
              <p className="no-underline text-white text-smi tracking-[0.1em] uppercase font-semibold mb-1">
                Závodná 78B, 821 06, Bratislava
              </p>
              <div className='relative'>
                <div className='absolute top-[50%] left-[45.7%] translate-y-[-50%] tran'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="36" viewBox="0 0 27 36" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.2416C0 5.94042 6.05566 0 13.5 0C20.9443 0 27 5.94042 27 13.2416C27 23.0104 14.5444 34.6211 14.0142 35.1111C13.8691 35.244 13.6846 35.3108 13.5 35.3108C13.3154 35.3108 13.1309 35.244 12.9859 35.1111C12.4556 34.6211 0 23.0104 0 13.2416ZM6.00293 13.2412C6.00293 17.2973 9.36766 20.5977 13.503 20.5977C17.6382 20.5977 21.003 17.2973 21.003 13.2412C21.003 9.18515 17.6382 5.88477 13.503 5.88477C9.36773 5.88477 6.00293 9.18509 6.00293 13.2412Z" fill="url(#paint0_linear_679_25)" />
                    <defs>
                      <linearGradient id="paint0_linear_679_25" x1="0" y1="35.3107" x2="27" y2="35.3107" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#EF6A20" />
                        <stop offset="1" stop-color="#E83F3A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <img
                  className="  rounded-lg w-full h-[114px] object-cover"
                  alt=""
                  src="/mapsicle-map@2x.png"
                />
              </div>
            </a>
          </div>
          <div className="relative  ">

            <div className=" flex flex-col items-start justify-start gap-[34px]">
              <div className="relative tracking-[0.07em] uppercase font-black">
                KONTAKT
              </div>
              <div className="flex flex-col items-start justify-start gap-[15px] text-smi">
                <a href='tel:  +421 903 737 914' className="relative no-underline text-white tracking-[0.1em] uppercase font-semibold">
                  +421 903 737 914
                </a>
                <a href=' mailto:info@rentyx.sk' className="relative no-underline text-white tracking-[0.1em] uppercase font-semibold">
                  info@rentyx.sk
                </a>
                <a href=' mailto:rentyx@rentyx.sk' className="relative no-underline text-white tracking-[0.1em] uppercase font-semibold">
                  rentyx@rentyx.sk
                </a>
              </div>
              <div className='flex items-center gap-5'>
                <a target='_blank' href='https://www.facebook.com/profile.php?id=100089561145994'>
                  <img
                    className=" w-6 h-6 overflow-hidden"
                    alt=""
                    src="/facebook-icon.svg"
                  />
                </a>
                <a target='_blank' href='https://www.instagram.com/rentyx_sk/'>
                  <img
                    className=" w-6 h-6 overflow-hidden"
                    alt=""
                    src="/instagram-icon.svg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="relative    flex flex-col items-start justify-start gap-[30px]">
            <div className="relative tracking-[0.07em] uppercase font-black">
              NAŠE SLUŽBY
            </div>
            <div className="flex flex-col items-start justify-start gap-[15px] text-chocolate font-icon-list">
              <Link href='#Debnenie' className="w-[102px] h-[23px] flex flex-row items-center justify-start gap-[10px] no-underline">
                <img src="/list-arrow.svg" />

                <div className="relative text-smi tracking-[0.1em] uppercase font-semibold font-text-button text-white">
                  DEBNENIE
                </div>
              </Link>
              <Link href='#ZEMNÉ STROJE' className=" h-[23px] flex flex-row items-center justify-start gap-[10px] no-underline">
                <img src="/list-arrow.svg" />

                <div className="relative text-smi tracking-[0.1em] uppercase font-semibold font-text-button text-white">
                  Zemné stroje
                </div>
              </Link>
              <Link href='#AUTODOPRAVA' className=" h-[23px] flex flex-row items-center justify-start gap-[10px] no-underline">
                <img src="/list-arrow.svg" />

                <div className="relative text-smi tracking-[0.1em] uppercase font-semibold font-text-button text-white">
                  AUTODOPRAVA
                </div>
              </Link>

              <Link href='#MALÁ MECHANIZÁCIA' className=" h-[23px] flex flex-row items-center justify-start gap-[10px] no-underline">
                <img src="/list-arrow.svg" />

                <div className="relative text-smi tracking-[0.1em] uppercase font-semibold font-text-button text-white">
                  MALÁ MECHANIZÁCIA
                </div>
              </Link>
            </div>
          </div>
          <div className="relative  flex flex-col items-start justify-start gap-[34px]">
            <div className="relative tracking-[0.07em] uppercase font-black">
              FIRMA
            </div>
            <div className="flex flex-col items-start justify-start gap-[15px] text-smi">
              <div className="relative tracking-[0.1em] uppercase font-semibold">
                RENTYX, spol. s r. o.
              </div>
              <a href='https://www.google.com/maps/dir//Z%C3%A1vodn%C3%A1+78,+821+06+Bratislava/@48.135238,17.1081745,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x476c89dab58c7061:0xcccb13af2095248b!2m2!1d17.1905805!2d48.1352047?entry=ttu' target='_blank' className=" no-underline text-white relative tracking-[0.1em] uppercase font-semibold">
                <span className="m-0 block">{`Závodná 78B, 821 06 `}</span>
                <span className="m-0 block">Bratislava</span>
              </a>
              <div className="relative tracking-[0.1em] uppercase font-semibold">
                IČO: 52592537
              </div>
              <div className="relative tracking-[0.1em] uppercase font-semibold">
                DIČ: 2121077673
              </div>
              <div className="relative tracking-[0.1em] uppercase font-semibold">
                IČ DPH: SK2121077673
              </div>
              <a href='/GDPR - Rentix.docx' className="relative text-white no-underline tracking-[0.1em] uppercase font-semibold">
                GDPR
              </a>
            </div>
          </div>

        </div>
        <div className='  md:border-t-[1px] border-solid border-chocolate  flex  md:flex-row flex-col-reverse	 items-center justify-between mx-8 pb-4 md:pb-0 md:mx-16 flex-wrap '>
          <p className='text-white text-[17px] my-0 py-4 text-center md:text-left border-t-[1px] md:border-t-0 w-full md:w-auto border-solid border-chocolate'>
            Všetky práva vyhradené © 2023 | Designed by <a className='no-underline text-white' href='https://www.wavenet.sk/' target='_blank'> WaveNet</a>
          </p>

          <a href='#DOMOV' className='flex border-t-[1px] pb-4 md:pb-0 w-full md:w-auto justify-center  items-center gap-2 cursor-pointer no-underline text-white ' >
            <div className=' flex justify-center  ' >
              <img src='arrowUp.png' className='mx-auto w-[25px] h-[25px] ' />
            </div>

            <p className='m-0 text-[15px] font-semibold'>NA VRCH</p>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer