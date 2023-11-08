import Surah from "./components/Surah"
import LoadingSpinner from "./components/Loading"
import Adan from "./components/Adan"
import Time from "./components/time"
import React, { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading period
  }, []);
  return (
    <div className="bg-[#776B5D] text-white min-h-screen">
      {isLoading ? (
        <LoadingSpinner /> // Display the LoadingSpinner when isLoading is true
      ) : (
        <>
        <Surah />
        <div className="bg-[#776B5D] bg-[url('../public/bg-adan.png')] bg-no-repeat ">
          <Adan/>
        <Time/>
        </div>
        
        </>
        
      )}
    </div>
  )
}

export default App
