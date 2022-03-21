import React from 'react';
import {scopedClassMaker} from '../helper/class-names';
import './button.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large'
}
const sc = scopedClassMaker('cyber-button')

const Button: React.FunctionComponent<Props> = (props) => {

  const { className,...rest} = props
  return (
    <button className={sc(['',props.size])} {...rest}>
      {props.children}
    </button>
  );
};

export default Button;
