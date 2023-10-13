import { BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import DesktopAppRoutes from './DesktopComponents/DesktopAppRoutes';
import MobileAppRoutes from './MobileComponents/MobileAppRoutes';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {isMobile ? <MobileAppRoutes /> : <DesktopAppRoutes />}
      </BrowserRouter>
    </div>
  );
}

export default App;
