import Surah from "./components/Surah"
import LoadingSpinner from "./components/Loading"
import Adan from "./components/Adan"
import Time from "./components/time"
import Adkar from "./components/adkar"
import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa6";

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

        <div className="w-full h-16 bg-[#F3EEEA]">
          <Adkar/>

        </div>

        <footer className="w-full p-2 flex justify-center bg-[#776B5D]">
       <a href="https://github.com/anasbounaiim"> <FaGithub className="text-2xl text-[#F3EEEA] "/></a> 

        </footer>
        
        </>
        
      )}
    </div>
  )
}

export default App
