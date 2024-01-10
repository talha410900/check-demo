import React from 'react'

function Process() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:mt-28 flex-row items-center gap-5 md:gap-[30px] text-center text-16 md:text-6xl mt-40 px-8 ">
      <div className="relative flex flex-col items-center justify-start w-full ">
        <div className=" -top-10 -mb-10 z-10 flex items-center justify-center shrink-0 bg-primary  md:h-[120px] md:w-[120px] h-20 w-20 rounded-full text-[39px] md:text-41xl text-white left-[0px] tracking-[0.07em] uppercase font-black">
          01
        </div>

        <div className=" relative flex flex-col items-center justify-center gap-5 md:gap-[32px] border-[8px] border-solid text-primary border-chocolate px-6 md:px-10 pt-14 pb-12 h-full">
          <div className="relative tracking-[0.07em] uppercase font-black inline-block ">
            VYBERTE SI PRODUKT na prenájom
          </div>
          <div className="relative text-xs md:text-mid inline-block ">
            Jednoducho prejdite do sekcie hľadaného produktu na prenájom a
            vložte ho do košíka na nacenenie
          </div>
        </div>

      </div>
      <div className="relative flex flex-col items-center justify-start w-full h-full ">
        <div className=" -top-10 -mb-10 z-10 shrink-0 flex items-center justify-center bg-primary  md:h-[120px] md:w-[120px] h-20 w-20 rounded-full text-[39px] md:text-41xl text-white tracking-[0.07em] uppercase font-black">


          02
        </div>

        <div className=" relative flex flex-col items-center justify-center gap-5 md:gap-[32px] border-[8px] border-solid text-primary border-chocolate px-6 md:px-10 pt-14 pb-12 h-full">
          <div className="relative tracking-[0.07em] uppercase font-black inline-block ">
            <p className="m-0">POŠLITE NÁM</p>
            <p className="m-0">ŽIADOSŤ</p>
          </div>
          <div className="relative text-xs md:text-mid inline-block ">
            Prejdite do košíka vybraných produktov na prenájom a zašlite nám
            žiadosť
          </div>
        </div>

      </div>
      <div className="relative flex flex-col items-center justify-start w-full ">
        <div className=" -top-10 -mb-10 z-10 flex items-center justify-center shrink-0 bg-primary  md:h-[120px] md:w-[120px] h-20 w-20 rounded-full text-[39px] md:text-41xl text-white tracking-[0.07em] uppercase font-black">
          03
        </div>

        <div className=" relative flex flex-col items-center justify-center gap-5 md:gap-[32px] border-[8px] border-solid text-primary border-chocolate px-6 md:px-10 pt-14 pb-12 h-full">
          <div className="relative tracking-[0.07em] uppercase font-black inline-block ">
            <p className="m-0">KONZULTÁCIA </p>
            <p className="m-0">S ODBORNÍKOM</p>
          </div>
          <div className="relative text-xs md:text-mid inline-block ">
            Náš odborník Vás bude kontaktovať. Prediskutuje s Vami všetky náležitosti spojené s prenájmom produktu.
          </div>
        </div>

      </div>
    </div>
  )
}

export default Process