import * as React from 'react'
import {Link, graphql, useStaticQuery} from "gatsby";
import styled from "styled-components";
import Wave from 'react-wavify';
import SocialMediaIcons from "../socialMediaIcons";
import Dan from '../../images/dan-01.svg';

const Hero = styled.section `
    width: 100%;
    position: relative;
   
  
    .blob-2 {
      position: absolute;
      top: 0;
      right: -1rem;
    }
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
        text-align: center;
        max-width: 64rem;
        padding: 0 1.5rem;
    }
  
    h1, h2 {
      font-family: var(--primary-font);
      margin: 0;
      text-transform: uppercase;
    }
  
    h1 {
        font-size: 8.8rem;
        line-height: 9rem;
        font-weight: bold;
      
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
  
  .dan {
    width: 60rem;
    height: auto;
    z-index: 2;

    @media(max-width: 1230px) {
      width: 45rem;
    }
  }

  .social-icons {
    flex-direction: column;
    position: absolute;
    right: 3rem;
    top: 50%;
    transform: translateY(-50%);
    justify-content: center;
    z-index: 2;
    
    @media(max-width: 500px) {
      top: 57%;
      right: 4rem;
    }
  }
`
const HeroSection = ({colour}) => {

    const Page = useStaticQuery(graphql`
        query Hero {
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
        <Hero>
            <svg  xmlns="http://www.w3.org/2000/svg" className="blob-2" width="42.239" height="244.908" viewBox="0 0 42.239 244.908">
                <path id="Intersection_22" data-name="Intersection 22" d="M76.082,222.447c-20.458-27.7-2.84-56.49,10.918-79.244s6.778-54.846,10.725-66.976C101.572,64.41,105.44,57.746,109,50.071V294.978C98.958,254.405,86.386,238.258,76.082,222.447Z" transform="translate(-66.761 -50.071)" fill={colour}/>
            </svg>


            <HeroWrapper>
                <HeroContent>
                    <h1>{Page.home.homepage.heroTitle}</h1>
                    <h2 style={{color: colour}}>{Page.home.homepage.heroSubtitle}</h2>
                    <p>
                        {Page.home.homepage.heroText}
                    </p>
                    <Link to="/contact" title="Get In Touch" className="button button--gradient">Get In Touch</Link>
                </HeroContent>
                <Me>
                    <Dan className="dan" />
                    <SocialMediaIcons class_name="social-icons"/>
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
            <Wave fill={colour}
                  paused={false}
                  className="wave-two"
                  options={{
                      height: 115,
                      amplitude: 28,
                      speed: 0.15,
                      points: 3
                  }}
            />
        </Hero>
    )
}

export default HeroSection