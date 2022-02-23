import React from "react"

import Layout from "./src/components/layout"
import getRandomColor from './src/components/randomColourPicker'

export const wrapPageElement = ({ element, props }) => {
    let getColour = getRandomColor();

    console.log(getColour.rgba);

    return (
        <Layout {...props} color={getColour.hex} rgbaColour={getColour.rgba}>
            {element}
        </Layout>
    );
};