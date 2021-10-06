import * as React from 'react'
import {useEffect} from "react";
import {Link, useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import blobshape from "blobshape"

const {path} = blobshape({size: 500, growth: 3, edges: 10, seed: null});

const AboutWrapper = styled.section `
    padding: 6rem 0 12rem 0;
`
const AboutInner = styled.div `
    max-width: 83rem;
    width: 100%;
    padding: 0 1.5rem;
    margin: auto;
`

const AboutText = styled.div `
  
  p {
    font-family: var(--body-font);
    font-size: 1.8rem;
    line-height: 2.5rem;
  }
`

const AboutSection = ({colour}) => {
    
    const data = useStaticQuery(graphql`
        query About {
            wpPage(slug: {eq: "about-me"}) {
                id
                link
                title
                slug
                content
            }
        }
    `);
    
    return (
        <AboutWrapper>
            <AboutInner>
                <h2 className="uppercase">{data.wpPage.title}</h2>
                <AboutText dangerouslySetInnerHTML={{ __html: data.wpPage.content }}/>
            </AboutInner>
        </AboutWrapper>
    )
}

export default AboutSection
