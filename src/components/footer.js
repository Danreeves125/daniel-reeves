import * as React from 'react'
// import {Link, useStaticQuery, graphql} from 'gatsby'
// import {nav__link, nav__links, nav__linkTag} from "./layout.module.css";

const Footer = () => {
    const getYear = new Date().getFullYear();

    return (
        <footer>
            <p>&copy;  Daniel Reeves {getYear}</p>
        </footer>
    )
}

export default Footer