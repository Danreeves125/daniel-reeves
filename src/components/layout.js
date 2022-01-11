import * as React from 'react'
import Header from "./header"
import Footer from "./footer"

const Layout = ({pageHeading, infoText, color, children}) => {
    
    return (

        <div className='site'>
            <Header colour={color}/>
            <h1>{pageHeading}</h1>
            <h2>{infoText}</h2>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout