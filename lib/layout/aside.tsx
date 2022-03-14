import React from 'react';
import { scopedClassMaker } from '../helper/class-names';

const sc = scopedClassMaker('cyber-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Aside: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc(['aside'], className)} {...rest}>
      {props.children}
    </div>
  );
};

export default Aside;
