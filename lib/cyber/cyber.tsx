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
      style={{animation: props.animate ? `ani ${props.speed}s infinite linear` :  '1s'
      }}
    >
      {props.children}
    </span>
  )
}

Cyber.defaultProps = {
  speed: 2,
  animate: true
}

export default Cyber
