import React, {useEffect, useRef, useState} from 'react';
import {scopedClassMaker} from '../helper/class-names';
import './button.scss';
import {Gradient, handleGradients} from '../cyber/cyber';
import styled from 'styled-components';

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

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  modal?: 'default' | 'primary';
  size?: 'small' | 'medium' | 'large';
  angle?: number;
  gradients?: Array<Gradient>;
  animate?: boolean;
  speed?: number;
  direction?: 'all' | 'row' | 'column';
  round?: boolean;
}

const sc = scopedClassMaker('cyber-button');

const Button: React.FunctionComponent<Props> = (props) => {
  const {className, angle, gradients,animate,speed, direction,modal,size, round , ...rest} = props;
  const [buttonAniID,setButtonAniID] = useState('');
  const [buttonWidth,setButtonWidth] = useState(0)
  const [buttonHeight,setButtonHeight] = useState(0)

  const buttonRef = useRef(null)

  useEffect(()=>{
    if(direction === 'all'){
      setButtonHeight(buttonRef.current.scrollHeight)
      setButtonWidth(buttonRef.current.scrollWidth )
    }else if(direction === 'row'){
      setButtonWidth(buttonRef.current.scrollWidth)
    }else if(direction === 'column'){
      setButtonHeight(buttonRef.current.scrollHeight)
    }

    setButtonAniID(`cyberAni${Math.floor(Math.random() * 1000)}`)
  },[])


  return (
    <button
      ref={buttonRef}
      className={sc(['', size],round ? 'round' : null)}
      style={{
        animation: animate ? `${buttonAniID} ${speed}s infinite linear` : '1s',
        backgroundImage: `linear-gradient(${angle}deg,${handleGradients(gradients)}`
      }}
      {...rest}
    >
      <ButtonAni
        className={sc(['inner',`inner-${size}`],round ? 'round' : null)}
        width={buttonWidth}
        height={buttonHeight}
        aniName={buttonAniID}
        style={{
          background: modal==='primary'?  'black' :'transparent'
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
  round: false
};

export default Button;
