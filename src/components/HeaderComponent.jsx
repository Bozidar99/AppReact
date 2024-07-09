import React, { useState } from 'react';
import logo from '../assets/LogoApp.png';

function HeaderComponent({ title, des }) {
  const [menu, setMenu] = useState('Menu');

  function handleMenu() {
    setMenu(
      <ul className='absolute top-[100px] right-0 bg-[#333333] text-white border border-white p-4 rounded-lg'>
        <li className='p-2'>HOME</li>
        <li className='p-2'>ABOUT</li>
        <li className='p-2'>CONTACT</li>
      </ul>
    );
  }

  return (
    <div className='container mx-auto border border-black bg-[#333333] text-white relative'>
      <div className='flex h-[100px] justify-between items-center mx-5'>
        <img src={logo} alt="" className='h-[80px] w-[80px]' />
        <h2 className='text-2xl'>{title}</h2>
        <div>
          <button onClick={handleMenu} className="bg-blue-500 text-white font-bold px-[20px] py-[10px] rounded-lg">
            {menu}
          </button>
          {menu !== 'Menu' && (
            <div>
              {menu}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;

 