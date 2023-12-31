import React, { useEffect, useState } from 'react';

const Time = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();

let current_day = `${date}-${month}-${year}`

  const apiUrl = `https://api.aladhan.com/v1/timingsByAddress/${current_day}?address=Rabat,MA&method=8`;

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

  console.log(apiData);

  return (
    <div>
      {loading ? (
        <p>Loading prayer timings data...</p>
      ) : (
        <div>
          <p className='flex justify-center items-center text-[#EBE3D5] font-custom2 p-3 text-3xl '> <span className='font-custom1 m-2 text-4xl'>{apiData.date.hijri.year}</span>  {apiData.date.hijri.month.ar} <span className='font-custom1 m-2 text-4xl'>{apiData.date.hijri.day}</span>  {apiData.date.hijri.weekday.ar} </p>
    
          
        </div>
      )}
    </div>
  );
};

export default Time;
