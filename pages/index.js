import React, { useEffect } from "react";
import AUTODOPRAVA from "../components/Categories/AUTODOPRAVA";
import Debinie from "../components/Categories/Debinie";
import Mala from "../components/Categories/Mala";
import Zemne from "../components/Categories/Zemne";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Process from "../components/Process";
import TypesSection from "../components/TypesSection";
import Zaslanie from "../components/modal/Zaslaine";
import Loader from "../components/Loader";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useMyContext } from "../context";

const Home = ({ data, categoriesByType }) => {
  const { state, setState } = useMyContext();

  const [isOpenModal, setIsOpenModal] = React.useState(false)

  function closeModal() {
    setIsOpenModal(false)
  }

  function openModal() {
    setIsOpenModal(true)
  }

  const [isLoading, setIsLoading] = React.useState(true);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, []);



  return (
    <>

      {isLoading && <div className='z-[9999999] fixed h-screen w-screen flex items-center justify-center bg-white'>
        <Loader />
      </div>
      }

      <div className="relative bg-white w-full  mx-auto overflow-hidden text-left text-xl text-white font-text-button">

        <Header />
        <div className="mt-24" />
        <HeroSection />
        <Process />
        <TypesSection />
        <Debinie title={"Debnenie"} products={data["DEBNENIE"]} categories={categoriesByType["DEBNENIE"]} />
        <Zemne title={"ZEMNÉ STROJE"} products={data["ZEMNÉ STROJE"]} categories={categoriesByType["ZEMNÉ STROJE"]} />
        <AUTODOPRAVA title={"AUTODOPRAVA"} products={data["AUTODOPRAVA"]} categories={categoriesByType["AUTODOPRAVA"]} />
        <Mala title={"MALÁ MECHANIZÁCIA"} products={data["MALÁ MECHANIZÁCIA"]} categories={categoriesByType["MALÁ MECHANIZÁCIA"]} />
        <Footer />
        <Zaslanie isOpenModal={isOpenModal} openModal={openModal} closeModal={closeModal} products={state?.products} setState={setState} />

        <div className="fixed bottom-4 right-4 z-[999] block lg:hidden cursor-pointer" onClick={openModal}>
          <div className="h-[68px] w-[68px] rounded-full flex items-center justify-center  bg-chocolate" style={{
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
          }}>
            <div className="w-[50px] h-[42px] flex flex-row items-start justify-end cursor-pointer" >
              <img
                className="relative w-[50px] h-[42px] overflow-hidden shrink-0"
                alt=""
                src="/shoppingcartmenuribbonsvg-fill.svg"
              />
              <div className=" relative rounded-xl bg-primary box-border w-6 h-6 flex flex-col items-center justify-center py-1 px-0 ml-[-24px] border-[2px] border-solid border-white">
                <div className="relative  flex items-center justify-center w-2 h-2 text-smi shrink-0">
                  {state.products.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;


export async function getStaticProps() {

  const res = await axios.get(`${BASE_URL}/products/grouped`);
  const data = res.data;

  const categoriesByType = {
    "DEBNENIE": [],
    "ZEMNÉ STROJE": [],
    "AUTODOPRAVA": [],
    "MALÁ MECHANIZÁCIA": []
  };

  for (const type in data) {
    const productsForType = data[type];
    const categoriesForType = Array.from(
      new Set(productsForType.map((product) => product.category))
    );
    categoriesByType[type] = categoriesForType;
  }

  return {
    props: { data: data, categoriesByType },
    revalidate: 60
  };
}