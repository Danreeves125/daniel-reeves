import * as React from 'react'
import Layout from "../components/layout"
import {Link, graphql, useStaticQuery} from "gatsby";
import styled from "styled-components";
import Wave from 'react-wavify';
import Dan from '../images/dan-01.svg';
import AboutSection from "../components/homepage/aboutSection";
import PortfolioSection from "../components/homepage/portfolioSection";

const Hero = styled.div `
    width: 100%;
    position: relative;
  `
const HeroWrapper = styled.div `
    max-width: 131rem;
    width: 100%;
    margin: -8.5rem auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1.5rem;
    grid-gap: 6rem;
    transition: ease 0.5s;
    position: relative;
    overflow: hidden;

    @media(max-width: 1230px) {
        margin-top: -7rem;
        grid-gap: 3rem;
    }

    @media(max-width: 1230px) {
        margin-top: -5rem;
    }

    @media(max-width: 925px) {
        flex-direction: column;
        align-items: center;
        margin-top: 0;
        padding-top: 3rem;
    }
  
`

const HeroContent = styled.div `
    width: 55.2rem;
    position: absolute;
    top: calc(50% + 1rem);
    transform: translateY(-50%);
    left: 0;
    padding-left: 1.5rem;

    @media(max-width: 1230px) {
        width: 41rem;
    }

    @media(max-width: 925px) {
        width: 100%;
        position: relative;
        top: 0;
        transform: none;
        padding-left: 0;
        text-align: center;
        max-width: 64rem;
      
    }
  
    h1, h2 {
      font-family: var(--primary-font);
      margin: 0;
      text-transform: uppercase;
    }
  
    h1 {
        font-size: 8.8rem;
        line-height: 9rem;
        font-weight: 600;
      
        @media(max-width: 1230px) {
            font-size: 6rem;
            line-height: 6.5rem;
        }
    }
  
    h2 {
        font-size: 4rem;
        font-weight: bold;
        margin-bottom: 1rem;

        @media(max-width: 1230px) {
            font-size: 3rem;
            line-height: 3.5rem;
        }
    }
  
    p {
      font-size: 2rem;
      line-height: 2.5rem;
      color: var(--dark-grey);
      margin: 0 0 4.4rem 0;

      @media(max-width: 1230px) {
        font-size: 1.6rem;
        line-height: 2rem;
      }

      @media(max-width: 640px) {
        margin-bottom: 3rem;
      }
    }
`

const Me = styled.div `
  width: 68rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  
  @media(max-width: 1230px) {
      width: 50rem;
  }
  
  @media(max-width: 925px) {
    justify-content: center;
  }

  @media(max-width: 640px) {
    width: 100%;
    margin: 0 auto;
  }
  
  &:before {
    content: '';
    width: 100%;
    height: 47.5rem;
    position: absolute;
    bottom: 3.4rem;
    right: 0;
    background: linear-gradient(90deg, var(--purple-alt), var(--blue));
    border-radius: 25rem;
    z-index: 1;

    @media(max-width: 1230px) {
      height: 35rem;
    }

    @media(max-width: 500px) {
      height: 27rem;
    }

    @media(max-width: 375px) {
      bottom: 2rem;
      height: 22rem;
    }
  }
  
  svg {
    width: 60rem;
    height: auto;
    z-index: 2;

    @media(max-width: 1230px) {
      width: 45rem;
    }
  }
`

const IndexPage = () => {
    
    const Page = useStaticQuery(graphql`
        query Homepage {
            home: wpPage(slug: {eq: "homepage"}) {
                id
                link
                title
                slug
                homepage {
                    heroTitle
                    heroSubtitle
                    heroText
                }

            }
        }
    `)
    
    return(
        <Layout>
            <Hero>
                <HeroWrapper>
                    <HeroContent>
                        <h1>{Page.home.homepage.heroTitle}</h1>
                        <h2>{Page.home.homepage.heroSubtitle}</h2>
                        <p>
                            {Page.home.homepage.heroText}
                        </p>
                        <Link to="/contact" title="Get In Touch" className="button button--gradient">Get In Touch</Link>
                    </HeroContent>
                    <Me>
                        <Dan />
                    </Me>
                </HeroWrapper>
                <Wave fill='#fff'
                      paused={false}
                      className="wave"
                      options={{
                          height: 120,
                          amplitude: 20,
                          speed: 0.15,
                          points: 4
                      }}
                />
                <Wave fill='#444'
                      paused={false}
                      className="wave-two"
                      options={{
                          height: 105,
                          amplitude: 28,
                          speed: 0.15,
                          points: 3
                      }}
                />
            </Hero>
            <AboutSection />
            <PortfolioSection />
        </Layout>
    )
}

export default IndexPage