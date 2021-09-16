import * as React from 'react'
import {useEffect} from "react";
import {Link, useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import blobshape from "blobshape"
import getRandomColour from './layout';
import LogoBg from "../images/logo-blob.svg"
import LogoName from "../images/logo.svg";

const {path} = blobshape({size: 500, growth: 3, edges: 10, seed: null});

const SiteHeader = styled.header `
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
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
    }
  }
  
  .name {
    width: 20rem;
    position: absolute;
    top: 4.6rem;
    left: 4.6rem;
    height: auto;
    transition: ease 0.5s;

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
    
    @media(max-width: 750px) {
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


const Header = () => {
    useEffect(() => {
        
        var svg = document.getElementsByTagName("svg")[0];
        var bbox = svg.getBBox();
        svg.setAttribute("width", bbox.width + "px");
        svg.setAttribute("height", bbox.height + "px");
        svg.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
        svg.style.opacity = 1;
    });
    
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
    
    let colour = getRandomColour;
    
    
    return (
        <SiteHeader>
            <Logo>
                <LogoBg className="logo-bg"
                        opacity="0"
                />
                <Link to="/" title="Daniel Reeves">
                    <LogoName className="name"/>
                </Link>
            </Logo>
            <Navigation>
                {items.map(item => (
                    <Link key={item.id} to={item.url.replace('http://', '/')} title={item.label}>
                        {item.label}
                    </Link>
                ))}
            </Navigation>
        </SiteHeader>
    )
}

export default Header
