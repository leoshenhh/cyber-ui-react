import React from 'react';
const reqSvg = require.context ( '../icons', true, /\.svg$/ )
reqSvg.keys().map( path => reqSvg ( path ) )


interface IconProps {
    name: string;
}

const Icon:React.FunctionComponent<IconProps> = (props)=> {
    return (
        <span>
            <svg>
                <use xlinkHref={'#' + props.name}/>
            </svg>
        </span>
    );
}

export default Icon;
