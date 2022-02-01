import React from "react"

import Layout from "./src/components/layout"
import getRandomColor from './src/components/randomColourPicker'


export const wrapPageElement = ({ element, props }) => {

    return (
        <Layout {...props} color={getRandomColor()}>
            {element}
        </Layout>
    );
};