import { useState } from "react";
import MainComponent from "./components/MainComponent"
import HeaderComponent from "./components/HeaderComponent"
import PicComponent from "./components/PicComponent"
import ButtonComponent from "./components/ButtonComponent"
import picture1 from "./assets/1.png"
import picture2 from "./assets/2.png"
import picture3 from "./assets/3.png"
import ProductComponent from "./components/ProductComponent"

// icons
import { FaMoon, FaSun } from "react-icons/fa";

import FooterComponent from "./components/FooterComponent";

function App() {
  const [activeDark, setActiveDark] = useState(false);

  let pic = [picture1, picture2, picture3]

  function handleDark() {
    setActiveDark(!activeDark);
  }

  return (
    <div className={activeDark ? 'dark' : ''}>
      <div className="container mx-auto dark:bg-black bg-[#FAF0E6] dark:text-white text-black">
        <HeaderComponent title='Vaš partner u svakodnevnom životu!' />
        <div className="flex items-center justify-end h-[100px] gap-[20px]">
          <h1 className="text-2xl font-bold">Izaberi mod</h1>
          {activeDark ? (
            <FaMoon size={40} onClick={handleDark} color="white"/>
          ) : (
            <FaSun size={40} onClick={handleDark} color="black"/>
          )}
        </div>
        <MainComponent>
          {pic.map((el, index) => {
            return <PicComponent key={index} el={el} />
          })}
          <div className='w-full mt-4 ml-10 mb-20 text-center'>
            <ButtonComponent/>
          </div>
          <ProductComponent/>
        </MainComponent>
        <FooterComponent/>

      </div>
    </div>
  )
}

export default App;

