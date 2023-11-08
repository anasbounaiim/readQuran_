import Surah from "./components/Surah"
import LoadingSpinner from "./components/Loading"
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
        <Surah />
      )}
    </div>
  )
}

export default App
