import * as React from 'react'
import Layout from "../components/layout"
import {Link, graphql, useStaticQuery} from "gatsby";
import styled from "styled-components";
import {colour} from "../components/layout";
import Wave from 'react-wavify';

const HeroWrapper = styled.div `
    max-width: 131rem;
    margin: -8.5rem auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1.5rem;
    grid-gap: 6rem;
    transition: ease 0.5s;
    position: relative;
    overflow: hidden;
  
  .wave,
  .wave-two {
    position: absolute;
     bottom: -0.5rem;
    left: 0;
    z-index: 3;
    pointer-events: none;
  }
  .wave-two {
    opacity: 0.2;
    z-index: 2;
  }

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
        color: ${colour};
      
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

const Scroll = styled.div `
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;

    @media(max-width: 925px) {
        position: relative;
        left: 0;
        transform: none;
        
    }

    @keyframes heroScroll {
        50% {
          transform: translate3d(0, 1.1rem, 0);
        }
        
        100% {
          transform: translate3d(0, 0.4rem, 0);
        }
    }
  
    .scroll {
        width: 1.1rem;
        height: 2rem;
        border-radius: 2rem;
        border: 0.1rem solid var(--pink);
        margin-bottom: 0.2rem;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-start;
      
        &:before {
            content: '';
            width: 0.1rem;
            height: 0.4rem;
            background-color: var(--pink);
            transform: translate3d(0, 0.4rem, 0);
            transition: ease, 0.5s;
            animation-name: heroScroll;
            animation-duration: 3s;
            animation-iteration-count: infinite;
        }
    }
    
    span {
        font-family: var(--primary-font);
        text-transform: uppercase;
        font-size: 1.5rem;
    }
`


const IndexPage = () => {

    const Homepage = useStaticQuery(graphql`
        query Homepage {
            wpPage(slug: {eq: "homepage"}) {
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
            <HeroWrapper>
                <HeroContent>
                    <h1>{Homepage.wpPage.homepage.heroTitle}</h1>
                    <h2>{Homepage.wpPage.homepage.heroSubtitle}</h2>
                    <p>
                        {Homepage.wpPage.homepage.heroText}
                    </p>
                    <Link to="/contact" title="Get In Touch" className="button">Get In Touch</Link>
                </HeroContent>
                <Me>
                    <svg xmlns="http://www.w3.org/2000/svg" width="722.6" height="711.043" viewBox="0 0 722.6 711.043"><defs><clipPath id="a"><path d="M271,565.3S116.6,596.7,91,647.8C71.4,687,38.7,798.1,38.7,798.1H318.2L315,629.5Z"/></clipPath><clipPath id="c"><path d="M443.1,656.8,431.9,798.1H761.3s-23.9-151.8-76.1-183.2C616,573.2,514,553.7,514,553.7l-51.5,68.5Z"/></clipPath></defs><g transform="translate(-2356.1 1811.643)"><g transform="translate(2317.4 -1898.7)"><path d="M455.4,668.1,314.9,654.7l11,143.4H455.4Z" fill="#fff"/><g clipPath="url(#a)"><rect width="43.5" height="52" transform="translate(38.7 763.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(82.2 763.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(125.7 763.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(169.3 763.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(212.8 763.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(256.4 763.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(38.7 711.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(82.2 711.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(125.7 711.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(169.3 711.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(212.8 711.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(256.4 711.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(38.7 659.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(82.2 659.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(125.7 659.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(169.3 659.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(212.8 659.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(256.4 659.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(38.7 607.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(82.2 607.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(125.7 607.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(169.3 607.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(212.8 607.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(256.4 607.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(38.7 555.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(82.2 555.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(125.7 555.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(169.3 555.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(212.8 555.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(256.4 555.9)" fill="#79363e"/></g><g clipPath="url(#a)"><rect width="43.5" height="52" transform="translate(299.9 763.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(343.5 763.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(387 763.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(430.6 763.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(474.1 763.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(517.7 763.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(299.9 711.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(343.5 711.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(387 711.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(430.6 711.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(474.1 711.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(517.7 711.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(299.9 659.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(343.5 659.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(387 659.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(430.6 659.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(474.1 659.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(517.7 659.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(299.9 607.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(343.5 607.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(387 607.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(430.6 607.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(474.1 607.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(517.7 607.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(299.9 555.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(343.5 555.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(387 555.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(430.6 555.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(474.1 555.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(517.7 555.9)" fill="#79363e"/></g><g clipPath="url(#c)"><rect width="43.5" height="52" transform="translate(459.3 763.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(502.8 763.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(546.4 763.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(589.9 763.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(633.5 763.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(677 763.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(459.3 711.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(502.8 711.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(546.4 711.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(589.9 711.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(633.5 711.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(677 711.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(459.3 659.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(502.8 659.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(546.4 659.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(589.9 659.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(633.5 659.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(677 659.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(459.3 607.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(502.8 607.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(546.4 607.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(589.9 607.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(633.5 607.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(677 607.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(459.3 555.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(502.8 555.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(546.4 555.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(589.9 555.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(633.5 555.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(677 555.9)" fill="#79363e"/></g><g clipPath="url(#c)"><rect width="29.8" height="35.6" transform="translate(536.9 810.6)" fill="#4d384a"/><rect width="29.8" height="35.6" transform="translate(566.8 810.6)" fill="#79363e"/><rect width="29.8" height="35.6" transform="translate(596.6 810.6)" fill="#4d384a"/><rect width="29.8" height="35.6" transform="translate(626.5 810.6)" fill="#79363e"/><rect width="29.8" height="35.6" transform="translate(536.9 775)" fill="#79363e"/><rect width="29.8" height="35.6" transform="translate(566.8 775)" fill="#c12323"/><rect width="29.8" height="35.6" transform="translate(596.6 775)" fill="#79363e"/><rect width="29.8" height="35.6" transform="translate(626.5 775)" fill="#c12323"/><rect width="29.8" height="35.6" transform="translate(536.9 739.3)" fill="#4d384a"/><rect width="29.8" height="35.6" transform="translate(566.8 739.3)" fill="#79363e"/><rect width="29.8" height="35.6" transform="translate(596.6 739.3)" fill="#4d384a"/><rect width="29.8" height="35.6" transform="translate(626.5 739.3)" fill="#79363e"/></g><g opacity="0.2" clipPath="url(#c)"><path d="M657.9,776.6H535.3V737.7H657.9v38.9Zm-119.3-3.3H654.7V741H538.6Z" fill="#6d303b"/></g><g opacity="0.2" clipPath="url(#c)"><path d="M657.9,840.6H535.3v-64h3.3v60.7H654.7V776.6h3.2Z" fill="#6d303b"/></g><g clipPath="url(#c)"><rect width="43.5" height="52" transform="translate(198.2 763.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(241.8 763.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(285.3 763.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(328.9 763.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(372.4 763.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(416 763.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(198.2 711.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(241.8 711.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(285.3 711.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(328.9 711.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(372.4 711.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(416 711.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(198.2 659.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(241.8 659.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(285.3 659.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(328.9 659.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(372.4 659.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(416 659.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(198.2 607.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(241.8 607.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(285.3 607.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(328.9 607.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(372.4 607.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(416 607.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(198.2 555.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(241.8 555.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(285.3 555.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(328.9 555.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(372.4 555.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(416 555.9)" fill="#79363e"/></g><g clipPath="url(#c)"><rect width="43.5" height="52" transform="translate(720.6 763.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(764.2 763.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(720.6 711.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(764.2 711.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(720.6 659.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(764.2 659.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(720.6 607.9)" fill="#79363e"/><rect width="43.5" height="52" transform="translate(764.2 607.9)" fill="#c12323"/><rect width="43.5" height="52" transform="translate(720.6 555.9)" fill="#4d384a"/><rect width="43.5" height="52" transform="translate(764.2 555.9)" fill="#79363e"/></g></g><g transform="translate(2317.4 -1898.7)"><path d="M293.1,647.4s62.1,43.9,77.9,43.2c10.3-.5,42-7,62.5-15.1,5.2-2,9.9-8.3,4.4-9.1Z" fill="#ffe7cf"/></g><g transform="translate(2317.4 -1898.7)"><path d="M465.7,637.7l-6.8,160.4H433l4.2-147.8Z" fill="#4d384a"/></g><g transform="translate(2317.4 -1898.7)"><ellipse cx="1.5" cy="8.2" rx="1.5" ry="8.2" transform="translate(448 728.6)" fill="#cca7aa"/></g><g transform="translate(2317.4 -1898.7)"><path d="M463.9,629.5l-6,168.6h1.4l6.8-164.3Z" fill="#6d303b"/></g><g transform="translate(2317.4 -1898.7)"><path d="M293.1,637.7l6.8,160.4h26l-4.2-147.8Z" fill="#c12323"/></g><g transform="translate(2317.4 -1898.7)"><path d="M295,629.5l6.1,168.6h-1.5l-6.8-164.2Z" fill="#79363e"/></g><g transform="translate(2317.4 -1898.7)"><ellipse cx="6.6" cy="8.2" rx="6.6" ry="8.2" transform="translate(304.9 726.7)" fill="#cca7aa"/></g><g transform="translate(2317.4 -1898.7)" opacity="0.2"><path d="M226.4,585.8s14.1,41.4,64.8,90.2l20.4-25Z" fill="#6d303b"/></g><g transform="translate(2317.4 -1898.7)" opacity="0.2"><path d="M450.5,664l17.2,20.8s66.1-38.2,99.7-112.9Z" fill="#6d303b"/></g><g transform="translate(2317.4 -1898.7)"><path d="M473.7,646.6,457.6,654l11,26.5s11.6-7.9,27-20.7l-10.4-21.3Z" fill="#4d384a"/><path d="M533.2,578.4l-6.6,14.7-11.9,16.5,8.3,24.9a251.872,251.872,0,0,0,26-30.2Z" fill="#4d384a"/><path d="M240.3,544.8l-14,41s3.3,6.4,9.3,16.3l13.3-34.9Z" fill="#79363e"/><path d="M279.3,617.9l-15.4-21.2L252,626.3c5.2,7.1,11.1,14.7,17.6,22.2l12.3-27.9Z" fill="#c12323"/><path d="M256.6,586.7l-7.5-19.5-13.3,34.9c4.2,6.8,9.6,15.2,16.2,24.3l11.9-29.6Z" fill="#4d384a"/><path d="M281.8,620.6l-12.3,27.9A267.619,267.619,0,0,0,289.1,669l20.1-19.8Z" fill="#4d384a"/><path d="M503.5,625.3l-18.4,13.1,10.4,21.3c8.5-7.1,18.1-15.6,27.6-25.2l-8.3-24.9Z" fill="#c12323"/><path d="M549.2,604.3c7.6-10.4,14-21.3,18.3-32.4L556,536.5l-4.1.1-18.6,41.7Z" fill="#79363e"/></g><g transform="translate(2317.4 -1898.7)"><path d="M573.7,389.6c0,149-80.2,269.8-179.1,269.8-86.5,0-151.5-77.4-168.2-200.3-2.4-17.6-8.3-53.8-8.3-72.4,0-149,77.7-222.2,176.6-222.2,90.6,0,158.4,63.8,170.4,189C566.1,364.9,573.7,377,573.7,389.6Z" fill="#ffe7cf"/><path d="M249.8,336h-8.1a34.612,34.612,0,0,0-34.6,34.6v21.7A42.678,42.678,0,0,0,249.8,435h0a42.678,42.678,0,0,0,42.7-42.7V378.7A42.678,42.678,0,0,0,249.8,336Z" fill="#ffe7cf"/><path d="M544.2,339h10.6a32.136,32.136,0,0,1,32.1,32.1v24.2A42.678,42.678,0,0,1,544.2,438h0a42.678,42.678,0,0,1-42.7-42.7V381.7A42.678,42.678,0,0,1,544.2,339Z" fill="#ffe7cf"/><path d="M271,345.3a4.645,4.645,0,0,1-2.3-.6,4.759,4.759,0,0,1-1.8-6.5c10.4-18.3,23.5-29.7,39.1-33.9,21.6-5.8,39.8,4.7,40.6,5.1a4.751,4.751,0,0,1-4.8,8.2h0c-.2-.1-15.7-8.9-33.4-4.1-13,3.5-24.1,13.4-33.2,29.4A4.933,4.933,0,0,1,271,345.3Z" fill="#75493f"/><path d="M504.5,321a4.377,4.377,0,0,1-3.2-1.3c-13.4-12.6-26.9-18.7-40.4-18.2-18.4.7-30.6,13.7-30.7,13.8a4.742,4.742,0,0,1-7-6.4c.6-.7,14.8-16,37.2-16.9,16.1-.6,32.1,6.4,47.4,20.8a4.74,4.74,0,0,1,.2,6.7A4.691,4.691,0,0,1,504.5,321Z" fill="#75493f"/><circle cx="16.6" cy="16.6" r="16.6" transform="translate(304.7 357.3)" fill="#53443e"/><circle cx="16.6" cy="16.6" r="16.6" transform="translate(446.2 357.3)" fill="#53443e"/><path d="M570.8,273.2a87.668,87.668,0,0,0-1.8-14s1.5-65.3-36.5-105.5c-2.3-6.4-6.6-12.9-14-19.1-30.4-25.2-180.7-81.1-231.4-19.9a111.608,111.608,0,0,0-10.8,11.9c-5.2,6.7-10.3,22.4-8.9,28.4h0c-27.4,29.8-47,70.3-49,100.8-2.1,32.3-5.4,77.7,7.2,108.4,0,0,16.3-91.1,28.8-121.6,0,0,16.1-42.2,57.7-33.9s76,15.9,142.6,0c65.6-15.6,86,64.3,86,64.3l27.7,105.4C568.5,378.7,572.9,305.8,570.8,273.2Z" fill="#351c17"/><path d="M394.3,496.9c-19.1-8.3-35.7.7-42.1,5a54.43,54.43,0,0,0,84.8,0A42.759,42.759,0,0,0,394.3,496.9Z" fill="#fb5170"/><path d="M342,446.8v26a46.8,46.8,0,0,0,10.2,29.1c6.4-4.3,23-13.2,42.1-5a43.06,43.06,0,0,1,42.8,4.9,47.012,47.012,0,0,0,10.2-29.1v-26H342Z" fill="#3f4a49"/><path d="M350.4,448.5v20.4a10.5,10.5,0,0,0,10.5,10.5h67.5a10.5,10.5,0,0,0,10.5-10.5V448.5Z" fill="#fffbf4"/><path d="M566.4,365.2c0-.2-.3-.1-.3,0L550.2,482.8a82.266,82.266,0,0,1-36.1,57.5,3.431,3.431,0,0,1-5.3-2.8l-.3-37.5a54.45,54.45,0,0,0-31.3-48.9l-33.4-15.7a31.023,31.023,0,0,0-19.7-2.3l-21.4,4.5a35.418,35.418,0,0,1-15.2,0l-15.9-3.4a31.3,31.3,0,0,0-23.8,4.6c-6.7,4.6-16.6,9.7-26.3,14.2a54.208,54.208,0,0,0-31.4,49.1v36.2a3.294,3.294,0,0,1-5.5,2.5,141.132,141.132,0,0,1-49.4-85.5c-4.2-25.2-4.9-66.8-9.5-90a.15.15,0,1,0-.3,0c-1.2,10.9-11,106.2,1.7,130.2h0c0,.6.8,33.3,12,57.3a284.651,284.651,0,0,1,15.6,40.9c3.1,10.6,8.7,22.2,19,29.4h0c.3.7,11.4,29.6,47.8,36.1h.1c.5.6,21.1,21.8,75.1,21,48.4-.7,64.9-20.4,65.4-21h0c1-.2,46.4-9.5,55.3-42v-.1c.8-.4,17.8-8.5,29.9-50.8,9.2-32.2,19.9-28.4,18.4-64.3h0C566,501.7,581.2,420.2,566.4,365.2ZM324.6,474.3l70.5-15.2h.1l70.9,13.7a22.046,22.046,0,0,1,17.4,26c-4.3,21.3-16.6,51.8-52,63.4-7.6,2.5-19.1.3-25-5.1-7.4-6.7-8-12.4-8.3-16.6a2.757,2.757,0,0,0-2.8-2.6h-7a2.8,2.8,0,0,0-2.8,2.4v.2c-2,18.1-16.7,28.1-33.9,22a55.329,55.329,0,0,1-29-23.7,109.023,109.023,0,0,1-14.8-39.9A21.466,21.466,0,0,1,324.6,474.3Z" fill="#3d1e12"/><path d="M328,428.4H259.5a25.368,25.368,0,0,1-24.6-19l-12.7-48.9a25.452,25.452,0,0,1,24.6-31.8H355.2a25.342,25.342,0,0,1,19.1,8.6,25.617,25.617,0,0,1,6.1,20l-3.7,28.2A49.186,49.186,0,0,1,328,428.4Zm-81.2-88.2a13.88,13.88,0,0,0-11,5.4,13.625,13.625,0,0,0-2.5,12L246,406.5a13.927,13.927,0,0,0,13.5,10.4H328a37.827,37.827,0,0,0,37.4-32.8l3.7-28.2a14.11,14.11,0,0,0-3.3-11,13.947,13.947,0,0,0-10.5-4.7H246.8Z" fill="#303030"/><path d="M529.8,428.4H461.3a49.183,49.183,0,0,1-48.7-42.8l-3.7-28.2a25.331,25.331,0,0,1,25.2-28.6H542.5a25.452,25.452,0,0,1,24.6,31.8l-12.7,48.9A25.391,25.391,0,0,1,529.8,428.4Zm-95.7-88.2a14.106,14.106,0,0,0-10.5,4.7,13.742,13.742,0,0,0-3.3,11l3.7,28.2a37.752,37.752,0,0,0,37.4,32.8h68.5a14.015,14.015,0,0,0,13.5-10.4l12.7-48.9a13.625,13.625,0,0,0-2.5-12,14.027,14.027,0,0,0-11-5.4H434.1Z" fill="#303030"/><path d="M412.6,369.3s-7.3-4.3-18.7-4.3c-10.6,0-15,3.6-15.2,3.8l-7.7-8.5c.7-.7,7.7-6.7,22.8-6.7,14.8,0,24.3,5.8,24.7,6Z" fill="#303030"/><path d="M383.5,431.4c4.1,1.4,8,3.7,12.3,3.5,4.4-.2,8.2-3.3,12.5-4.1a55.545,55.545,0,0,1,10.8-.8s7.8,0,7.8-2.4c0-2.6-13.9-4.5-22.8-5.1a134.959,134.959,0,0,0-21.5.5c-3.5.3-14.2,2.6-17.3,4.4a1.286,1.286,0,0,0-.6,1.3c.1,1.6,2.4,2.1,3.6,2.4a25.073,25.073,0,0,0,8.2,0,17.173,17.173,0,0,1,6.4.3C383.1,431.3,383.3,431.4,383.5,431.4Z" fill="#efcaaf"/></g></g>
                    </svg>
                </Me>
                <Scroll>
                    <div className="scroll">
                    
                    </div>
                    <span>Scroll</span>
                </Scroll>
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
                          height: 105,
                          amplitude: 28,
                          speed: 0.15,
                          points: 3
                      }}
                />
            </HeroWrapper>
        </Layout>
    )
}

export default IndexPage