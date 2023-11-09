import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrayerCarousel = () => {
  const [prayers, setPrayers] = useState([]);

  useEffect(() => {
    const fetchPrayers = async () => {
      try {
        const response = await axios.get('/data/prayers.json');
        setPrayers(response.data);
      } catch (error) {
        console.error('Error fetching prayers:', error);
      }
    };

    fetchPrayers();
  }, []);

  return (
    <div className="max-w-md mx-auto p-4">
      <div id="prayerCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {prayers.map((prayer, index) => (
            <div key={prayer.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <h2 className="text-2xl font-bold mb-4">{prayer.name}</h2>
              <p className="text-lg">{prayer.data[0].text}</p>
              <p className="italic">{prayer.data[0].disc}</p>
            </div>
          ))}
        </div>
        {/* Add navigation controls */}
        <a className="carousel-control-prev" href="#prayerCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#prayerCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default PrayerCarousel;
