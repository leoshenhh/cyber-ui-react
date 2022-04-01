import React, {
  HTMLAttributes,
  MouseEventHandler,
  UIEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import {scopedClassMaker} from '../helper/class-names';
import './scroll.scss';
import scrollbarWidth from './scroolbar-width';
import styled from 'styled-components';
import {Gradient,handleGradients} from '../cyber/cyber';



interface Props extends HTMLAttributes<HTMLDivElement> {
  wrapperHeight?: string;
  autoHide?: boolean;
  angle?: number;
  direction?: 'all' | 'row' | 'column';
  speed?: number;
  gradients?: Array<Gradient>;
  animate?: boolean
}
const sc = scopedClassMaker('cyber-scroll');

const BarAni = styled('div')<{aniWidth: number;aniHeight: number;aniName: string}> `
  @keyframes ${props => props.aniName} {
    0%{
      background-position: 0 0;
    }
    100%{
      background-position: ${props => props.aniWidth}px ${props => props.aniHeight}px;
    }
  }
`

const DEFAULT_OPTIONS = {
  config: { childList: true, subtree: true },
};

function useMutationObservable(targetEl:HTMLElement, cb:()=>void, options = DEFAULT_OPTIONS) {
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const obs = new MutationObserver(cb);
    setObserver(obs);
  }, [cb, options, setObserver]);

  useEffect(() => {
    if (!observer) return;
    const { config } = options;
    observer.observe(targetEl, config);
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [observer, targetEl, options]);
}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const {wrapperHeight, autoHide,angle, direction, speed,gradients,animate,...rest} = props;

  const [barAniID] = useState(`barAni${Math.floor(Math.random() * 1000)}`)

  const [barHeight, setBarHeight] = useState(0);

  const [aniHeight,setAniHeight] = useState(0)
  const [aniWidth,setAniWidth] = useState(0)

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
    const scrollHeight = containerRef.current.scrollHeight;
    const viewHeight = containerRef.current.getBoundingClientRect().height;
    if(scrollHeight <= viewHeight) return
    setBarVisible(true);
    const scrollTop = containerRef.current.scrollTop;
    setBarTop(scrollTop * viewHeight / scrollHeight);
  };

  const checkInnerHeight = useCallback(
    () => {
      const scrollHeight = containerRef.current.scrollHeight;
      const viewHeight = containerRef.current.getBoundingClientRect().height;
      if(scrollHeight <= viewHeight){
        setBarVisible(false)
      }else{
        setBarVisible(true)
        setBarHeight(viewHeight * viewHeight / scrollHeight);
        _setBarTop(0);
      }
    },
    []
  );
  useMutationObservable(containerRef.current,checkInnerHeight)
  useEffect(() => {
    checkInnerHeight()
  }, []);
  useEffect(()=>{
    if(direction === 'all'){
      setAniHeight(barHeight)
      setAniWidth(scrollbarWidth())
    }else if(direction === 'row'){
      setAniWidth(scrollbarWidth())
    }else if(direction === 'column'){
      setAniHeight(barHeight)
    }

  },[barHeight])

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
      style={{height: wrapperHeight,width: '100%'}}
    >
      <BarAni aniWidth={aniWidth} aniHeight={aniHeight} aniName={barAniID}/>

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
                    animation: animate?`1s ${barAniID} infinite linear`:'1s',
                    backgroundImage: `linear-gradient(${angle}deg,${handleGradients(gradients)})`
                  }}
                  onMouseDown={onMouseDownBar}
              />
          </div>
      }
    </div>
  );
};

Scroll.defaultProps = {
  autoHide: false,
  wrapperHeight: '100px',
  angle: 0,
  direction: 'column',
  speed: 1,
  gradients:[
    {color: '#EA5DAD',percent: 0},
    {color: '#C2A0FD',percent: 30},
    {color: '#3BF0E4',percent: 50},
    {color: '#C2A0FD',percent: 70},
    {color: '#EA5DAD',percent: 100}
  ],
  animate: true
};

export default Scroll;
