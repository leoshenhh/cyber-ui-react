import React from 'react';
import Cyber from './cyber';
import PreCode from '../precode/precode';
import {marked} from 'marked';
marked.setOptions({
  gfm:true
})
const code = `
import React from 'react'
import { Cyber } from 'cyber-ui-react'

const demo = () => {
  <Cyber><h2>Cyber is awesome</h2></Cyber>
}

ReactDOM.render(<Demo />, document.getElementById('root'));
`

const table = `
|Params|Describe|Type|Optional|Default|
|:----|:----|:----|:--------|:--|
|speed|Animation speed (loop/s) |Number|-|2|
|animate|Active animate|Boolean|true / false|true|
|direction|Animation direction|string|all / row / column| all|
|angle|Animation angle|number|-|90|
|gradients|color gradient|object|-|-|
`

const CyberExample:React.FunctionComponent =  (props) => {
  return (
    <>
      <PreCode codeHeight='240px' title='cyber' describe='Cyber style text , Beauty is justice!' code={code}>
        <Cyber><h2>Cyber is awesome</h2></Cyber>
      </PreCode>
      <h2 style={{padding: '20px 0'}}>Attributes</h2>
      <div className='apiTable' dangerouslySetInnerHTML={{ __html: marked(table) }} />

    </>

  );
}

export default CyberExample
