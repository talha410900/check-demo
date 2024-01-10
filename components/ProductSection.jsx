import React from 'react'
import Product from './product/Product'

function ProdeuctSection({ products, dark, cta, title, categories }) {



  const [rollUp, setRollUp] = React.useState(true);

  function handleRoll() {
    setRollUp(!rollUp)
  }


  const [displayCount, setDisplayCount] = React.useState(4);
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);


  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDisplayCount(1);
      } else {
        setDisplayCount(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on first render

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const array = products && products.filter(pr => pr.category === selectedCategory) || []

  return (
    <>
      {/* products section */}
      <div className={`${dark ? '[background:linear-gradient(111deg,_#1B1C2E_0.03%,_#3A3F97_99.73%)]' : '[background:linear-gradient(0deg,_rgba(44,_46,_67,_0.17),_rgba(255,_255,_255,_0))]'} py-10 md:py-20 px-8`} id={title}>

        {dark ? <div className="relative ">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative  box-border w-[50px] md:w-[89px] h-[5px] border-t-[5px] border-solid border-chocolate" />
            <div className=" text-3xs md:text-lg relative tracking-[0.07em] uppercase font-black">
              PRODUKTY NA PRENÁJOM
            </div>
          </div>
          <div className="relative text-[30px] md:text-26xl ml-3">

            <div className="relative tracking-[0.07em] uppercase font-black inline-block ">
              {title}

            </div>
          </div>
        </div>
          : <div className="relative  text-primary text-right">
            <div className="flex items-center gap-3 mb-6 flex-row-reverse">
              <div className="relative  box-border w-[50px] md:w-[89px] h-[5px] border-t-[5px] border-solid border-chocolate" />
              <div className=" text-3xs md:text-lg relative tracking-[0.07em] uppercase font-black">
                PRODUKTY NA PRENÁJOM
              </div>
            </div>
            <div className="relative text-[30px] md:text-26xl ml-3">
              {/* <div className="absolute -top-1 -right-3 box-border max-w-[100px] md:max-w-[200px] w-full h-full  border-t-[25px] md:border-t-[35px] border-solid border-chocolate" /> */}
              <div className="relative tracking-[0.07em] uppercase font-black inline-block ">
                {title}
              </div>
            </div>
          </div>
        }
        {dark ? <div className="flex flex-col gap-3.5 h-[75px] mt-4 md:mt-0 md:h-auto items-end justify-start md:ml-[0]  sm:w-full">
          <p
            className="text-center 
            uppercase font-black text-[14px] md:text-mid tracking-[0.07em] m-0 text-chocolate mt-3 md:mt-0"

          >
            Filter
          </p>
          <div className="flex  flex-row  gap-2.5 md:gap-5 items-center flex-wrap  md:justify-end justify-between w-full  sm:w-full text-white text-smi">
            {categories.map((cat, i) => {
              return (
                <div
                  onClick={() => setSelectedCategory(cat)} className={`${selectedCategory === cat ? "border-b-chocolate" : "border-transparent"} border-b-[5px] border-solid   text-[12px] md:text-[13px] h-5 md:h-10 cursor-pointer flex flex-col items-center justify-center relative tracking-[0.1em] uppercase font-extrabold`}
                >
                  {cat}
                </div>
              )
            })}
          </div>
        </div>

          :

          <div className="flex flex-col gap-3.5 h-[75px] mt-4 md:mt-0 md:h-auto items-start justify-start md:ml-[0]  sm:w-full">
            <p
              className="text-center 
            uppercase font-black text-[14px] md:text-mid tracking-[0.07em] m-0 text-chocolate mt-3 md:mt-0"

            >
              Filter
            </p>
            <div className="flex w-full flex-row justify-between gap-2.5 flex-wrap md:gap-5 items-center md:justify-start  sm:w-full text-white text-smi">
              {categories.map((cat, i) => {
                return (
                  <div
                    onClick={() => setSelectedCategory(cat)} className={` ${selectedCategory === cat ? "border-b-chocolate" : "border-transparent"} border-b-[5px] border-solid  max-w-[90px]  cursor-pointer md:max-w-[150px] text-[12px] md:text-[13px] h-5 md:h-10 flex flex-col items-center justify-center relative tracking-[0.1em] uppercase font-extrabold text-primary`}
                  >
                    {cat}
                  </div>
                )
              })}
            </div>
          </div>
        }
        <div className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-start mb-[38px] mt-4 md:mt-14 w-auto ">
          {array.slice(0, rollUp ? displayCount : array.length).map((item) => {
            return (<Product dark={dark} product={item} />)
          })}
        </div>




        <div className='flex justify-end  items-center'>
          <div className='flex items-center gap-2 cursor-pointer ' onClick={handleRoll}>
            <div className=' flex justify-center  ' >
              <img src='arrowUp.png' className={`mx-auto w-[25px] h-[25px] ${rollUp ? 'rotate-180' : 'rotate-0'}`} />
            </div>

            <p className={`m-0 text-[15px] font-semibold ${dark ? 'text-white' : 'text-primary'}`}> {!rollUp ? "ZAROLOVAŤ" : "ROZROLOVAŤ PRODUKTY"}</p>
          </div>
        </div>

        {cta && <div className="relative bg-tranparent text-primary text-center text-smi py-16 md:py-32 mt-20">
          <div className="relative  text-[24px] md:text-41xl tracking-[0.07em] uppercase font-black inline-block ">
            <p className="m-0">MÁTE ZÁUJEM</p>
            <p className="m-0">O PRENÁJOM?</p>
          </div>
          <div className="flex gap-7 md:gap-10 justify-center flex-col md:flex-row items-center mt-12 md:mt-8">
            <a href='tel:+421 903 737 914' className="relative no-underline bg-chocolate w-[198px] h-14 flex flex-col items-center justify-center [background:linear-gradient(111deg,_#1B1C2E_0.03%,_#3A3F97_99.73%)]">
              <span className="relative no-underline text-white tracking-[0.1em] uppercase font-extrabold ">
                +421 903 737 914
              </span>
            </a>
            <a href='mailto:info@rentyx.sk' className="relative no-underline box-border w-[198px] h-14 flex flex-col items-start justify-center py-0 px-[27.580642700195312px] border-[5px] border-solid border-primary bg-transparant text-primary">
              <div className="relative no-underline text-primary tracking-[0.1em] uppercase font-extrabold">
                info@rentyx.sk
              </div>
            </a>
          </div>
        </div>}
      </div>


    </>
  )
}

export default ProdeuctSection