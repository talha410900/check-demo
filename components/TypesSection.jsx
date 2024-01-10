import Image from 'next/image'
import React from 'react'

function TypesSection() {
  return (
    <div id='types'>  <div className="relative  max-w-[884px] mx-auto  text-center text-[36px] md:text-26xl text-chocolate pt-[120px] px-8 ">
      <div className=" relative tracking-[0.07em]  uppercase font-black inline-block w-full ">
        <div className="relative z-10"> tYpy na PRENÁJom</div>

      </div>
      <div className=" text-mini md:text-mid text-text-color text-center inline-block w-full max-w-[656px]">
        Široký výber debnenia, malej mechanizácie, autodopravy a zemných strojov
        pre efektívnu a bezpečnú prácu na Vašich stavebných projektoch
      </div>
    </div>

      <div className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center mb-[80px] mt-14 w-auto px-8">
        <div className=" flex flex-col items-center justify-between">
          <Image
            width={400}
            height={400}
            layout='responsive' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

            className="self-stretch relative max-w-full overflow-hidden w-full  h-auto shrink-0 object-cover"
            alt=""
            src="/image-placeholder@2x.png"
          />
          <div className="self-stretch z-50 border-[8px] border-solid text-primary border-chocolate bg-white flex flex-col items-center pt-[29px] pb-[21.965457916259766px] pr-[21.965490341186523px] pl-[21.965478897094727px] gap-[30px] mt-[-73px] mx-6 text-center">
            <div className="self-stretch relative tracking-[0.07em] uppercase font-black text-center text-16 md:text-lg">
              Debnenie
            </div>
            <div className="self-stretch relative text-xs">
              V ponuke môžete nájsť debnenie vrátane oceľového, hliníkového a
              stropného debnenia, ideálneho pre rôzne typy stavebných projektov.
            </div>
            <a href='#Debnenie' className="relative  cursor-pointer text-white text-smi bg-chocolate tracking-[0.1em] uppercase font-extrabold font-text-button inline-block px-5 py-3 ">
              <div className="relative tracking-[0.1em] uppercase font-semibold inline-block ">
                VŠETKY PRODUKTY
              </div>
              <div className="relative box-border w-[75.4px] h-[0.7px] border-t-[0.7px] border-solid border-chocolate" />
            </a>
          </div>
        </div>
        <div className="  flex flex-col items-center justify-between">
          <Image
            width={400}
            height={400}
            layout='responsive' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

            className="relative  w-full  h-auto object-cover"
            alt=""
            src="/image-placeholder1@2x.png"
          />
          <div className="self-stretch z-50 border-[8px] border-solid text-primary border-chocolate bg-white flex flex-col items-center pt-[29px] pb-[21.965457916259766px] pr-[21.965490341186523px] pl-[21.965478897094727px] gap-[30px] mt-[-73px] mx-6 text-center">
            <div className="relative tracking-[0.07em] uppercase font-black inline-block text-center text-16 md:text-lg  ">
              ZEMNÉ STROJE
            </div>
            <div className="relative text-xs inline-block ">
              V ponuke môžete nájsť niekoľko zemných strojov na prenájom pre
              efektívnu prácu na stavenisku.
            </div>
            <a href='#ZEMNÉ STROJE' className="relative  cursor-pointer text-white text-smi bg-chocolate tracking-[0.1em] uppercase font-extrabold font-text-button inline-block px-5 py-3 ">
              <div className="relative tracking-[0.1em] uppercase font-semibold inline-block ">
                VŠETKY PRODUKTY
              </div>
              <div className="relative box-border w-[75.2px] h-[0.7px] border-t-[0.7px] border-solid border-chocolate" />
            </a>
          </div>
        </div>
        <div className="  flex flex-col items-center justify-between">
          <Image
            width={400}
            height={400}
            layout='responsive' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

            className="relative  w-full  h-auto object-cover"
            alt=""
            src="/image-placeholder2@2x.png"
          />
          <div className="self-stretch z-50 border-[8px] border-solid text-primary border-chocolate bg-white flex flex-col items-center pt-[29px] pb-[21.965457916259766px] pr-[21.965490341186523px] pl-[21.965478897094727px] gap-[30px] mt-[-73px] mx-6 text-center">
            <div className="relative tracking-[0.07em] uppercase font-black inline-block text-center text-16 md:text-lg  ">
              AUTODOPRAVA
            </div>
            <div className="relative text-xs inline-block ">
              V ponuke môžete nájsť 3 dopravné vozidlá, ktoré zabezpečia
              efektívnu prácu na stavenisku.
            </div>
            <a href='#AUTODOPRAVA' className="relative  cursor-pointer text-white text-smi bg-chocolate tracking-[0.1em] uppercase font-extrabold font-text-button inline-block px-5 py-3 ">
              <div className="relative tracking-[0.1em] uppercase font-semibold inline-block ">
                VŠETKY PRODUKTY
              </div>
              <div className="relative box-border w-[75.2px] h-[0.7px] border-t-[0.7px] border-solid border-chocolate" />
            </a>
          </div>
        </div>
        <div className="  flex flex-col items-center justify-between">
          <Image
            width={400}
            height={400}
            layout='responsive' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

            className="relative  w-full  h-auto object-cover"
            alt=""
            src="/image-placeholder3@2x.png"
          />
          <div className="self-stretch z-50 border-[8px] border-solid text-primary border-chocolate bg-white flex flex-col items-center pt-[29px] pb-[21.965457916259766px] pr-[21.965490341186523px] pl-[21.965478897094727px] gap-[30px] mt-[-73px] mx-6 text-center">
            <div className="relative tracking-[0.07em] uppercase font-black inline-block text-center text-16 md:text-lg  ">
              MALÁ MECHANIZÁCIA
            </div>
            <div className="relative text-xs inline-block ">
              V ponuke môžete nájsť malú mechanizáciu, vrátane vibračnej
              techniky, miešačiek, ktoré sú nevyhnutné pre efektívnu prácu na
              stavenisku.
            </div>
            <a href='#MALÁ MECHANIZÁCIA' className="relative  cursor-pointer text-white text-smi bg-chocolate tracking-[0.1em] uppercase font-extrabold font-text-button inline-block px-5 py-3 ">
              <div className="relative tracking-[0.1em] uppercase font-semibold inline-block ">
                VŠETKY PRODUKTY
              </div>
              <div className="relative box-border w-[75.2px] h-[0.7px] border-t-[0.7px] border-solid border-chocolate" />
            </a>

          </div>
        </div>
      </div></div>
  )
}

export default TypesSection