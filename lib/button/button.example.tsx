import React from 'react';
import Button from './button';
import PreCode from '../precode/precode';
import {Cyber} from '../index';

const code = `
import React from 'react'
import { Button } from 'cyber-ui-react'

const demo = () => {
          <Button size="small">button</Button>
          <Button size="medium">button</Button>
          <Button size="large">button</Button>
}

ReactDOM.render(<Demo />, document.getElementById('root'));
`;

function ButtonExample() {
  return (
    <>
      <PreCode codeHeight="270px" title="button" describe="cyber style button" code={code}>
        <div>
          <Button size="small"><Cyber>Button</Cyber></Button>
          <Button size="medium">button</Button>
          <Button size="large">button</Button>
        </div>

      </PreCode>
    </>

  );
}

export default ButtonExample;
