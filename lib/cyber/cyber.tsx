import React, {HTMLAttributes} from 'react';
import './cyber.scss'
import {scopedClassMaker} from '../helper/class-names';

const sc = scopedClassMaker('cyber-span')

interface Props extends HTMLAttributes<HTMLElement>{
  animate?: Boolean,
  speed?: Number
}

const Cyber:React.FunctionComponent<Props> =  (props) => {
  return(
    <span
      className={sc([''])}
      style={{animation: `ani ${props.speed}s infinite linear`}}
    >
      {props.children}
    </span>
  )
}

Cyber.defaultProps = {
  speed: 50
}

export default Cyber
