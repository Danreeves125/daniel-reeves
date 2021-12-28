import * as React from 'react'
import Layout from "../components/layout"
import {Link, graphql, useStaticQuery} from "gatsby";
import styled from "styled-components";
import AboutSection from "../components/homepage/aboutSection";
import HeroSection from "../components/homepage/heroSection";
import PortfolioSection from "../components/homepage/portfolioSection";
import TestimonialSection from "../components/testimonials";
import ContactSection from "../components/homepage/contactSection";

// <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
//     <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
//         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
//             <link rel="manifest" href="/site.webmanifest">
//                 <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000">
//                     <meta name="msapplication-TileColor" content="#ffffff">
//                         <meta name="theme-color" content="#ffffff">
//
const IndexPage = () => {
    
    return(
        <div className="home">
            <HeroSection />
            <AboutSection />
            <PortfolioSection  />
            <TestimonialSection  />
            <ContactSection  />
        </div>
    )
}

export default IndexPage