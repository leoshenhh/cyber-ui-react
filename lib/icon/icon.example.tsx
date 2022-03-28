import React from 'react';
import Icon from './icon';
import PreCode from '../precode/precode';

const code = `
import React from 'react'
import { Icon } from 'cyber-ui-react'

const demo = () => {
    <Icon name="alipay"/>
    <Icon name="QQ"/>
    <Icon name="wechat"/>
}

ReactDOM.render(<Demo />, document.getElementById('root'));
`

const IconExample: React.FunctionComponent = () => {
  return (
    <>
      <PreCode codeHeight='300px' title='icon' describe='simple way to use svg' code={code}>
        <Icon name="alipay"/>
        <Icon name="QQ"/>
        <Icon name="wechat"/>
      </PreCode>
    </>
  );
};

export default IconExample;
