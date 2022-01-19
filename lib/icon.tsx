import React from 'react';
import './icon.scss'
const reqSvg = require.context ( '../icons', true, /\.svg$/ )
reqSvg.keys().map( path => reqSvg ( path ) )


interface IconProps {
    name: string;
    onClick: () => void;
}

const Icon:React.FunctionComponent<IconProps> = (props)=> {
    return (
            <svg className="icon" onClick={props.onClick}>
                <use xlinkHref={'#' + props.name}/>
            </svg>
    );
}

export default Icon;
