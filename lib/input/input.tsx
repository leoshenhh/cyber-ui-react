import React, {InputHTMLAttributes} from 'react';
import './input.scss'
import {scopedClassMaker} from '../helper/class-names';

interface Props extends InputHTMLAttributes<HTMLInputElement>{

}

const sc = scopedClassMaker('cyber-input');

const Input:React.FunctionComponent<Props> = (props) => {
  const {className,...rest} = props
  return (
    <input className={sc([''],className)}  {...rest} type="text"/>
  )
}

export default Input
