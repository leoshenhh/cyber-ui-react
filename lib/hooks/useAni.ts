import {useEffect, useRef, useState} from 'react';

export interface Gradient {color: string;percent:number}
export interface AniProps {
  animate?: boolean;
  speed?: number;
  gradients?: Array<Gradient>;
  angle?: number;
  direction?: 'all' | 'row' | 'column';
}

export const handleGradients = (gradients: Array<Gradient>) :string => {
  const arr = gradients.map(item => {
    return `${item.color} ${item.percent}%`
  })
  return arr.join(',')
}

const useAni = (direction:'all' | 'row' | 'column') => {
  const aniRef = useRef(null);
  const [aniID, setAniID] = useState('');
  const [aniWidth, setAniWidth] = useState(0);
  const [aniHeight, setAniHeight] = useState(0);

  useEffect(() => {
    setAniID(`cyberBrAni${Math.floor(Math.random() * 1000)}`);
    if (direction === 'all') {
      setAniWidth(aniRef.current.scrollWidth);
      setAniHeight(aniRef.current.scrollHeight);
    } else if (direction === 'row') {
      setAniWidth(aniRef.current.scrollWidth);
    } else if (direction === 'column') {
      setAniHeight(aniRef.current.scrollHeight);
    }
  }, []);
  return {
    aniRef,
    aniID,
    aniWidth,
    aniHeight
  };
};

export default useAni
