import * as React from 'react'
import {useEffect} from "react";
import {Link, useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'

const ContactWrapper = styled.section `
	position: relative;
	padding: 15.1rem 0;

    @media(max-width: 1024px) {
        padding: 10rem 0;
    }
    
	@media(max-width: 640px) {
		padding: 3rem 0;
	}

    .blob {
	    height: auto;
        position: absolute;
    

		&--top {
			right: 0;
			top: 3rem;
		}

		&--bottom {
			left: 0;
			bottom: 0;
			
			@media(max-width: 1024px) {
				width: 20rem;
			}

			@media(max-width: 640px) {
				width: 15rem;
			}

			@media(max-width: 500px) {
				width: 10rem
			}
		}
    }
`;

const ContactContent = styled.div `
	max-width: 55.5rem;
	width: 100%;
	padding: 0 1.5rem;
	margin: 0 auto;
	text-align: center;
	position: relative;
	z-index: 2;

	@media(max-width: 640px) {
		max-width: 35rem;
	}
`
const Tagline = styled.p `
	text-transform: uppercase;
	font-size: 2.2rem;
	line-height: 3rem;
	font-weight: bold;
	margin-top: 0;
	margin-bottom: 1.2rem;
	color: var(--pink);
`
const Title = styled.h2 `
	font-weight: bold;
	text-transform: uppercase;
	font-size: 4.5rem;
	line-height: 5rem;
    background: -webkit-linear-gradient(0deg, var(--blue), var(--pink));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
	margin: 0;
`
const Text = styled.div `
	margin-bottom: 3.2rem;
	
	p {
		font-size: 2.2rem;
		line-height: 3rem;
		margin-bottom: 0;
		
		@media(max-width: 640px) {
			font-size: 1.8rem;
			line-height: 2.5rem;
		}
	}
`

const ContactSection = ({colour}) => {
	
	useEffect(() => {
		
		var svg = document.querySelector(".blob");
		
		var bbox = svg.getBBox();
		svg.setAttribute("width", bbox.width + "px");
		svg.setAttribute("height", bbox.height + "px");
		svg.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
		svg.style.opacity = 1;
	});
	
	return (
		<ContactWrapper>
			<svg className="blob blob--top" xmlns="http://www.w3.org/2000/svg" width="86.075" height="422.581" viewBox="0 0 86.075 422.581">
				<path data-name="Intersection 22" d="M44.575 279.884c-39-44.23-57.9-97.964-34.025-132.5C32.489 115.646 74.114 101.159 86.075 0v422.582c-3.243-37.299-13.077-110.459-41.5-142.698Z" fill={colour}/>
			</svg>

			<ContactContent>
				<Tagline>Whats next?</Tagline>
				<Title>Say Hello</Title>
				<Text>
					<p>
						Got a website idea or need a update to an existing site? I’m always interested in…
					</p>
				</Text>
				<a href="#" title="Get In Touch" className="button button--pink-alt">Get In Touch</a>
			</ContactContent>

			<svg className="blob blob--bottom" xmlns="http://www.w3.org/2000/svg" width="316.331" height="488.092" viewBox="0 0 316.331 488.092">
				<path data-name="Intersection 22" d="M0 488.092V0c4.523 24.121 13.9 60.775 32.566 93.881 19.32 34.264 55.655 63.385 86.008 74.551 79.043 29.075 104.539 66.971 104.539 114.7-1.679 53.9-50.1 82.063-32.1 131.783 8.24 22.772 36.262 66.719 104.753 70.6a542.807 542.807 0 0 0 20.571 2.58Z" fill={colour}/>
			</svg>
		</ContactWrapper>
	)
}

export default ContactSection
