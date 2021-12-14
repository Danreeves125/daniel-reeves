import * as React from 'react'
import Layout from "../components/layout"
import {Link, graphql, useStaticQuery} from "gatsby";
import styled from "styled-components";
import AboutSection from "../components/homepage/aboutSection";
import HeroSection from "../components/homepage/heroSection";
import PortfolioSection from "../components/homepage/portfolioSection";
import TestimonialSection from "../components/testimonials";
import ContactSection from "../components/homepage/contactSection";

const IndexPage = () => {
    
    return(
        <Layout>
            <HeroSection />
            <AboutSection />
            <PortfolioSection  />
            <TestimonialSection  />
            <ContactSection  />
        </Layout>
    )
}

export default IndexPage