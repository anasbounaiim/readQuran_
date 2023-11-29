import React, { useEffect, useState } from 'react';

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

  const indexOfLastPrayer = currentPage * itemsPerPage;
  const indexOfFirstPrayer = indexOfLastPrayer - itemsPerPage;
  const currentPrayers = selectedGroupPrayers.slice(indexOfFirstPrayer, indexOfLastPrayer);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mx-auto p-4 text-black">
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul className='flex flex-row-reverse gap-4 justify-center text-2xl  '>
            {apiData.map((prayerGroup) => (
              <li
                key={prayerGroup.name}
                className={`cursor-pointer bg-yellow-400 ${
                  selectedGroupName === prayerGroup.name ? 'text-blue-500 font-bold bg-orange-400' : ''
                }`}
                onClick={() => handleGroupNameClick(prayerGroup.name)}
              >
                {prayerGroup.name}
              </li>
            ))}
          </ul>

          {selectedGroupName && (
            <div className="mt-4 w-[1000px] h-96 bg-green-400">
             
              <ul className="list-disc flex justify-center items-center pl-4 h-72 w-full bg-red-500">
                {currentPrayers.map((prayer, index) => (
                  <li key={index} className="m-7 list-none text-2xl leading-10">
                    <strong>{prayer.text}</strong> - {prayer.disc}
                  </li>
                ))}
              </ul>

              <div className="flex mt-4 justify-center">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  className={`px-3 py-1 mx-1 focus:outline-none ${
                    currentPage === 1 ? 'bg-gray-300 text-black cursor-not-allowed' : 'bg-gray-300 text-black'
                  }`}
                  disabled={currentPage === 1}
                >
                  left
                </button>

                <button
                  onClick={() => paginate(currentPage + 1)}
                  className={`px-3 py-1 mx-1 focus:outline-none ${
                    currentPage === Math.ceil(selectedGroupPrayers.length / itemsPerPage)
                      ? 'bg-gray-300 text-black cursor-not-allowed'
                      : 'bg-gray-300 text-black'
                  }`}
                  disabled={currentPage === Math.ceil(selectedGroupPrayers.length / itemsPerPage)}
                >
                  right
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PrayerCarousel;
