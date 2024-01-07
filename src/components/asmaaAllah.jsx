import React, { useState, useEffect } from 'react';

const AsmaaAllah = () => {
  const [asmaaData, setAsmaaData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://api.aladhan.com/v1/asmaAlHusna');
        const data = await response.json();
        setAsmaaData(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='text-center xl:px-48 grid xl:grid-cols-9 xl:h-full h-[700px] xl:overflow-auto overflow-y-scroll text-2xl'>
          {asmaaData.map((item) => (
            <div className='m-4 p-4 rounded-lg bg-[#eae2d5] hover:bg-[#ebe0d0] hover:duration-100  cursor-pointer  border border-[#776B5D] flex justify-center items-center flex-col' key={item.number}>
              <strong>{item.name}</strong> {/*  ({item.transliteration}): {item.en.meaning} */}
            </div>
          ))}
        </div>
      )}
    </div> 
  );
};

export default AsmaaAllah;
