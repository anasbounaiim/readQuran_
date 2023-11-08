import React, { useEffect, useState } from 'react';

const PrayerTimings = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = `https://api.aladhan.com/v1/timingsByAddress/08-11-2023?address=Rabat,MA&method=8`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setApiData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching prayer timings data:", error);
        setApiData([]);
        setLoading(false);
      });
  }, [apiUrl]);



  const desiredPrayers = {
    "Fajr" : "الْفَجْر" , 
    "Sunrise" : "الشُّرُوق" , 
    "Dhuhr" : "الظُّهْر" , 
    "Asr" : "الْعَصْر" , 
    "Maghrib" : "الْمَغْرِب" , 
    "Isha" : "الْعِشَاء  " , 
    
  };

  console.log(apiData);

  return (
    <div className="p-8 ">
        <h1 className='text-[#EBE3D5] text-center font-custom2 p-8 text-5xl  '>مَوَاقِيت الصَّلَاة</h1>
      {loading ? (
        <p>Loading prayer timings data...</p>
      ) : (
        <ul>
          {Object.entries(apiData.timings).map(([prayerName, prayerTime]) => (
            desiredPrayers[prayerName] && (
              <li key={prayerName} className='flex justify-center items-center font-custom2 text-3xl text-[#EBE3D5] leading-[4rem]'>
            <span className='font-custom1 text-4xl'>{prayerTime}</span>  :    {desiredPrayers[prayerName]}
              </li>
            )
          ))}
        </ul>
      )}

<div>


</div>

    </div>
  );
};

export default PrayerTimings;
