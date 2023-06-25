import React, { Fragment } from 'react';
import UserTestimonial from './Components/UserTestimonial';
import Header from './Components/header';
import HeroSec from './Components/HeroSec';
import Features from './Components/Features';
import Courses from './Components/Courses';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Alumni from './Components/Alumni';


const App = () => {
    return(
        <Fragment>
            <Header />
            <HeroSec />
            <Features />
            <Courses />
            <UserTestimonial />
            <Alumni />
            <AboutUs />
            <ContactUs />
            <Footer />
        </Fragment>
        
    );
}

export default App;