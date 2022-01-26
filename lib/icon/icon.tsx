const reqSvg = require.context ( '../icons', true, /\.svg$/ )
reqSvg.keys().map( path => reqSvg ( path ) )
import React from 'react';
import './icon.scss'
import classNames from '../helper/class-names'

interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string;
}

const Icon:React.FunctionComponent<IconProps> = (props)=> {
    const {className ,name, ...restProps} = props
    return (
            <svg
                className={classNames('icon',className)}
                 {...restProps}
            >
                <use xlinkHref={`#${name}`}/>
            </svg>
    );
}

export default Icon;
