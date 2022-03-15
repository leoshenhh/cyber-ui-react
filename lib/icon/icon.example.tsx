import React from 'react';
import Icon from './icon';

import PreCode from '../precode/precode';
const code = require('!!raw-loader!./icon.pre').default;

const IconExample: React.FunctionComponent = () => {

  return (
    <>
      <div>
        <Icon name="alipay"/>
        <Icon name="QQ"/>
        <Icon name="wechat"/>
      </div>
      <PreCode>{code}</PreCode>
    </>

  );
};

export default IconExample;
