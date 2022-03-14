import React from 'react';
import {scopedClassMaker} from '../helper/class-names';

const sc = scopedClassMaker('cyber-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;

  return (
    <div
      className={sc(['header'],className)}
      {...rest}
    >
      {props.children}
    </div>
  );
};

export default Header;
