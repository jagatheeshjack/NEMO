import React, { useState } from 'react';
import Sidebar from './Sidebar';
import About from '../Tabs/About';
import Contact from '../Tabs/Contact';
import Home from '../Tabs/Home';
import Portfolio from '../Tabs/Portfolio';
import Services from '../Tabs/Services';
import Resume from '../Tabs/Resume'; 
import '../assets/css/style.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/vendor/aos/aos.css';
import favicon from '../assets/img/favicon.png';  
// import './assets/js/main.js';

function User() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="App">
       <head>
            <meta charset="utf-8"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

            <meta content="" name="description"/>
            <meta content="" name="keywords"/>

            <link href={favicon.png} rel="icon"/>
            <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>

            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>
        </head>
      <body>
        <Sidebar 
                activeTabIndex={activeTabIndex} 
                setActiveTabIndex={setActiveTabIndex}
            />
   
            <main id="main">

        <div className="content">
          {activeTabIndex === 0 && <Home />}
          {activeTabIndex === 1 && <About />}
          {activeTabIndex === 2 && <Resume />}
          {activeTabIndex === 3 && <Portfolio />}
          {activeTabIndex === 4 && <Services />}
          {activeTabIndex === 5 && <Contact />}
        </div>
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

      </main>
      </body>

    </div>
  );
}

export default User;


