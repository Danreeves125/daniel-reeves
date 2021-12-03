import * as React from 'react'
import {useEffect} from "react";
import {Link, useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'

const ContactWrapper = styled.section `
	position: relative;
	padding: 15.1rem 0;

    .blob {
	    height: auto;
        position: absolute;
        left: 0;
        bottom: 0;
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
`
const Tagline = styled.p `
	text-transform: uppercase;
	font-size: 2.2rem;
	line-height: 3rem;
	font-weight: bold;
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
	}
`

const ContactSection = ({colour}) => {
	
	return (
		<ContactWrapper>
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
			
			<svg className="blob" xmlns="http://www.w3.org/2000/svg" width="318.424" height="505.901">
				<path data-name="Intersection 22" d="M0 505.9V0c2.611 19.7 11.179 68.734 35.446 111.773 19.32 34.265 55.655 63.386 86.008 74.551 79.043 29.075 104.539 66.972 104.539 114.7-1.679 53.9-50.1 82.063-32.1 131.784 8.24 22.772 36.262 66.718 104.753 70.6 6.708.974 13.329 1.8 19.783 2.5Z" fill="#ededed"/>
			</svg>
		</ContactWrapper>
	)
}

export default ContactSection
