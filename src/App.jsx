// src/App.js
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SplashLoader from './components/common/Loader'; // Import Splash Loader
import Layout from './components/layout/Layout';
import { ROUTES } from './constants/routes';
import { ThemeProvider } from './context/ThemeContext';
import About from './pages/About';
import AIAutomation from './pages/AIAutomation';
import CloudInfrastructure from './pages/CloudInfrastructure';
import Contact from './pages/Contact';
import CustomApplications from './pages/CustomApplications';
import Home from './pages/Home';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import SoftwareEngineering from './pages/SoftwareEngineering';
import WebDevelopment from './pages/WebDevelopment';



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashLoader />; 
  }

  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SERVICES} element={<Services />} />
            <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            
            {/* Add routes for individual services */}
            <Route path={ROUTES.CLOUD_INFRASTRUCTURE} element={<CloudInfrastructure />} />
            <Route path={ROUTES.SOFTWARE_ENGINEERING} element={<SoftwareEngineering />} />
            <Route path={ROUTES.WEB_DEVELOPMENT} element={<WebDevelopment />} />
            <Route path={ROUTES.MOBILE_APP_DEVELOPMENT} element={<MobileAppDevelopment />} />
            <Route path={ROUTES.CUSTOM_APPLICATIONS} element={<CustomApplications />} />
            <Route path={ROUTES.AI_AUTOMATION} element={<AIAutomation />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
