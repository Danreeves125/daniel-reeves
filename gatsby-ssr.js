import React from "react"

import Layout from "./src/components/layout"
import getRandomColor from './src/components/randomColourPicker'


let siteColour = getRandomColor();

export const wrapPageElement = ({ element, props }) => {

    return (
        <Layout {...props} color={siteColour}>
            {element}
        </Layout>
    );
};