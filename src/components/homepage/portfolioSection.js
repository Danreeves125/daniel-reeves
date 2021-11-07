import * as React from 'react'
import {useEffect} from "react";
import {Link, useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import blobshape from "blobshape"
import Wave from "react-wavify"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const {path} = blobshape({
    size: 500,
    growth: 3,
    edges: 10,
    seed: null
});

const ProjectWrapper = styled.section `
    background-color: var(--light-grey);
  
  .blocks {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 1.5rem;
    grid-gap: 30px;
    
    .block {
        .image {
            width: 100%;
            display: block;
            margin-bottom: 1rem;
        
            img {
                width: 100%;
                display: block;
            }
        }
        
        .title {
        
        }
    }
  }
`;

const ProjectTitleWrapper = styled.div `
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    width: 100%;
    margin-bottom: 3.8rem;
  
    .button {
      margin-left: auto;
    }
`

const PortfolioSection = ({colour}) => {
    
    const portfolio = useStaticQuery(graphql`
        query recentPortfolio {
            allWpPortfolio(limit: 6) {
                edges {
                    node {
                        id
                        title
                        date(formatString: "D-M-Y")
                        uri
                        featuredImage {
                            node {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData(
                                            width: 420
                                            height: 337
                                            placeholder: BLURRED
                                            formats: [AUTO, WEBP, AVIF]
                                            transformOptions: {cropFocus: CENTER}
                                        )
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    
    const items = portfolio.allWpPortfolio.edges;
    
    return (
        <ProjectWrapper>
            <div className="container">
                <ProjectTitleWrapper>
                    <h2 className="uppercase no-m">Portfolio</h2>
                    <Link to="/portfolio" title="View All Portfolio" className="button button--blue">View All</Link>
                </ProjectTitleWrapper>
                    <Swiper
                        className="slider slider__recent"
                        spaceBetween={30}
                        slidesPerView={3}
                    >
                        {items.map(item => (
                            <SwiperSlide>
                                <div className="block">
                                    <div className="image">
                                        <GatsbyImage alt="" image={getImage(item.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData)}/>
                                    </div>
                                    <div className="title">{item.node.title}</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>
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
        </ProjectWrapper>
    )
}

export default PortfolioSection
