import React, { useState, useEffect } from 'react';
import 'animate.css';


const SurahDetail = ({ surahNumber }) => {
  const [surahData, setSurahData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = `https://api.alquran.cloud/v1/surah/${surahNumber}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSurahData(data.data.ayahs);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Surah data:", error);
        setSurahData([]);
        setLoading(false);
      });
  }, [apiUrl]);


  let c= 0
  return (
    <div className=" w-full h-full bg-[#eae2d5] text-[#776B5D] border-[#B0A695] bg-[url('../public/bg-ayats.png')] border-[2px] text-justify font-medium px-12 py-7 overflow-y-auto rounded-xl flex">
      {loading ? (
        <p>Loading Surah data...</p>
      ) : (
        <div className='text-end  justify-center items-center h-fit animate__animated animate__fadeIn'>
          {surahData.map((ayah) => (
            <span key={ayah.number} className='text-2xl  leading-[3.4rem] font-custom2'>
               {ayah.text} <strong className='px-3 font-custom1 text-3xl'> ({c=c+1})</strong>
            </span>
          ))}
        </div>
      )}


{
  surahNumber === null ? (
    <div className='flex justify-center items-center h-full w-full'>
    <p className='  text-5xl font-custom2 text-center leading-[4.9rem]'> السَّلَامُ عَلَيْكُمْ يُمْكِنُكُم اخْتِيَار السُّورَةَ مِنْ الْقَائِمَة الْمَوْجُودَةَ عَلَى الْيَمِينِ 
</p>
    </div>
  ) : null
}

    </div>
  );
};

export default SurahDetail;
