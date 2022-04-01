import React, {useCallback, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {handleGradients} from '../cyber/cyber';
import {Gradient} from '../cyber/cyber';

const Br = styled('div')<{ textWidth: number; textHeight: number; aniName: string }>`
  height: 10px;
  @keyframes ${props => props.aniName} {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: ${props => props.textWidth}px ${props => props.textHeight}px;
    }
  }
`;


interface Props {
  animate?: boolean;
  speed?: number;
  gradients?: Array<Gradient>;
  angle?: number;
  direction?: 'all' | 'row' | 'column';
}

const CyberBr: React.FC<Props> = (props) => {
  const {animate, speed, angle, gradients , direction} = props;
  const [cyberBrID, setCyberBrID] = useState('');
  const cyberBrRef = useRef<HTMLDivElement>(null)

  const [textWidth, setTextWidth] = useState(0);
  const [textHeight, setTextHeight] = useState(0);


  useEffect(() => {
    setCyberBrID(`cyberBrAni${Math.floor(Math.random() * 1000)}`);
    if (direction === 'all') {
      setTextWidth(cyberBrRef.current.scrollWidth);
      setTextHeight(cyberBrRef.current.scrollHeight);
    } else if (direction === 'row') {
      setTextWidth(cyberBrRef.current.scrollWidth);
    } else if (direction === 'column') {
      setTextHeight(cyberBrRef.current.scrollHeight);
    }
  }, []);

  return (
    <Br
      ref={cyberBrRef}
      textWidth={textWidth} textHeight={textHeight} aniName={cyberBrID}
      style={{
        animation: animate ? `${cyberBrID} ${speed}s infinite linear` : '1s',
        backgroundImage: `linear-gradient(${angle}deg,${handleGradients(gradients)}`
      }}
    />
  );
};

CyberBr.defaultProps = {
  animate: true,
  speed: 1,
  angle: 90,
  gradients: [
    {color: '#EA5DAD', percent: 0},
    {color: '#C2A0FD', percent: 30},
    {color: '#3BF0E4', percent: 50},
    {color: '#C2A0FD', percent: 70},
    {color: '#EA5DAD', percent: 100}
  ],
  direction: 'all'
};

export default CyberBr;
