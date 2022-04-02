import React, {useCallback, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

import useAni, {AniProps,handleGradients} from '../hooks/useAni';


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


interface Props extends AniProps{}


const CyberBr: React.FC<Props> = (props) => {
  const {animate, speed, angle, gradients, direction} = props;
  const {aniRef, aniID, aniWidth, aniHeight} = useAni(direction);
  return (
    <Br
      ref={aniRef}
      textWidth={aniWidth} textHeight={aniHeight} aniName={aniID}
      style={{
        animation: animate ? `${aniID} ${speed}s infinite linear` : '1s',
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
