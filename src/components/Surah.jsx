import React, { useState, useEffect } from "react";
import { isDesktop } from "react-device-detect";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import SurahDetail from "./surahDetails";
import Q_icon from "/public/Q-icon.png";
import "animate.css";
import "../index.css";

const Surah = () => {
  const [quranData, setQuranData] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showComponent, setShowComponent] = useState(true);
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
        setQuranData(data.data.surahs);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setQuranData([]);
        setLoading(false);
      });
  }, []);

  const handleSurahClick = (surahNumber) => {
    setSelectedSurah(surahNumber);
  };

  const toggleComponentVisibility = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div className="">
      <div className="w-full xl:h-screen overflow-hidden">
        <div className="w-full py-3 flex justify-center bg-[#776B5D] text-center text-4xl font-custom1 font-medium text-[#F3EEEA] slide-in-top">
          <img src={Q_icon} className="w-12 " alt="logo" srcSet="" />
        </div>

        <div className=" flex float-right w-full xl:h-screen bg-[#F3EEEA] gap-11 pt-[2rem]  xl:pb-28 xl:px-28 flex-col-reverse lg:flex-row">
          <div className=" w-96 m-auto mb-6  xl:w-full xl:h-full overflow-hidden ">
            <SurahDetail surahNumber={selectedSurah} />
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {/* Button to toggle the visibility of the component below */}
              <div
                className={`xl:hidden relative left-[6rem] z-50 cursor-pointer  ${
                  showComponent
                    ? "translate-x-0 slide-in-right"
                    : "translate-x-64  "
                }`}
              >
                <button
                  onClick={toggleComponentVisibility}
                  className="bg-[#776B5D] border-[#9e948a] border-2 text-[#F3EEEA] px-4 py-2 rounded-md"
                >
                  {showComponent ? (
                    <MdOutlineKeyboardArrowRight className="text-2xl" />
                  ) : (
                    <MdOutlineKeyboardArrowLeft className="text-2xl" />
                  )}
                </button>
              </div>

              {/* Conditionally render the component below based on the showComponent state */}
              {showComponent && (
                <div
                  className={`bg-[#776B5D] transition-transform duration-300   transform ${
                    showComponent
                      ? "translate-x-0 slide-in-right"
                      : " translate-x-full "
                  } w-72 h-[742px] xl:h-full absolute xl:top-0 top-[5.4rem] right-0 xl:relative p-4 overflow-y-auto xl:rounded-xl pt-6`}
                >
                  <ul className="flex flex-col gap-2 text-[#F3EEEA]">
                    {quranData.map((surah) => (
                      <li
                        key={surah.number}
                        className={` ${
                          selectedSurah === surah.number
                            ? "bg-[#EBE3D5]  border text-[#776B5D] hover:text-[#776B5D] hover:bg-[#EBE3D5] border-[#b0a695] "
                            : ""
                        }  hover:bg-[#b0a695] hover:text-[#776B5D]  rounded-md p-1 px-5 flex justify-end items-center  cursor-pointer active:bg-[#EBE3D5] `}
                        onClick={() => handleSurahClick(surah.number)}
                      >
                        <span
                          className={`${
                            surah.number === 112 ? "text-lg " : ""
                          } float-right font-custom2 text-xl  py-1 px-2 `}
                        >
                          {surah.name}{" "}
                        </span>{" "}
                        <span className="font-custom1 text-3xl font-bold">
                          - {surah.number}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Surah;
