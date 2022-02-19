import * as React from 'react'
import {useEffect, useState} from "react";
import {Link, useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import blobshape from "blobshape"
import LogoBg from "../images/logo-blob.svg"
import LogoName from "../images/logo.svg";

const {path} = blobshape({
	size: 500,
	growth: 3,
	edges: 10,
	seed: null
});

const SiteHeader = styled.header `
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	position: relative;
`;

const Logo = styled.div `
  width: 60rem;
  position: relative;
  transition: ease 0.5s;

  @media(max-width: 1230px) {
	width: 45rem;
  }

  @media(max-width: 1024px) {
	width: 35rem;
  }

  @media(max-width: 375px) {
	width: 30rem;
  }

  .logo-bg {
	width: 100%;
	height: auto;
	margin-top: -0.2rem;
	transition:  0.5s ease;

	path {
		fill: ${props => props.theme.main}
	}
  }
  
  .name {
	width: 20rem;
	position: absolute;
	top: 4.6rem;
	left: 4.6rem;
	height: auto;
	transition: ease 0.5s;
	  
	path {
		fill: #fff;
	}

	@media(max-width: 1280px) {
	  left: 1.5rem;
	}

	@media(max-width: 1230px) {
		width: 17rem;
		top: 3rem;
	}

	@media(max-width: 1024px) {
	  width: 14rem;
	  top: 2rem;
	}

	@media(max-width: 375px) {
	  width: 12rem;
	}
  }
`;

const Navigation = styled.nav `
	margin: 0;
	list-style: none;
	display: flex;
	justify-content: flex-end;
	padding: 4.6rem 3rem 0 0;
	grid-gap: 4.6rem;
	flex: 1 0 0;
	transition: ease 0.5s;

	@media(max-width: 1280px) {
		padding-right: 1.5rem;
	}

	@media(max-width: 1230px) {
		padding-top: 3rem;
	}

	@media(max-width: 1200px) {
	  grid-gap: 2.5rem;
	}

	@media(max-width: 850px) {
		padding-top: 2.5rem;
	}

	@media(max-width: 1024px) {
		padding-top: 2rem;
	}

	@media (max-width: 795px)  {
		display: none;
	}
  
	a {
	  font-family: var(--primary-font);
	  font-size: 2.2rem;
	  line-height: 1.8rem;
	  color: var(--jet);
	  text-transform: uppercase;
	  font-weight: bold;
	  text-decoration: none;
	  transition: ease, 0.5s;
	  position: relative;
	  
	  svg {
		position: absolute;
		width: 5rem;
		height: auto;
		top: -2.2rem;
		right: -1.5rem;
		z-index: -1;
	  }
	}
`;

const Hamburger = styled.button `
	width: 6rem;
	height: 6rem;
	display: none;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 1000;
	padding: 0;
	margin: 1.5rem 1.5rem 0 0;
	box-shadow: none;
	border: 0;
	background-color: var(--pink);
	border-radius: 0.5rem;

	@media (max-width: 795px)  {
		display: flex;
	}

	.bars {
		height: 2.9rem;
		width: 3.7rem;
		position: relative;

		&:hover {
			cursor: pointer;
		}

		&--open {
			.bar {
				width: 3.7rem;
				transition: width 0.2s ease, transform 0.3s ease 0.1s, background 0.1s ease;

				&:nth-child(1) {
					width: 3.7rem;
					top: 50%;
					transform: translateY(-50%) rotate(315deg);
				}

				&:nth-child(2) {
					width: 3.7rem;
					transform: translateY(-50%) rotate(405deg);
				}

				&:nth-child(3) {
					width: 3.7rem;
					top: 50%;
					transform: translateY(-50%) rotate(405deg);
				}
			}
		}
	}

	.bar {
		background: #fff;
		transform: translateY(-50%) rotate(0deg);
		position: absolute;
		width: 100%;
		height: 0.4rem;
		border-radius: 0.4rem;
		transition: top 0.1s ease 0.3s, transform 0.3s ease, background 0.1s ease 0.3s;
		left: 0;

		&:nth-child(1) {
			top: 10%;
		}

		&:nth-child(2) {
			width: 3.1rem;
			top: 50%;
		}

		&:nth-child(3) {
			width: 2.5rem;
			top: 90%;
		}
	}
`



const Header = ({colour}) => {

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const data = useStaticQuery(graphql`
		query MainNavigation {
			wpMenu(slug: {eq: "header"}) {
				id
				slug
				name
				menuItems {
					nodes {
						id
						url
						label
					}
				}
			}
		}
	`);

	const items = data.wpMenu.menuItems.nodes;
	
	return (

		<SiteHeader>
			<Logo>
				<svg className="logo-bg" xmlns="http://www.w3.org/2000/svg" width="660" height="265.809" viewBox="0 0 660 265.809">
					<path d="M0,0H660V1.762C590.634,5.554,539.234,13.479,500.794,23.154,417.861,44.04,394.74,73.054,381.122,86.522c-22.735,22.492-40.84,152.891-129.913,168.424S128.53,238.188,79.82,231.912C34.667,226.1,4.21,260.719,0,265.809Z" fill={colour}/>
				</svg>
				<Link to="/" title="Daniel Reeves">
					<LogoName className="name"/>
				</Link>
			</Logo>
			<Navigation rol="Main Navigation">
				{items.map(item => (
					<Link key={item.id} to={item.url.replace('http://', '/')} title={item.label}>
						{item.label}
					</Link>
				))}
			</Navigation>
			<Hamburger
				navbarOpen={mobileMenuOpen}
				onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

			>
				<span className={mobileMenuOpen ? "bars bars--open" : "bars"}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</span>
			</Hamburger>
		</SiteHeader>
	)
}

export default Header
