import getRandomColor from "./src/components/randomColourPicker";
import Layout from "./src/components/layout";
import React from "react";

export const wrapPageElement = ({ element, props }) => {
    let getColour = getRandomColor();

    console.log(getColour.rgba);

    return (
        <Layout {...props} color={getColour.hex} rgbaColour={getColour.rgba}>
            {element}
        </Layout>
    );
};