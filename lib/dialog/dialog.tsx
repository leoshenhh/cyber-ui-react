import React, {Fragment, ReactElement, ReactFragment, ReactNode} from 'react';
import './dialog.scss';
import {Icon} from '../index';
import ReactDOM from 'react-dom';
import {scopedClassMaker} from '../helper/class-names';

interface Props {
  visible: Boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  maskClosable?: Boolean;
}

const sc = scopedClassMaker('cyber-dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
  const clickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };
  const clickMask: React.MouseEventHandler = (e) => {
    if (props.maskClosable) {
      props.onClose(e);
    }
  };
  return ReactDOM.createPortal(
    props.visible ?
      <Fragment>
        <div className={sc(['mask'])} onClick={clickMask}/>
        <div className={sc([''])}>
          <div className={sc(['close'])} onClick={clickClose}>
            <Icon name="close"/>
          </div>
          <header className={sc(['header'])}>提示</header>
          <main className={sc(['main'])}>
            {props.children}
          </main>
          {
            props.buttons && props.buttons.length > 0 &&
              <footer className={sc(['footer'])}>
                {props.buttons && props.buttons.map((button, index) =>
                  React.cloneElement(button, {key: index})
                )}
              </footer>
          }
        </div>
      </Fragment> :
      null,
    document.body
  );
};

const alert = (content: string) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component =
    <Dialog
      visible={true}
      buttons={[<button onClick={onClose}>ok</button>]}
      onClose={onClose}>
      {content}
    </Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

const confirm = (content: string, yse: () => void, no: () => void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (<Dialog visible={true} onClose={onNo} buttons={[
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ]}>xxx</Dialog>);
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

const modal = (content: ReactNode) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = <Dialog visible={true} onClose={onClose}>{content}</Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
  return onClose;
};
export {alert, confirm, modal};

Dialog.defaultProps = {
  maskClosable: true
};

export default Dialog;
