import * as React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioItem = styled.a `
    width: 100%;
    display: block;
`;

const PortfolioImage = styled.div `
    width: 100%;
    border-radius: 1rem;
    margin-bottom: 1rem;
    overflow: hidden;

    img {
        width: 100%;
        display: block;
    }
`;

const PortfolioTitle = styled.h3 `
    font-weight: 400;
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 0;
    text-align: center;
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