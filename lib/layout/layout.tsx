import React, {ReactElement} from 'react';
import './layout.scss';
import Aside from './aside';
import { scopedClassMaker } from '../helper/class-names';

const sc = scopedClassMaker('cyber-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: Array<ReactElement>;
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  const hasAside = props.children.some((child: ReactElement) => child.type === Aside);
  return (
    <div className={sc(['', hasAside && 'hasAside'], className,)} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;
