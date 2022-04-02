import React, {HTMLAttributes, useEffect, useRef, useState} from 'react';
import './cyber.scss';
import styled from 'styled-components';
import {scopedClassMaker} from '../helper/class-names';
import useAni, {AniProps,handleGradients} from '../hooks/useAni';

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

interface Props extends AniProps,HTMLAttributes<HTMLElement> {}

const Cyber: React.FunctionComponent<Props> = (props) => {
  const {direction,animate,speed,angle , gradients} = props;
  const {aniRef, aniID, aniWidth, aniHeight} = useAni(direction);
  return (
    <span
      ref={aniRef}
      className={sc([''])}
      style={{
        animation: animate ? `${aniID} ${speed}s infinite linear` : '1s',
        backgroundImage: `linear-gradient(${angle}deg,${handleGradients(gradients)}`
      }}
    >
      <CyberAni textWidth={aniWidth} textHeight={aniHeight} aniName={aniID}/>
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
