import * as React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioItem = styled.a `
    width: 100%;
    display: block;
  
    
    &:hover {
        .gatsby-image-wrapper {
            transform: scale(1.1);
        }

      h3 {
        color: var(--pink);
      }
    }
`;

const PortfolioImage = styled.div `
    width: 100%;
    border-radius: 1rem;
    margin-bottom: 1rem;
    overflow: hidden;
    position: relative;
  
    .gatsby-image-wrapper {
        width: 100%;
        display: block;
        transition: ease 0.5s;
        transform-origin: center;
    }
`;

const PortfolioTitle = styled.h3 `
    font-weight: 400;
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 0;
    text-align: center;
    transition: ease 0.5s;
`;


const PortfolioBlock = ({data}) => {
    return (
        <PortfolioItem>
            <PortfolioImage>
                <GatsbyImage alt="" image={getImage(data.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData)}/>
            </PortfolioImage>
            <PortfolioTitle>{data.node.title}</PortfolioTitle>
        </PortfolioItem>
    );
}

export default PortfolioBlock;