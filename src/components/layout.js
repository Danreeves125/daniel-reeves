import * as React from 'react'
import Header from "./header"
import Footer from "./footer"

const Layout = ({pageHeading, infoText, color, children}) => {
    
    const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, {
            websiteColour: color,
        }
        ),
    );
    
    return (

        <div>
            <Header colour={color}/>
            <h1>{pageHeading}</h1>
            <h2>{infoText}</h2>
            {childrenWithProps}
            <Footer/>
        </div>
    )
}

export default Layout