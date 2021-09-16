import * as React from 'react'

const Footer = () => {
    const getYear = new Date().getFullYear();

    return (
        <footer>
            <p>&copy;  Daniel Reeves {getYear}</p>
        </footer>
    )
}

export default Footer