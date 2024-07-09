import React from 'react';

const PicComponent = ({ el }) => {
  return (
    <img src={el} alt="Slika" className='h-[400px] w-[400px]'/>
  );
};

export default PicComponent;
