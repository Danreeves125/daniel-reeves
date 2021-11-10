import * as React from 'react'
import Header from "./header"
import Footer from "./footer"
import {page__title} from './layout.module.css'
import styled, {createGlobalStyle} from "styled-components"

export let getRandomColor = () => {
    let colourArray = ['#0067D2', '#665CD0', '#AE48BC', '#DC309B', '#F62971'];
    
    let randomColor = Math.floor(Math.random() * colourArray.length);
    
    return colourArray[randomColor];
}

// export let colour = getRandomColor();

const GlobalStyles = createGlobalStyle`
    :root {
      --body-font: 'Roboto';
      --primary-font: 'Roboto Condensed';
      
      --light-grey: #EDEDED;
      --grey: #EBE8E8;
      --med-grey: #DDDDDD;
      --dark-grey: #707070;
      --jet: #333333;
      
      --blue: #0067D2;
      --purple: #665CD0;
      --purple-alt: #AE48BC;
      --pink: #DC309B;
      --pink-alt: #F62971;
      
    }
    
    * {
        -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;
    }
    
    html {
        font-size: 10px;
        font-family: var(--body-font), Helvetica, Sans Serif, Arial;
        
    }
    
    body {
        margin: 0;
    }
    
    .container {
      max-width: 131rem;
      margin: 0 auto;
      width: 100%;
    }

    .button {
      display: inline-flex;
      font-family: var(--primary-font);
      font-size: 2.2rem;
      line-height: 2.2rem;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      text-decoration: none;
      padding: 1.2rem 3.4rem;
      border-radius: 2.5rem;
      transition: ease 0.5s;
      background-color: #fff;
      
      @media(max-width: 640px) {
        font-size: 2rem;
        line-height: 2rem;
        padding: 1rem 3rem;
      }
    }
    
    .button--gradient {
      background: linear-gradient(120deg, var(--blue), var(--purple-alt));
    }
    
    .button--purple-alt {
      border: 0.1rem solid var(--purple);
      color: var(--purple);
      
      &:hover {
          color: #fff;
          background-color: var(--purple);
      }
    }

    .button--blue {
      border: 0.1rem solid var(--blue);
      color: #fff;
      background-color: var(--blue);

      &:hover {
        color: var(--blue);
        background-color: #fff;
      }
    }
    
    h1, .h1,
    h2, .h2,
    h3, .h3,
    h4, .h4,
    h5, .h5,
    h6, .h6 {
        font-family: var(--primary-font);
        font-weight: bold;
        margin-top: 0;
    }

    .uppercase {
      text-transform: uppercase;
    }
    
    .no-m {
      margin: 0;
    }
    
    h1, .h1 {
      margin-bottom: 3rem;
      font-size: 4.5rem;
    }
    
    h2, .h2 {
      margin-bottom: 2.7rem;
      font-size: 4rem;
    }
    
     h3, .h3 {
      margin-bottom: 2.4rem;
      font-size: 3rem;
    }
    
    h4, .h4 {
      margin-bottom: 2.2rem;
      font-size: 2.8rem;
    }
    
    h5, .h5 {
      margin-bottom: 20rem;
      font-size: 2.6rem;
    }
    
    h5, .h5 {
      margin-bottom: 20rem;
      font-size: 2.6rem;
    }

    .wave,
    .wave-two {
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      z-index: 3;
      pointer-events: none;
    }
    .wave-two {
      opacity: 0.2;
      z-index: 2;
    }
`

const Layout = ({pageHeading, infoText, children}) => {
    
    return (
        
        <div>
            <GlobalStyles />
            <Header/>
            <h1 className={page__title}>{pageHeading}</h1>
            <h2>{infoText}</h2>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout