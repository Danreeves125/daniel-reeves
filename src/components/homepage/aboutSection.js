import * as React from 'react'
import {useEffect} from "react";
import {Link, useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import img from './about-bg@2x.jpg';
import Wave from "react-wavify";

const AboutWrapper = styled.section `
  padding: 6rem 0 12rem 0;
  position: relative;

  &:before {
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    background: url(${img});
    background-size: 60rem;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    opacity: 0.15;
  }
  
  @media (max-width: 1024px) {
    padding-top: 4rem;
  }

  @media (max-width: 640px) {
    padding-top: 3rem;
    padding-bottom: 6rem;
  }
`
const AboutInner = styled.div `
    max-width: 83rem;
    width: 100%;
    padding: 0 1.5rem;
    margin: auto;
    position: relative;
    z-index: 2;
`

const AboutText = styled.div `
  
  p {
    font-family: var(--body-font);
    font-size: 1.8rem;
    line-height: 2.5rem;
    
    @media(max-width: 640px) {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }
`

const Email = styled.a `
    max-width: 3rem;
    position: absolute;
    right: 1.5rem;
  	top: 3rem;
    z-index: 2;
    transform: rotate(90deg);
    font-size: 2.5rem;
    line-height: 3rem;
    font-family: var(--primary-font);
    text-decoration: none;
    color: #000;
  	
`

const AboutSection = ({colour}) => {
    
    const data = useStaticQuery(graphql`
        query About {
            about: wpPage(slug: {eq: "about-me"}) {
                id
                link
                title
                slug
                content
            }

            email: wp {
                acfOptionsWebsiteGlobalSettings {
                    websiteGlobalSettings {
                        email
                    }
                }
            }
        }
    `);

    const emailAddress = data.email.acfOptionsWebsiteGlobalSettings.websiteGlobalSettings.email;
    const newEmail = emailAddress.replace('hello', `<span style="color: ${colour};">Hello</span>`);
    
    return (
        <AboutWrapper>
            <Email href="mailTo:emailAddress?subject=Enquiry From Website" dangerouslySetInnerHTML={{__html: newEmail}} />
            <AboutInner>
                <h2 className="h2 uppercase">{data.about.title}</h2>
                <AboutText dangerouslySetInnerHTML={{ __html: data.about.content }}/>
                <Link to="/contact" title="Find Out More" className="button button--purple-alt">Find Out More</Link>
            </AboutInner>
            <Wave fill='#ededed'
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
        </AboutWrapper>
    )
}

export default AboutSection
