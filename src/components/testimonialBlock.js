import * as React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import testimonialBg from './testimonials-bg.jpg';
import testimonialQuoteBg from './testimonial-quote-bg.svg';

const TestimonialItem = styled.div `
    width: 100%;
    display: block;
    box-shadow: 0 3px 11px rgba(0,0,0, 0.16);
    border-radius: 0.5rem;
    padding: 2.1rem;
    position: relative;

  .quote {
    background-image: url(${testimonialQuoteBg});
    width: 19.1rem;
    height: 10rem;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    
    @media(max-width: 430px) {
      width: 13.1rem;
      height: 7rem;
    }

    svg {
      margin-top: -2.7rem;
      margin-left: -5rem;

      @media(max-width: 430px) {
        width: 4rem;
        height: auto;
      }
    }

  }

  .logo {
    width: 100%;
    max-width: 9rem;
    height: 9rem;
    margin-left: auto;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 430px) {
      max-width: 7.5rem;
      height: 7.5rem;
    }
    
    img {
      width: 100%;
      height: auto;
    }
  }
`;

const Text = styled.div `
  margin-bottom: 2.2rem;
  text-align: center;

  p {
    font-size: 1.8rem;
    line-height: 2.3rem;
    color: #000;
    margin: 0;
  }
`

const Name = styled.div `
	color: #000;
	font-weight: bold;
	font-family: var(--primary-font);
	font-size: 2.5rem;
	line-height: 3rem;
    text-align: center;
`


const TestimonialBlock = ({data}) => {
    let testimonialImage =''
    if(data.node.featuredImage != null) {
        testimonialImage = getImage(data.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData)
    } else {
        testimonialImage = null
    }
    return (
        <TestimonialItem>
            <div className="quote">
                <svg xmlns="http://www.w3.org/2000/svg" width="53.692" height="43.155" viewBox="0 0 53.692 43.155">
                    <path fill="none" d="M0 0h53.692v43.155H0z" data-name="Group 16"/>
                    <path d="M.929 22.842v19.717h20.734V22.842H11.296s0-9.86 10.367-9.86v-9.86S.929 3.122.929 22.842Zm51.835-9.86v-9.86s-20.735 0-20.735 19.72v19.717h20.735V22.842H42.397s0-9.86 10.367-9.86Z" fill="#fff" data-name="Group 17"/>
                </svg>
            </div>
            <div className="logo">
                {testimonialImage != null ? <GatsbyImage alt="" image={testimonialImage}/> : ''}
            </div>
            <Text dangerouslySetInnerHTML={{ __html: data.node.content}}></Text>
            {data.node.testimonial.name !== null ? <Name>{data.node.testimonial.name}</Name> : ''}
        </TestimonialItem>
    );
}

export default TestimonialBlock;
