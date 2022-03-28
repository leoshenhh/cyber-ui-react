import React from 'react';
import Icon from './icon';

import PreCode from '../precode/precode';
const code = require('!!raw-loader!./icon.pre').default;

const IconExample: React.FunctionComponent = () => {
  return (
    <>
      <PreCode title='icon' describe='simple way to use svg' code={code}>
        <Icon name="alipay"/>
        <Icon name="QQ"/>
        <Icon name="wechat"/>
      </PreCode>
    </>
  );
};

export default IconExample;
