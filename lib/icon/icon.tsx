import React from 'react';
import './icon.scss';
import classNames from '../helper/class-names';
import './importAll'

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className, name, ...restProps} = props;
    return (
        <svg
            className={classNames('icon', className)}
            {...restProps}
        >
            <use xlinkHref={`#${name}`}/>
        </svg>
    );
};

export default Icon;
