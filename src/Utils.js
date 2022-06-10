import React from 'react';
import * as MaterialUI from '@mui/material';

const Utils = {
    CreateComponentFromJson: function (json) {
        if (json) {
            let children = [];

            // If the node has children render them too
            if (json.children?.length > 0) {
                json.children.forEach((child) => {
                    if (typeof (child) === "string") {
                        if (typeof (children[children.length - 1]) === "string") {
                            children.push(<br/>)
                        }
                        children.push(child);
                    } else {
                        children.push(this.CreateComponentFromJson(child));
                    }
                });
            }
            // Need to clone 
            const properties = json.properties || {};

            // To satisfy React warning that children should have a key
            properties.key = Date.now() + '.' + Math.random(1000);

            return React.createElement(
                MaterialUI[json.component],
                properties,
                children
            );
        }
    }
};

export default Utils
