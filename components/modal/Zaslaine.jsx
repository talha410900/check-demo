import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import { Fragment, useState } from 'react';
import { BASE_URL } from "../../constants";

export default function Zaslanie({ isOpenModal, closeModal, products, setState }) {

    const [values, setvalues] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const [isLoading, setIsLoading] = useState(false)
    const [sent, setSent] = useState(false)



    function removeProduct(index) {
        setState({
            products: products.filter((p, i) => i !== index)
        })
    }

    function handleChange(e) {
        setvalues({ ...values, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {

        e.preventDefault();
        setIsLoading(true)
        try {
            const res = await axios.post(`${BASE_URL}/products/rent`, {
                ...values, products
            })
            if (res.data) {
                setSent(true)
            }
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)

        }
    }


    function closeit() {
        setSent(false)
        closeModal()
    }

    return (
        <>

            <Transition appear show={isOpenModal} as={Fragment}>
                <Dialog as="div" className="relative font-text-button z-[9999999] !rounded-none  w-full max-w-[800px]" open={isOpenModal} onClose={closeit}>
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

                    <div className="fixed inset-0 overflow-y-auto !rounded-none">
                        <div className="flex min-h-full items-center justify-center p-4 text-center !rounded-none">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full relative max-w-[560px] !rounded-none] transform overflow-hidden  bg-white text-left align-middle shadow-xl transition-all">
                                    <div className='absolute top-3 right-3 cursor-pointer' onClick={closeit} >
                                        <svg className='w-[22px] h-[22px] md:w-[37px] md:h-[37px]' xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                            <path d="M27.3373 9.1123L9.1123 27.3373" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.1124 9.1123L27.3374 27.3373" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>

                                    <div style={{
                                        background: 'linear-gradient(111deg,#1b1c2e .03%,#3a3f97 99.73%)'
                                    }} className="  text-white border-solid border-[5px] border-chocolate max-auto p-7 md:p-10 text-center">
                                        <h4
                                            className="mt-0 text-[22px] md:text-[30px]"
                                            style={{

                                                fontWeight: 900,
                                                letterSpacing: 0.3,
                                            }}
                                        >
                                            ZÍSKANIE <br /> CENOVEJ PONUKY
                                        </h4>
                                        <div className="w-full max-w-[400px] mx-auto">
                                            {sent ? <>
                                                <div className='h-[300px] flex items-center justify-center font-semibold text-xl'>

                                                    Objednávka konzultácie úspešne poslaná.
                                                </div>
                                            </> :
                                                <form onSubmit={handleSubmit} >
                                                    <div className="flex flex-col gap-4">
                                                        <input required={true} name='name' value={values.name} className=" border-[2px] border-chocolate p-3 bg-white text-slate-800 outline-none" onChange={handleChange} placeholder="Meno . . ." />
                                                        <input required={true} onChange={handleChange} value={values.email} className=" border-[2px] border-chocolate p-3 bg-white text-slate-800 outline-none" name="email" type="email" placeholder="E-mail . . ." />
                                                        <input required={true} onChange={handleChange} value={values.phone} className=" border-[2px] border-chocolate p-3 bg-white text-slate-800 outline-none" name="phone" placeholder="Telefónne číslo . . ." type="tel" />

                                                    </div>
                                                    <p className="font-bold uppercase my-4">{products && products.length > 0 ? 'vybrané produkty' : "nie sú vybrané žiadne produkty"}</p>
                                                    <div className="flex flex-col w-full">
                                                        {products && products.map((prod, i) => {
                                                            return (<div key={prod.product._id} className="flex justify-between items-center w-full">
                                                                <p className="text-chocolate m-0 text-smi font-bold">{prod.product.title}</p>
                                                                <div onClick={() => removeProduct(i)} className='cursor-pointer'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                                        <path d="M11.25 3.75L3.75 11.25" stroke="white" stroke-width="1.23457" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M3.75 3.75L11.25 11.25" stroke="white" stroke-width="1.23457" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                            </div>)
                                                        })}

                                                    </div>
                                                    <div className='w-full'>                                            <textarea onChange={handleChange} value={values.message} className=" border-[2px] border-chocolate p-3 bg-white text-slate-800 outline-none w-full  mt-5" style={{ boxSizing: 'border-box' }} name="message" rows={8} placeholder="Vaša správa . . ." />
                                                    </div>

                                                    <div className="mt-2">
                                                        <label className="text-smi flex items-center">
                                                            <input required={true} type="checkbox" className="h-6 w-6 m-0" /> <span className="pl-2"> Súhlasím s podmienkami GDPR</span>
                                                        </label>
                                                    </div>
                                                    <button type='submit' disabled={isLoading} className=" my-5 w-[180px] flex items-center justify-center [background:linear-gradient(90deg,_#EF6A20_0%,_#E83F3A_100%)] text-white p-4 text-center text-[13px] tracking-[0.1em] uppercase font-extrabold   mx-auto ">
                                                        <span > {isLoading ? "načítava..." : "Odoslať"}</span>  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <path d="M3.74609 8.93701H13.5531" stroke="white" stroke-width="2.1015" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8.6499 4.03369L13.5534 8.9372L8.6499 13.8407" stroke="white" stroke-width="2.1015" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </button >
                                                </form>}
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
