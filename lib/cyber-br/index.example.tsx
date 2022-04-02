import React from 'react';
import CyberBr from './index';
import PreCode from '../precode/precode';
import {marked} from 'marked';

const example1 = `
import React from 'react'
import { CyberBr } from 'cyber-ui-react'

const demo = () => {
    <CyberBr/>
}

ReactDOM.render(<Demo />, document.getElementById('root'));
`;

const table = `
|Params|Describe|Type|Optional|Default|
|:----|:----|:----|:--------|:--|
|height|br height(px)|Number|-|2|
|round|br round|Boolean|true / false|true|
|textAlign|text position|String|left / center /right|left|
|speed|Animation speed (loop/s) |Number|-|2|
|animate|Active animate|Boolean|true / false|true|
|direction|Animation direction|string|all / row / column| all|
|angle|Animation angle|number|-|90|
|gradients|color gradient|object|-|-|
`;

const CyberBrExample = () => {
  return (
    <>
      <PreCode codeHeight="240px" title="height & round" describe="custom height and round" code={example1}>
        <CyberBr/>
        <CyberBr round={false} height={10}/>
        <CyberBr animate={false} height={10}/>
      </PreCode>
      <PreCode codeHeight="240px" title="text" describe="text on br , custom align" code={example1}>
        <div><CyberBr text="Cyber"/></div>
        <div><CyberBr text="Cyber" textAlign="center"/></div>
        <div><CyberBr text="Cyber" textAlign="right"/></div>

      </PreCode>
      <h2 style={{padding: '20px 0'}}>Attributes</h2>
      <div className="apiTable" dangerouslySetInnerHTML={{__html: marked(table)}}/>
    </>

  );
};

export default CyberBrExample;
