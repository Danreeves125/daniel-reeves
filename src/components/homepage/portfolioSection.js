import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import PortfolioBlock from "../portfolioBlock";

import 'swiper/css';

const ProjectWrapper = styled.section `
    background-color: var(--light-grey);
    position: relative;
    padding: 6rem 0;
    
    @media(max-width: 1024px) {
      padding: 4rem 0;
    }

    @media(max-width: 640px) {
      padding: 3rem 0;
    }

    .swiper {
        width: 100%;
        padding: 0 1.5rem;
        overflow: hidden;
    }
`;

const ProjectTitleWrapper = styled.div `
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    width: 100%;
    margin-bottom: 3.8rem;

    @media(max-width: 640px) {
      flex-direction: column;
      
      h2 {
        margin-bottom: 1.5rem;
      }
    }
  
    .button {
      margin-left: auto;

      @media(max-width: 640px) {
        margin-left: 0;
      }
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
                        spaceBetween={15}
                        slidesPerView={1}
                        breakpoints={{
                            420: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                        }}
                    >
                        {items.map(item => (
                            <SwiperSlide key={item.id}>
                                <PortfolioBlock data={item}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>
        </ProjectWrapper>
    )
}

export default PortfolioSection
