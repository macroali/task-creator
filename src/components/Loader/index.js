// React
import React from "react";
// React skelleton
import ContentLoader from "react-content-loader";

function Loader(props) {
    return (
        <ContentLoader 
            speed={2}
            width={500}
            height={110}
            viewBox="0 0 500 110"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="0" y="40" rx="0" ry="0" width="500" height="59" /> 
            <rect x="0" y="10" rx="0" ry="0" width="250" height="15" />
            <circle cx="460" cy="18" r="10" /> 
            <circle cx="490" cy="18" r="10" />
        </ContentLoader>
    );
}

export { Loader };