import React, { useEffect } from 'react'
import Drawer from 'react-modern-drawer'
import Zaslanie from './modal/Zaslaine'
import useScrollPosition from '../hooks/useScrollPosition'
import Link from 'next/link'
import { useMyContext } from '../context'
function Header() {
  const { state, setState } = useMyContext();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const scrollY = useScrollPosition()


  const [isOpenModal, setIsOpenModal] = React.useState(false)

  function closeModal() {
    setIsOpenModal(false)
  }

  function openModal() {
    setIsOpenModal(true)
  }


  const [active, setActive] = React.useState('DOMOV')




  const handleScroll = () => {
    const headerHeight = 100; // Adjust this to your header's height if any
    const thresholds = 100; // Adjust this value to change the moment of switching

    const scrollPosition = window.scrollY + headerHeight + thresholds;
    const sections = ['DOMOV', 'Debnenie', 'ZEMNÉ STROJE', 'AUTODOPRAVA', 'MALÁ MECHANIZÁCIA'];
    let found = false;
    // Default to first section


    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;


      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        found = true;
        setActive(sections[i]);
        return;
      }
    }

  };

  function handleActive(pos) {
    setActive(pos);
    setIsOpen(false)
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className=''> <div className=" bg-white w--full text-chocolate font-icon-list">
        <div className="  flex-row items-center justify-between gap-[40px] py-3 hidden md:flex px-10 ">
          <div className="flex gap-5">
            <div className=" flex flex-row items-center justify-start gap-[10px]">
              <div className=" "><img src='/phone.svg' /></div>

              <a href='tel:+421 903 737 914' className="relative text-smi font-text-button text-text-color no-underline">
                +421 903 737 914
              </a>
            </div>
            <div className=" flex flex-row items-center justify-start gap-[10px]">
              <div className=" "><img src='/mail.svg' /></div>

              <a href='mailto: info@rentyx.sk' className="relative text-smi font-text-button text-text-color no-underline">
                info@rentyx.sk
              </a>
            </div>
          </div>
          <div className="flex gap-5">
            <a target='_blank' href='https://www.facebook.com/profile.php?id=100089561145994'>
              <img
                className="  w-6 h-6 overflow-hidden"
                alt=""
                src="/facebook-icon1.svg"
              />
            </a>
            <a target='_blank' href='https://www.instagram.com/rentyx_sk/'>

              <img
                className="  w-6 h-6 overflow-hidden"
                alt=""
                src="/instagram-icon1.svg"
              />
            </a>
          </div>
        </div>

        <div className={` z-[9999] fixed inset-x-0 ${scrollY > 45.4 ? 'top-0' : 'md:top-[53.4px]'} flex  mx-auto text-sm text-white font-text-button min-h-[96px] h-[96px] w-full items-center justify-center bg-white overflow-hidden`}>
          {/* <div className="text-[36px] md:text-[50px] tracking-[0.07em] uppercase font-black text-primary mx-5 lg:mx-10 flex items-center">
            LOGO
          </div> */}
          <img src='logo.svg' className='mx-5 lg:mx-10' />
          <div className="relative  w-full h-full flex flex-row items-center justify-between lg:space-x-[30px] xl:space-x-[50px]  px-10  ">
            <img
              className="hidden md:block absolute top-[0px] left-0 w-full  min-h-[96px]"
              alt=""
              src="/header-back.png"
            />
            <img
              className=" block md:hidden  absolute top-[0px] left-0 w-full  min-h-[96px]"
              alt=""
              src="/mobile-header-bg.png"
            />
            <div className="hidden xl:flex flex-row items-center justify-evenly lg:gap-[30px] gap-[50px] text-smi w-full ">
              <Link href='#DOMOV' className={`flex flex-row items-center justify-start no-underline ${active === 'DOMOV' ? 'text-primary' : 'text-white'}`}>
                <div className="relative tracking-[0.1em] uppercase font-semibold">
                  DOMOV
                </div>
              </Link>
              <Link href='#Debnenie' className={`relative tracking-[0.1em] uppercase font-semibold no-underline  ${active === 'Debnenie' ? 'text-primary' : 'text-white'}`}>
                DEBNENIE
              </Link>
              <Link href='#ZEMNÉ STROJE' className={`relative tracking-[0.1em] uppercase font-semibold no-underline ${active === 'ZEMNÉ STROJE' ? 'text-primary' : 'text-white'}`}>
                ZEMNÉ STROJE
              </Link>
              <Link href='#AUTODOPRAVA' className={`relative tracking-[0.1em] uppercase font-semibold no-underline ${active === 'AUTODOPRAVA' ? 'text-primary' : 'text-white'}`}>
                AUTODOPRAVA
              </Link>

              <Link href='#MALÁ MECHANIZÁCIA' className={`relative tracking-[0.1em] uppercase font-semibold no-underline ${active === 'MALÁ MECHANIZÁCIA' ? 'text-primary' : 'text-white'}`}>
                MALÁ MECHANIZÁCIA
              </Link>
              <button onClick={openModal} style={{
                background: 'linear-gradient(111deg,#1b1c2e .03%,#3a3f97 99.73%)'

              }} className="relative  cursor-pointer text-white text-smi bg-chocolate2 tracking-[0.1em] uppercase font-extrabold font-text-button inline-block px-5 py-3 ">
                OTVORIŤ KOŠÍK
              </button>
              <Zaslanie isOpenModal={isOpenModal} openModal={openModal} closeModal={closeModal} products={state?.products} setState={setState} />
              <div className="w-[50px] h-[42px] flex flex-row items-start justify-end cursor-pointer" onClick={openModal}>
                <img
                  className="relative w-[50px] h-[42px] overflow-hidden shrink-0"
                  alt=""
                  src="/shoppingcartmenuribbonsvg-fill.svg"
                />
                <div className=" relative rounded-xl bg-primary box-border w-6 h-6 flex flex-col items-center justify-center py-1 px-0 ml-[-24px] border-[2px] border-solid border-white">
                  <div className="relative  flex items-center justify-center w-2 h-2 shrink-0">
                    {state.products.length}
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center relative xl:hidden w-full cursor-pointer' onClick={toggleDrawer} >
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" viewBox="0 0 35 19" fill="none" className='ml-8'>
                <rect width="35" height="3" fill="#1B1C2E" />
                <rect y="8" width="35" height="3" fill="#1B1C2E" />
                <rect y="16" width="35" height="3" fill="#1B1C2E" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='!max-w-full !w-full bg-primary z-[9999999999] '
        style={{
          background: '#2C2E43',

        }}
      >
        <div className="relative w-full h-[751px] text-left text-lg text-white font-montserrat">
          <div className='p-5'>
            <div className='flex w-full justify-between items-center'>
              <div className=" relative  rounded-3xl w-12 h-12 text-center text-[14px] font-inter">
                <div className="w-[50px] h-[42px] flex flex-row items-start justify-end">
                  <img
                    className="relative w-[50px] h-[42px] overflow-hidden shrink-0"
                    alt=""
                    src="/shoppingcartmenuribbonsvg-fill.svg"
                  />
                  <div className=" relative rounded-xl bg-primary box-border w-6 h-6 flex flex-col items-center justify-center py-1 px-0 ml-[-24px] border-[2px] border-solid border-white">
                    <div className="relative  flex items-center justify-center w-2 h-2 shrink-0">
                      0
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col items-start justify-start gap-[5px] cursor-pointer " onClick={toggleDrawer}>
                <div className="relative bg-chocolate w-[35px] h-[3px]" />
                <div className="relative bg-chocolate w-[35px] h-[3px]" />
                <div className="relative bg-chocolate w-[35px] h-[3px]" />
              </div>
            </div>

            <div className="  flex flex-col items-end justify-start gap-[40px] mt-10">
              <div className="relative ">
                <Link href='#DOMOV' className={` no-underline flex flex-row items-end justify-start ${active === 'DOMOV' ? 'text-chocolate' : 'text-white'}`} onClick={() => handleActive('DOMOV')} >
                  <div className="relative tracking-[0.1em] uppercase font-semibold">
                    DOMOV
                  </div>
                </Link>
              </div>
              <div className="relative ">
                <Link href='#Debnenie' className={` no-underline tracking-[0.1em] uppercase font-semibold ${active === 'Debnenie' ? 'text-chocolate' : 'text-white'}`} onClick={() => handleActive('Debnenie')}>
                  DEBNENIE
                </Link>
              </div>
              <Link href='#ZEMNÉ STROJE' className={` no-underline tracking-[0.1em] uppercase font-semibold ${active === 'ZEMNÉ STROJE' ? 'text-chocolate' : 'text-white'}`} onClick={() => handleActive('ZEMNÉ STROJE')}>
                ZEMNÉ STROJE
              </Link>
              <div className="relative ">
                <Link href='#AUTODOPRAVA' className={`no-underline  tracking-[0.1em] uppercase font-semibold ${active === 'AUTODOPRAVA' ? 'text-chocolate' : 'text-white'}`} onClick={() => handleActive('AUTODOPRAVA')}>
                  AUTODOPRAVA
                </Link>
              </div>
              <div className="relative ">
                <Link href='#MALÁ MECHANIZÁCIA' className={` no-underline tracking-[0.1em] uppercase font-semibold ${active === 'MALÁ MECHANIZÁCIA' ? 'text-chocolate' : 'text-white'}`} onClick={() => handleActive('MALÁ MECHANIZÁCIA')}>
                  MALÁ MECHANIZÁCIA
                </Link>
              </div>


            </div>
            <div onClick={openModal} className=" my-20   bg-chocolate text-white p-4 text-center text-[13px] tracking-[0.1em] uppercase font-extrabold block w-[155px] ml-auto ">
              OTVORIŤ KOŠÍK
            </div>

            <div className="  flex flex-col items-end justify-start gap-[20px] text-xl text-chocolate font-icon-list">
              <div className="relative flex gap-5 items-center ">
                <a target='_blank' href='tel:+421 903 737 914' className=" no-underline	 text-base font-text-button text-white">
                  +421 903 737 914
                </a>
                <div className=" "><img src='/phone.svg' /></div>

              </div>
              <div className="relative flex gap-5 items-center ">
                <a target='_blank' href='mailto:info@rentyx.sk' className=" no-underline	 text-base font-text-button text-white">
                  info@rentyx.sk
                </a>
                <div className=" "><img src='/mail.svg' /></div>

              </div>
            </div>


          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Header