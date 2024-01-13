import LoadingSpinner from "./components/Loading"

import Surah from "./components/Surah"
import Adan from "./components/Adan"
import Time from "./components/time"
import Adkar from "./components/adkar"
import Tasbih from "./components/Tasbih"
import AsmaaAllah from "./components/asmaaAllah"

import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";

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

        <div className="w-full xl:h-full h-[1300px]   flex justify-center p-12  font-custom2 text-right bg-[#F3EEEA]">
          <Adkar/>

        </div>
        <div className="bg-[#776B5D]   h-full bg-[url('../public/bg-adan.png')] bg-no-repeat bg-contain ">

         <h1 className="text-6xl text-center p-10 pt-24  text-[#eae2d5] font-custom2 ">تَسْبِيحْ </h1>

         <div className="flex justify-center gap-20 my-10 flex-col items-center xl:flex-row">
         <Tasbih Duaa="سبحان الله"/>
         <Tasbih Duaa="الحمدلله"/>
         <Tasbih Duaa="أستغفر الله"/>
         </div>

         <div className="flex justify-center gap-20 my-10 flex-col items-center xl:flex-row">
         <Tasbih Duaa="لا حول ولا قوة إلا بالله"/>
         <Tasbih Duaa="اللهم صل وسلم وبارك على سيدنا محمد"/>
         <Tasbih Duaa="سبحان الله وبحمده سبحان الله العظيم"/>
         </div>

         <div className="flex justify-center gap-20 my-10 flex-col items-center xl:flex-row">
         <Tasbih Duaa="أستغفر الله الذى لا إله إلا هو الحى القيوم وأتوب إليه" />
         <Tasbih Duaa="سبحان الله والحمد لله ولا إله إلا الله والله أكبر" />
         <Tasbih Duaa="اللهمَّ إنك عفوٌّ تُحبُّ العفوَ فاعفُ عنِّي" />
         </div>

        </div>

        {/* <div className="w-full xl:h-full h-[1000px]   p-12  font-custom2 text-right bg-[#F3EEEA]">
        <h1 className="text-6xl text-center p-10 pt-11  text-[#776B5D] font-custom2 ">أسماء الله الحسنى</h1>
        <div className="flex justify-center items-center  text-[#776B5D]">

        <AsmaaAllah/>
        </div>
        </div> */}

        <footer className="w-full p-2 flex gap-6 justify-center bg-[#776B5D]">
       <a href="https://github.com/anasbounaiim" target="_blank"> <FaGithub className="text-2xl text-[#F3EEEA] "/></a> 
       <a href="https://www.linkedin.com/in/anas-bounaim-37450621a" target="_blank"> <FaLinkedin className="text-2xl text-[#F3EEEA] "/></a> 

        </footer>
        
        </>
        
      )}
    </div>
  )
}

export default App
