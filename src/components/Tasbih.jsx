import React, { useState, useEffect } from 'react';

import { PiRepeatBold } from "react-icons/pi";
import { PiPlusBold } from "react-icons/pi";
import { PiMinusBold } from "react-icons/pi";




function TasbihCounter({Duaa}) {
 const [counter, setCounter] = useState(0);

 const incrementCounter = () => {
    setCounter(counter + 1);
 };

 const decrementCounter = () => {
   setCounter(counter <= 0 ? 0 : counter - 1);
};

 const resetCounter = () => {
    setCounter(0);
 };

 useEffect(() => {
    const storedCounter = localStorage.getItem('counter');
    if (storedCounter) {
      setCounter(parseInt(storedCounter));
    }
 }, []);

 useEffect(() => {
    localStorage.setItem('counter', counter);
 }, [counter]);

 return (
    <div className="rounded-md  font-custom1 border-[3px] border-[#9e948a] text-[#776B5D]  w-[340px] h-72 flex flex-col justify-center items-center bg-[#eae2d5] bg-cover bg-[url('../public/bg-ayats.png')] ">
      <p className='text-3xl text-center px-8 mt-7 font-bold'>{Duaa}</p>
      <div className='bg-[#776B5D] text-[#eae2d5] w-14 h-14 gap-4 my-6 flex justify-center items-center rounded-full'>
      <p className='text-4xl rounded-full'> {counter}</p>
      </div>
      <div className='text-2xl font-serif my-2 flex gap-9'>
      <button onClick={incrementCounter}><PiPlusBold /></button>
      <button onClick={decrementCounter}><PiMinusBold /></button>
      <button onClick={resetCounter}><PiRepeatBold /></button>
      </div>
    </div>
 ); 
}

export default TasbihCounter;