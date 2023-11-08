import React, { useState, useEffect } from 'react';
import SurahDetail from './surahDetails';
import Q_icon from '/public/Q-icon.png'

const Surah = () => {
  const [quranData, setQuranData] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = "https://api.alquran.cloud/v1/quran/quran-uthmani";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setQuranData(data.data.surahs); // Use the ayahs array
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setQuranData([]); // Set quranData to an empty array on error
        setLoading(false);
      });
  }, []);

  const handleSurahClick = (surahNumber) => {
    setSelectedSurah(surahNumber);
  };

  console.log(selectedSurah)

  return (
    <div className=''>
        <div className='w-full h-screen overflow-hidden'>
            <div className='w-full py-3 flex justify-center bg-[#776B5D] text-center text-4xl font-custom1 font-medium text-[#F3EEEA]'>
              <img src={Q_icon}  className='w-12 ' alt="logo" srcset="" />
            </div>


    <div className='flex float-right w-full h-screen bg-[#F3EEEA] gap-11 pt-[2rem] pb-28 px-28'>
    <div className=' w-full h-full overflow-hidden '>
    <SurahDetail surahNumber={selectedSurah}/>

    </div>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <div className="bg-[#b0a695] w-72 p-4 overflow-y-auto rounded-xl pt-6 ">
        <ul className="flex flex-col gap-2 text-[#F3EEEA]">
          {quranData.map((surah) => (
            <li
              key={surah.number}
              className={` ${selectedSurah === surah.number ? 'bg-[#EBE3D5]  border text-[#776B5D] border-[#776B5D] ' : ''}  hover:bg-[#EBE3D5] hover:text-[#776B5D]  rounded-md p-1 px-5 flex justify-end items-center  cursor-pointer active:bg-[#EBE3D5] `}
              onClick={() => handleSurahClick(surah.number)}
            >
              <span className="float-right font-custom2 text-xl  py-1 px-2">{surah.name} </span> <span className='font-custom1 text-3xl font-bold' >- {surah.number}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

</div>
</div>
  </div>
  );
};

export default Surah;
