import React, { useState } from 'react'

function ButtonComponent() {
    const [viewMore, setViewMore] = useState('Prikazi vise informacija o proizvodima');
    const [about, setAbout] = useState('Saznajte više o nama');
    const [info, setInfo] = useState('Prikaži više informacija o našim uslugama');

    function handleViewMore(){
      setViewMore('Naši proizvodi su pažljivo odabrani kako bi vam pružili najbolji kvalitet po pristupačnim cenama. Svi proizvodi prolaze stroge kontrole kvaliteta i dolaze sa garancijom zadovoljstva. Izaberite najbolje za sebe i uživajte u našoj ponudi!');
    }

    function handleAbout(){
        setAbout('Naša kompanija je posvećena pružanju vrhunske usluge i zadovoljstva klijenata. Imamo dugogodišnje iskustvo u industriji i ponosni smo na naš tim stručnjaka koji su uvek tu da vam pomognu. Verujemo u transparentnost, kvalitet i integritet u svemu što radimo.')
    }

    function handleInfo(){
        setInfo('Nudimo širok spektar usluga koje su prilagođene vašim potrebama. Bilo da je reč o tehničkoj podršci, savetovanju ili prilagođenim rešenjima, naš tim je spreman da vam pruži najviši nivo usluge. Naš cilj je da osiguramo vaše zadovoljstvo i dugoročnu saradnju.')
    }
  return (
    <div>
        <div>
        <h2 className='font-bold'>{viewMore}</h2>
        <button className='bg-blue-500 textqueen text-white font-bold px-[20px] py-[10px] rounded-lg mt-5 mb-10' onClick={handleViewMore}>View More</button>
        </div>

        <div>
            <h2 className='font-bold'>{about}</h2>
            <button className='bg-blue-500 textqueen text-white font-bold px-[20px] py-[10px] rounded-lg mt-5 mb-10' onClick={handleAbout}>View More</button>
        </div>

        <div>
        <h2 className='font-bold'>{info}</h2>
        <button className='bg-blue-500 textqueen text-white font-bold px-[20px] py-[10px] rounded-lg mt-5' onClick={handleInfo}>View More</button>
        </div>
    </div>
  )
}

export default ButtonComponent
