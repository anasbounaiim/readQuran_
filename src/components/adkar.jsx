import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrayerCarousel = () => {
  const [prayers, setPrayers] = useState([]);

  const apiUrl = "https://api.jsonbin.io/v3/b/654ccdef12a5d37659970682"
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

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

console.log(apiData)
  return (
    <div className="max-w-md mx-auto p-4 text-black">
     <h1 className=''>Adkar</h1>

     <ul >
          <li>dd</li>
        

        </ul>
    </div>
  );
};

export default PrayerCarousel;
