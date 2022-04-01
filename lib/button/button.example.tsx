import React from 'react';
import Button from './button';
import PreCode from '../precode/precode';
import {Cyber} from '../index';
import {marked} from 'marked';

const table = `
|Params|Describe|Type|Optional|Default|
|:----|:----|:----|:--------|:--|
|size|button size|String|small / medium / large| medium|
|modal|button modal|String|default / primary|default|
|round|button round|Boolean|true / false|false|
|speed|Animation speed (loop/s) |Number|-|2|
|animate|Active animate|Boolean|true / false|true|
|direction|Animation direction|string|all / row / column| all|
|angle|Animation angle|number|-|90|
|gradients|color gradient|object|-|-|
`

const example1 = `
import React from 'react'
import { Button , Cyber} from 'cyber-ui-react'

const gradients = [ {color: '#647eff', percent: 25}, {color: '#42d392', percent:100} ]

const demo = () => {
  <Button round animate={false} gradients={gradients} angle={315} modal='default'
   size="medium">button</Button>
  <Button round innerBackground='#ffffff' size="medium"><Cyber>button</Cyber></Button>
  <Button  animate={false} size="medium">button</Button>
}

ReactDOM.render(<Demo />, document.getElementById('root'));
`;

const example2 = `
import React from 'react'
import { Button } from 'cyber-ui-react'

const demo = () => {
  <Button size="small">button</Button>
  <Button size="medium">button</Button>
  <Button size="large">button</Button>
}

ReactDOM.render(<Demo />, document.getElementById('root'));
`;

const example3 = `
import React from 'react'
import { Button } from 'cyber-ui-react'

const demo = () => {
    <Button round speed={1} >button</Button>
    <Button round speed={3}>button</Button>
    <Button round direction='column' angle={0}>button</Button>
}

ReactDOM.render(<Demo />, document.getElementById('root'));
`;

const gradients = [
{color: '#647eff', percent: 25},
{color: '#42d392', percent:100},
]

function ButtonExample() {
  return (
    <>
      <PreCode codeHeight="340px" title="gradients" describe="custom gradient color and custom innerBackground" code={example1}>
        <div>
          <Button round animate={false} gradients={gradients} angle={315} modal='default' size="medium">button</Button>
          <Button round innerBackground='#ffffff' size="medium"><Cyber>button</Cyber></Button>
          <Button  animate={false} size="medium">button</Button>
        </div>
      </PreCode>
      <PreCode codeHeight="270px" title="size" describe="three size for button" code={example2}>
        <div>
          <Button size="small">button</Button>
          <Button size="medium">button</Button>
          <Button size="large">button</Button>
        </div>
      </PreCode>
      <PreCode codeHeight="280px" title="round & speed" describe="round button & custom animate speed and direction" code={example3}>
        <div>
          <Button round speed={1} >button</Button>
          <Button round speed={3}>button</Button>
          <Button round direction='column' angle={0}>button</Button>
        </div>
      </PreCode>

      <h2 style={{padding: '20px 0'}}>Attributes</h2>
      <div className='apiTable' dangerouslySetInnerHTML={{ __html: marked(table) }} />
    </>

  );
}

export default ButtonExample;
