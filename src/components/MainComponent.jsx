import React from 'react';
import picture6 from '../assets/6.png';
import picture7 from '../assets/7.png';

function MainComponent({ children }) {
  return (
    <div className='container mx-auto dark:bg-black bg-[#FAF0E6] dark:text-white text-black flex flex-col'>
      <h1 className='text-center mt-10 text-3xl'>
        <span className='inline-block border-4 dark:border-white border-black p-5 rounded-lg'>
          Sve što vam treba, na jednom mestu.
        </span>
      </h1>
      <div className='flex'>
        <h2 className='text-left mt-20 text-2xl ml-10 mr-80'>
          <span className='inline-block border-4 dark:border-white border-black p-5 rounded-lg'>
            Kvalitet na dohvat ruke - Izaberite najbolje za sebe!
          </span>
        </h2>
        <img src={picture6} alt='' className='h-[120px] w-[120px] ml-40 mr-10 mt-10' />
      </div>
      <div className='flex'>
        <img src={picture7} alt='' className='h-[120px] w-[120px] ml-40 mr-20 mt-10 mb-10' />
        <h3 className='text-right mt-10 text-2xl ml-80 mr-10 mb-30'>
          <span className='inline-block border-4 dark:border-white border-black p-5 rounded-lg'>
            Neodoljivi proizvodi po pristupačnim cenama!
          </span>
        </h3>
      </div>
      <div className='flex justify-center flex-wrap gap-20'>
        {children}
      </div>
    </div>
  );
}

export default MainComponent;
