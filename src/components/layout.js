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
      background: linear-gradient(120deg, var(--blue), var(--purple-alt));
    }
    
    h1, .h1
    h2, .h2,
    h3, .h3,
    h4, .h4,
    h5, .h5,
    h6, .h6 {
        font-family: var(--primary-font);
        font-weight: bold;
    }

    .uppercase {
      text-transform: uppercase;
    }
    
    h1, .h1 {
      margin-bottom: 3rem;
      font-size: 4.5rem;
    }
    
    h2, .h2 {
      margin-bottom: 2.7rem;
      font-size: 4rem;
    }
`

const Container = styled.div `
    max-width: 1290px;
    margin: 0 auto;
`


const Layout = ({pageHeading, infoText, children}) => {
    
    return (
        
        <div>
            <GlobalStyles />
            <Header/>
            <Container>
                <h1 className={page__title}>{pageHeading}</h1>
                <h2>{infoText}</h2>
                {children}
            </Container>
            <Footer/>
        </div>
    )
}

export default Layout