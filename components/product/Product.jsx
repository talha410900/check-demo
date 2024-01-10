import React from 'react'
import Suvisiace from '../modal/Súvisiace'
import Image from 'next/image'

function Product({ product }) {
  const [isOpenModal, setIsOpenModal] = React.useState(false)

  function closeModal() {
    setIsOpenModal(false)
  }

  function openModal() {
    setIsOpenModal(true)
  }

  return (
    <div className={`relative  flex flex-col items-center justify-start text-xl text-white`}>
      <div className="flex flex-row items-start justify-start gap-[30px] w-full h-full">
        <div className={`$ flex flex-col items-start justify-start  box-border w-full h-full`}>
          <Image src={product?.mainImage} width={200} height={250} className='min-h-[250px] object-cover w-full' />
          {/* <div className="relative bg-gainsboro w-full  h-[250px]" /> */}
          <div className=" w-[-webkit-fill-available] h-full  flex flex-col items-start justify-start gap-[12px] py-5 px-[21px] border-[8px] border-solid text-primary border-chocolate bg-white">
            <div className="relative tracking-[0.07em] uppercase font-black inline-block ">
              {product.title}
            </div>
            <div className="relative text-3xs tracking-[0.07em] uppercase font-black inline-block ">
              {product.category}
            </div>
            <div className={`relative text-xs text-primary inline-block `}>
              {product.description}
            </div>
            <div className="  flex flex-row items-end justify-end pt-0 px-0 pb-[0.0000095367431640625px] box-border text-smi text-chocolate">
              <div onClick={openModal} className="relative tracking-[0.1em] uppercase font-semibold cursor-pointer">
                VIAC INFORMÁCIÍ
              </div>
              {isOpenModal && <Suvisiace product={product} isOpenModal={isOpenModal} openModal={openModal} closeModal={closeModal} />}
              <div className="relative box-border w-[103px] h-px ml-[-135px] border-t-[1px] border-solid border-chocolate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product