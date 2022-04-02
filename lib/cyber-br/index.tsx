import React, {useCallback, useEffect, useRef, useState} from 'react';
import styled, {css} from 'styled-components';

import useAni, {AniProps, handleGradients} from '../hooks/useAni';
import {Cyber} from '../index';


const Br = styled('div')<{ textWidth: number; textHeight: number; aniName: string }>`
  position: relative;
  @keyframes ${props => props.aniName} {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: ${props => props.textWidth}px ${props => props.textHeight}px;
    }
  }
`;

const Text = styled('span')<{ align: string ;aniHeight:number}>`
  position: absolute;
  padding: 0 5px;
  ${props => {
    if (props.align === 'center'){
      return css`
        left: 50%;
        transform: translate(-50%,calc(-50% - ${props.aniHeight}px));
      `
    }
    if (props.align === 'left') {
      return css`
        left: 30px;
        transform: translateY(calc(-50% - ${props.aniHeight}px));
      `
    }
    if (props.align === 'right'){
      return css`
        right: 30px;
        transform: translateY(calc(-50% - ${props.aniHeight}px));
      `
    }
  }}
`;

interface Props extends AniProps {
  round?: boolean;
  height?: number;
  text?: string;
  textAlign?: 'left' | 'right' | 'center';
}

const CyberBr: React.FC<Props> = (props) => {
  const {animate, speed, angle, gradients, direction, round, height, text, textAlign} = props;
  const {aniRef, aniID, aniWidth, aniHeight} = useAni(direction);
  return (
    <div style={{position: 'relative',width: '100%',padding: '10px 0'}}>
      <Br
        ref={aniRef}
        textWidth={aniWidth} textHeight={aniHeight} aniName={aniID}
        style={{
          animation: animate ? `${aniID} ${speed}s infinite linear` : '1s',
          backgroundImage: `linear-gradient(${angle}deg,${handleGradients(gradients)}`,
          borderRadius: round ? '100px' : '0',
          height: height
        }}
      >
      </Br>
      <Text
        align={textAlign}
        aniHeight={aniHeight}
      >{ text ? <Cyber>{text}</Cyber> : null}</Text>
    </div>

  );
};

CyberBr.defaultProps = {
  animate: true,
  speed: 2,
  angle: 90,
  gradients: [
    {color: '#EA5DAD', percent: 0},
    {color: '#C2A0FD', percent: 30},
    {color: '#3BF0E4', percent: 50},
    {color: '#C2A0FD', percent: 70},
    {color: '#EA5DAD', percent: 100}
  ],
  direction: 'all',
  round: true,
  height: 2,
  textAlign: 'left'
};

export default CyberBr;
