import React, {HTMLAttributes, MouseEventHandler, UIEventHandler, useEffect, useRef, useState} from 'react';
import {scopedClassMaker} from '../helper/class-names';
import './scroll.scss';
import scrollbarWidth from './scroolbar-width';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  height?: string;
  autoHide?: boolean;
}
const sc = scopedClassMaker('cyber-scroll');

const BarAni = styled('div')<{barHeight: number;aniName: string}> `
  @keyframes ${props1 => props1.aniName} {
    0%{
      background-position: 0 0;
    }
    100%{
      background-position: 0 ${props2 => props2.barHeight}px;
    }
  }
`

const Scroll: React.FunctionComponent<Props> = (props) => {
  const [barAniID] = useState(`barAni${Math.floor(Math.random() * 1000)}`)
  const {height, autoHide, ...rest} = props;
  const [barHeight, setBarHeight] = useState(0);

  const [barTop, _setBarTop] = useState(0);
  const [barVisible, setBarVisible] = useState(!autoHide);

  const containerRef = useRef<HTMLDivElement>(null);

  const setBarTop = (number: number) => {
    if (number < 0) return;
    const scrollHeight = containerRef.current.scrollHeight;
    const viewHeight = containerRef.current.getBoundingClientRect().height;
    const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
    if (number > maxBarTop) return;
    _setBarTop(number);
  };

  const onScroll: UIEventHandler = (e) => {
    setBarVisible(true);
    const scrollHeight = containerRef.current.scrollHeight;
    const viewHeight = containerRef.current.getBoundingClientRect().height;
    const scrollTop = containerRef.current.scrollTop;
    setBarTop(scrollTop * viewHeight / scrollHeight);
  };

  useEffect(() => {
    const scrollHeight = containerRef.current.scrollHeight;
    const viewHeight = containerRef.current.getBoundingClientRect().height;
    setBarHeight(viewHeight * viewHeight / scrollHeight);

    if(scrollHeight === viewHeight){
      setBarVisible(false)
    }
  }, []);

  useEffect(() => {
    if (barVisible && autoHide) {
      setTimeout(() => {
        setBarVisible(false);
      }, 1000);
    }
  }, [barVisible]);

  const draggingRef = useRef(false);
  const firstYRef = useRef(0);
  const firstBarTop = useRef(0);

  const onMouseDownBar: MouseEventHandler = (e) => {
    firstYRef.current = e.clientY;
    draggingRef.current = true;
    firstBarTop.current = barTop;
  };
  const onMouseUpBar = () => {
    draggingRef.current = false;
  };
  const onMouseMoveBar = (e: MouseEvent) => {
    if (draggingRef.current) {
      e.preventDefault();
      const delta = e.clientY - firstYRef.current;
      const newBarTop = firstBarTop.current + delta;
      setBarTop(newBarTop);
      const scrollHeight = containerRef.current.scrollHeight;
      const viewHeight = containerRef.current.getBoundingClientRect().height;
      containerRef.current.scrollTop = newBarTop * scrollHeight / viewHeight;
    }
  };

  useEffect(() => {
    // 传入空数组 相当于mounted
    document.addEventListener('mouseup', onMouseUpBar);
    document.addEventListener('mousemove', onMouseMoveBar);
    return () => {
      document.removeEventListener('mouseup', onMouseUpBar);
      document.removeEventListener('mousemove', onMouseMoveBar);
    };
  }, []);
  return (
    <div
      className={sc([''])}
      style={{height: height,width: '100%'}}
      {...rest}
    >
      <BarAni barHeight={barHeight} aniName={barAniID}/>

      <div
        className={sc(['inner'])}
        style={{right: -scrollbarWidth(),paddingRight: scrollbarWidth()}}
        onScroll={onScroll}
        ref={containerRef}
      >
        {props.children}
      </div>
      {
        barVisible &&
          <div className={sc(['track'])}>
              <div
                  className={sc(['bar'])}
                  style={{
                    height: barHeight,
                    transform: `translateY(${barTop}px)`,
                    animation: `1s ${barAniID} infinite linear`
                  }}
                  onMouseDown={onMouseDownBar}
              />
          </div>
      }
    </div>
  );
};

Scroll.defaultProps = {
  height: '100vh',
  autoHide: false
};

export default Scroll;
