import React, {useEffect, useRef, useState} from 'react';
import './button.scss';
import useAni, {AniProps, handleGradients} from '../hooks/useAni';
import styled from 'styled-components';
import {scopedClassMaker} from '../helper/class-names';

const sc = scopedClassMaker('cyber-button');

const ButtonAni = styled('span')<{ width: number; height: number; aniName: string }>`
  @keyframes ${props => props.aniName} {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: ${props => props.width}px ${props => props.height}px;
    }
  }
`;

interface Props extends AniProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  modal?: 'default' | 'primary';
  size?: 'small' | 'medium' | 'large';
  round?: boolean;
  innerBackground?: string;
}


const Button: React.FunctionComponent<Props> = (props) => {
  const {
    className, angle, gradients, animate, speed,
    direction, modal, size, round, innerBackground, ...rest
  } = props;
  const {aniRef, aniID, aniWidth, aniHeight} = useAni(direction);



  return (
    <button
      ref={aniRef}
      className={sc(['', size], round ? 'round' : null)}
      style={{
        animation: animate ? `${aniID} ${speed}s infinite linear` : '1s',
        backgroundImage: `linear-gradient(${angle}deg,${handleGradients(gradients)}`
      }}
      {...rest}
    >
      <ButtonAni
        className={sc(['inner', `inner-${size}`], round ? 'round' : null)}
        width={aniWidth}
        height={aniHeight}
        aniName={aniID}
        style={{
          background: modal === 'primary' ? innerBackground : 'transparent'
        }}
      >
        {props.children}
      </ButtonAni>

    </button>
  );
};

Button.defaultProps = {
  animate: true,
  size: 'medium',
  angle: 90,
  gradients: [
    {color: '#EA5DAD', percent: 0},
    {color: '#C2A0FD', percent: 30},
    {color: '#3BF0E4', percent: 50},
    {color: '#C2A0FD', percent: 70},
    {color: '#EA5DAD', percent: 100},
  ],
  speed: 1,
  direction: 'row',
  modal: 'primary',
  round: false,
  innerBackground: 'black'
};

export default Button;
