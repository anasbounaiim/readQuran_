import React, { useEffect, useState } from 'react';

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { FiSun } from 'react-icons/fi';
import { BsMoonStars } from 'react-icons/bs';
import { BsCloudRain } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
import { FaPray } from 'react-icons/fa';

const PrayerCarousel = () => {
  const apiUrl = "https://api.jsonbin.io/v3/b/654ccdef12a5d37659970682";
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedGroupName, setSelectedGroupName] = useState(null);
  const [selectedGroupPrayers, setSelectedGroupPrayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setApiData(data.record);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching prayer timings data:", error);
        setApiData([]);
        setLoading(false);
      });
  }, [apiUrl]);

  const handleGroupNameClick = (groupName) => {
    const selectedGroup = apiData.find((group) => group.name === groupName);
    setSelectedGroupName(groupName);
    setSelectedGroupPrayers(selectedGroup ? selectedGroup.data : []);
    setCurrentPage(1);
  };

  const getIconByGroupName = (groupName) => {
    switch (groupName) {
      case 'أذكار الصباح':
        return <FiSun />;
      case 'أذكار المساء':
        return <BsMoonStars />;
      case 'أذكار الصلاة':
        return <FaPray />;
      case 'أذكار المذاكرة':
        return <TbSchool />;
      case 'أذكار المطر':
        return <BsCloudRain />;
      default:
        return null; // Return a default icon or null if no match is found
    }
  };

  const indexOfLastPrayer = currentPage * itemsPerPage;
  const indexOfFirstPrayer = indexOfLastPrayer - itemsPerPage;
  const currentPrayers = selectedGroupPrayers.slice(indexOfFirstPrayer, indexOfLastPrayer);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mx-auto p-4 text-[#776B5D]">
      <h1 className='text-6xl text-center mb-10 mt-7'>الأَذْكار</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul className='flex flex-row-reverse gap-4 justify-center text-2xl'>
            {apiData.map((prayerGroup) => (
              <li
                key={prayerGroup.name}
                className={`w-44  p-3 cursor-pointer flex flex-row-reverse justify-center gap-3 border-[1.7px] border-[#776B5D] rounded-xl font-medium  ${
                  selectedGroupName === prayerGroup.name ? 'font-bold bg-[#776B5D] text-[#EBE3D5]' : ''
                }`}
                onClick={() => handleGroupNameClick(prayerGroup.name)}
              >
                {getIconByGroupName(prayerGroup.name)}
                {prayerGroup.name}
              </li>
            ))}
          </ul>

          {selectedGroupName ? (
            <div className="mt-4 w-[1000px] h-96 font-thin ">
              
              <ul className="list-disc flex flex-col justify-center items-center pl-4 h-72 w-full rounded-xl bg-[#eae2d5] bg-cover bg-[url('../public/bg-ayats.png')] border-[2px] border-[#776B5D] my-16">
                {currentPrayers.map((prayer, index) => (
                  <li key={index} className="m-7 list-none text-2xl leading-10 text-center">
                    <strong>{prayer.text}</strong> - {prayer.disc} <br />
                  </li>
                ))}
                <span className='font-custom1 text-2xl'>{currentPage}/{selectedGroupPrayers.length}</span>
              </ul>
              

              <div className="flex mt-4 justify-center">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  className={`px-3 py-1 mx-1 border-[2px] border-[#776B5D] rounded-md bg-none focus:outline-none ${
                    currentPage === 1 ? 'text-[#EBE3D5]  bg-[#776B5D] cursor-not-allowed' : ' text-[#776B5D]'
                  }`}
                  disabled={currentPage === 1}
                >
                  <MdOutlineKeyboardArrowLeft className='text-2xl' />

                </button>

                <button
                  onClick={() => paginate(currentPage + 1)}
                  className={`px-3 py-1 mx-1 border-[2px] border-[#776B5D] rounded-md bg-none focus:outline-none ${
                    currentPage === Math.ceil(selectedGroupPrayers.length / itemsPerPage)
                      ? 'text-[#EBE3D5]  bg-[#776B5D] cursor-not-allowed'
                      : 'text-[#776B5D]'
                  }`}
                  disabled={currentPage === Math.ceil(selectedGroupPrayers.length / itemsPerPage)}
                >
                  <MdOutlineKeyboardArrowRight className='text-2xl' />

                </button>
              </div>
            </div>
          ) : (
            <div className="mt-4 w-[1000px] h-72  flex justify-center items-center rounded-xl border-[2px] border-[#776B5D]">
              <p className=''>السَّلَامُ عَلَيْكُمْ</p>
            </div>
            
          )}
        </div>
      )}
    </div>
  );
};

export default PrayerCarousel;
