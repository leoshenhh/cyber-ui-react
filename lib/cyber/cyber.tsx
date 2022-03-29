import React, {HTMLAttributes, useEffect, useRef, useState} from 'react';
import './cyber.scss';
import styled from 'styled-components';
import {scopedClassMaker} from '../helper/class-names';

const sc = scopedClassMaker('cyber-span');

const CyberAni = styled('div')<{ textWidth: number; textHeight: number; aniName: string }>`
  @keyframes ${props => props.aniName} {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: ${props => props.textWidth}px ${props => props.textHeight}px;
    }
  }
`;

interface Gradient {color: string;percent:number}

interface Props extends HTMLAttributes<HTMLElement> {
  animate?: Boolean;
  speed?: Number;
  direction?: 'all' | 'row' | 'column';
  angle?: number;
  gradients?: Array<Gradient>
}

const handleGradients = (gradients: Array<Gradient>) :string => {
  const arr = gradients.map(item => {
    return `${item.color} ${item.percent}%`
  })
  return arr.join(',')
}

const Cyber: React.FunctionComponent<Props> = (props) => {
  const {direction,animate,speed,angle , gradients} = props;
  const [textWidth, setTextWidth] = useState(0);
  const [textHeight, setTextHeight] = useState(0);
  const cyberRef = useRef<HTMLSpanElement>(null);
  const [cyberAniID] = useState(`cyberAni${Math.floor(Math.random() * 1000)}`);

  useEffect(() => {
    if (direction === 'all') {
      setTextWidth(cyberRef.current.scrollWidth);
      setTextHeight(cyberRef.current.scrollHeight);
    } else if (direction === 'row') {
      setTextWidth(cyberRef.current.scrollWidth);
    } else if (direction === 'column') {
      setTextHeight(cyberRef.current.scrollHeight);
    }
  }, []);

  return (
    <span
      ref={cyberRef}
      className={sc([''])}
      style={{
        animation: animate ? `${cyberAniID} ${speed}s infinite linear` : '1s',
        backgroundImage: `linear-gradient(${angle}deg,${handleGradients(gradients)}`
      }}
    >
      <CyberAni textWidth={textWidth} textHeight={textHeight} aniName={cyberAniID}/>
      {props.children}
    </span>
  );
};

Cyber.defaultProps = {
  speed: 2,
  animate: true,
  direction: 'all',
  angle: 90,
  gradients:[
    {color: '#EA5DAD',percent: 0},
    {color: '#C2A0FD',percent: 30},
    {color: '#3BF0E4',percent: 50},
    {color: '#C2A0FD',percent: 70},
    {color: '#EA5DAD',percent: 100}
  ]
};

export default Cyber;
