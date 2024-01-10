import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useCallback, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Calendar from 'react-calendar';
import { useMyContext } from '../../context'

export default function Suvisiace({ product, isOpenModal, closeModal }) {
    const { state, setState } = useMyContext()

    const array = product?.relatedProducts

    const sliderRef = useRef(null);
    const [isAtBeginning, setIsAtBeginning] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const handlePrev = useCallback(() => {

        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);


    const handleSlideChange = () => {
        if (sliderRef.current) {
            const swiper = sliderRef.current.swiper;
            setIsAtBeginning(swiper.isBeginning);
            setIsAtEnd(swiper.isEnd);
        }
    };
    const [value, onChange] = useState(new Date());
    const added = state.products.find(prod => prod.product._id === product._id)


    function addTocart() {
        if (!added) {
            const prod = {
                
                product:{
                    title:product.title,
                    category:product.category,
                    date:product.date,
                    typr:product.type,
                    date: value,
                }
            }

            setState({ products: [...state.products, prod] })
            closeModal()

        }
        else {
            setState({ products: state.products.filter(pr => pr.product._id !== product._id) })

        }
    }
    return (
        <>

            <Transition appear show={isOpenModal} as={Fragment}>
                <Dialog as="div" className="relative  font-text-button z-[99999]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-primary/60" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center rounded-none">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-[1002px] transform overflow-hidden !rounded-none bg-white text-left align-middle shadow-xl transition-all">
                                    <div className='absolute top-3 right-3 cursor-pointer' onClick={closeModal} >
                                        <svg className='w-[22px] h-[22px] md:w-[37px] md:h-[37px]' xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                            <path d="M27.3373 9.1123L9.1123 27.3373" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.1124 9.1123L27.3374 27.3373" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>

                                    <div className="bg-white  text-primary border-solid border-[5px] border-chocolate max-auto p-7 md:p-10 ">
                                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                                            <div>
                                                <h4 className='text-lg font-black mt-0 mb-8 md:hidden block'>Rámové debnenie oceľové</h4>

                                                <img src={product.mainImage} className='object-cover w-full ' />
                                                <div className='text-xs font-normal mt-10' dangerouslySetInnerHTML={{ __html: product.additionalText }} />

                                            </div>
                                            <div>
                                                <h4 className='text-lg font-black mt-0 mb-8 hidden md:block'>Rámové debnenie oceľové</h4>
                                                <p className='text-xs font-bold font-mono'>Prípustné zaťaženie: <span className='font-normal'>{product?.metatags?.a1}</span> </p>
                                                <p className='text-xs font-bold font-mono'>Šírka panelov: <span className='font-normal'>{product?.metatags?.a2}</span></p>
                                                <p className='text-xs font-bold font-mono'>Výška panelov: <span className='font-normal'>{product?.metatags?.a3}</span></p>
                                                <p className='text-xs font-bold font-mono'>Maximálna výška debnenia: <span className='font-normal'>{product?.metatags?.a4}</span></p>
                                                <div className=' mt-10 mb-3 md:mb-0 md:mt-40 py-3 px-1 bg-white border-solid border-chocolate border-[6px] '>
                                                    <p className='my-1 text-smi font-bold text-center text-primary'>Doba prenájmu:</p>
                                                    <Calendar selectRange={true} locale='Sk' className='!shadow-none !border-none !text-primary' onChange={onChange} value={value} />
                                                </div>

                                                <button onClick={() => addTocart()} className="relative cursor-pointer text-white text-smi [background:linear-gradient(90deg,_#EF6A20_0%,_#E83F3A_100%)] tracking-[0.1em] uppercase font-extrabold font-text-button inline-block px-5 py-3 mt-5">
                                                    {added ? "Odstrániť" : "Pridať do košíka"}
                                                </button>
                                            </div>
                                            <div>
                                                <div className='relative'>

                                                    <div className="absolute -top-1 -left-3 box-border max-w-[200px] md:max-w-[200px] w-full   h-[22px] md:h-[22px] border-solid [background:linear-gradient(90deg,_#EF6A20_0%,_#E83F3A_100%)]" />
                                                    <h2 className='text-base font-black mt-0 z-10 relative'>Súvisiace produkty</h2>
                                                </div>
                                                <div className='flex md:block items-center gap-4 ' >
                                                    <div className='mb-2.5 flex justify-center  cursor-pointer  -rotate-90 md:rotate-0' onClick={handlePrev}>
                                                        <img src='arrowUp-primary.png' className='mx-auto' />
                                                    </div>

                                                    <div className='min-w-0' >
                                                        <Swiper
                                                            ref={sliderRef}
                                                            onSlideChange={handleSlideChange}


                                                            pagination={{ clickable: true }}
                                                            spaceBetween={10}
                                                            slidesPerView="1"
                                                            loop={true}
                                                            breakpoints={{
                                                                768: {
                                                                    slidesPerView: 3,
                                                                    spaceBetween: 10,
                                                                    direction: "vertical"
                                                                }
                                                            }}
                                                            className=" md:h-[630px]"
                                                        >
                                                            {array.map((it, i) => {
                                                                return (<SwiperSlide className="text-white " key={i} >
                                                                    <div >
                                                                        <img src={it.mainImage} key={it._id} className='object-cover w-full h-[170px] ' />
                                                                        <p className='text-smi mt-1.5 mb-0 font-bold text-primary '>{it.title}</p>                                                                </div>

                                                                </SwiperSlide>)
                                                            })}


                                                        </Swiper>
                                                    </div>
                                                    <div className='mb-2.5 flex justify-center cursor-pointer' onClick={handleNext}>
                                                        <img src='arrowUp-primary.png' className='mx-auto rotate-90 md:rotate-180' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
