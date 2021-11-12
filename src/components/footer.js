import * as React from 'react'
import {useEffect} from "react";
import {Link, useStaticQuery, graphql} from 'gatsby'
import SocialMediaIcons from "./socialMediaIcons";
import styled from 'styled-components'
import MeAlt from "../images/dan-alt.svg"
import LogoName from "../images/logo.svg"

const SiteFooter = styled.footer `
    background-color: var(--jet);
    padding: 2.4rem;
  
    .container {
        width: 100%;
        max-width: 131rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        
        @media(max-width: 1024px) {
            flex-wrap: wrap;
        }
    
        @media(max-width: 640px) {
            flex-direction: column;
            align-items: center;
        }
    }
    
    .social-icons {
        @media(max-width: 1024px) {
            order: 3;
        }
    }
`;

const FooterLeft = styled.div `
    display: flex;
    align-items: center;
    
    @media(max-width: 1024px) {
        order: 2;
    }
    
    @media(max-width: 640px) {
        margin-bottom: 3rem;
    }
    
    @media(max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
  
    p {
        font-family: var(--primary);
        text-transform: uppercase;
        color: #fff;
        font-size: 1.5rem;
        margin: 0;
    }
`;

const FooterLogo = styled.a `
    display: flex;
    align-items: center;
    margin-right: 2rem;
    padding: 0 1.5rem;
    
    @media(max-width: 500px) {
        margin: 0 0 1rem 0;
    }
    
    .me {
        border: 0.2rem solid #fff;
        border-radius: 50%;
        margin-right: 1.5rem;
    }
    
    .name {
        width: 7.3rem;
        height: auto;
      
        path {
          fill: #fff;
        }
    }
`;

const FooterNavigation = styled.nav `
    display: flex;
    align-items: center;
    grid-gap: 2rem;
    
    @media(max-width: 1024px) {
        width: 100%;
        justify-content: center;
        order: 1;
        margin-bottom: 3rem;
    }
    
    @media(max-width: 500px) {
        flex-wrap: wrap;
    }
    
    a {
        font-family: var(--primary-font);
        text-transform: uppercase;
        font-size: 1.5rem;
        line-height: 1.8rem;
        text-decoration: none;
        color: #fff;
        text-align: center;
    }
`;

const Footer = () => {
    const getYear = new Date().getFullYear();
    
    const data = useStaticQuery(graphql`
        query FooterNavigation {
            wpMenu(slug: {eq: "footer"}) {
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
        <SiteFooter>
            <div className="container">
                <FooterLeft>
                    <FooterLogo>
                        <MeAlt className="me"/>
                        <LogoName className="name"/>
                    </FooterLogo>
                    <p>&copy;  Daniel Reeves {getYear}</p>
                </FooterLeft>
                <SocialMediaIcons />
    
                <FooterNavigation rol="Footer Navigation">
                    {items.map(item => (
                        <Link key={item.id} to={item.url.replace('http://', '/')} title={item.label}>
                            {item.label}
                        </Link>
                    ))}
                </FooterNavigation>
            </div>
        </SiteFooter>
    )
}

export default Footer