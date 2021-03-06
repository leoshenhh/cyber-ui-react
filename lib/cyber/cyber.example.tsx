import React from 'react';
import Cyber from './cyber';
import PreCode from '../precode/precode';
import {marked} from 'marked';
marked.setOptions({
  gfm:true
})
const example1 = `
import React from 'react'
import { Cyber } from 'cyber-ui-react'

const demo = () => {
    <Cyber speed={4}><h2>CyberUI is awesome</h2></Cyber>
}

ReactDOM.render(<Demo />, document.getElementById('root'));
`

const example2 = `
import React from 'react'
import { Cyber } from 'cyber-ui-react'

const demo = () => {
  <Cyber><h2>Cyber is awesome</h2></Cyber>
}

ReactDOM.render(<Demo />, document.getElementById('root'));
`

const example3 = `
import React from 'react'
import { Cyber } from 'cyber-ui-react'

const demo = () => {
    <Cyber gradients={gradients} animate={false} ><h2>CyberUI is awesome</h2></Cyber>
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

const gradients = [ {color: '#647eff', percent: 25}, {color: '#42d392', percent:100} ]

const CyberExample:React.FunctionComponent =  (props) => {
  return (
    <>
      <PreCode codeHeight='240px' title='speed' describe='custom animate speed' code={example1}>
        <Cyber speed={4}><h2>CyberUI is awesome</h2></Cyber>
      </PreCode>

      <PreCode codeHeight='240px' title='angle & direction' describe='custom direction need custom angle' code={example2}>
        <Cyber direction={'column'} angle={0} ><h2>CyberUI is awesome</h2></Cyber>
      </PreCode>

      <PreCode codeHeight='240px' title='gradients' describe='custom gradient color' code={example3}>
        <Cyber gradients={gradients} animate={false} ><h2>CyberUI is awesome</h2></Cyber>
      </PreCode>
      <h2 style={{padding: '20px 0'}}>Attributes</h2>
      <div className='apiTable' dangerouslySetInnerHTML={{ __html: marked(table) }} />
    </>

  );
}

export default CyberExample
