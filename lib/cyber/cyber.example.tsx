import React from 'react';
import Cyber from './cyber';
import PreCode from '../precode/precode';

const code = `
import React from 'react'
import { Cyber } from 'cyber-ui-react'

const demo = () => {
  <Cyber><h2>Cyber is awesome</h2></Cyber>
}

ReactDOM.render(<Demo />, document.getElementById('root'));
`

const CyberExample:React.FunctionComponent =  (props) => {
  return (
    <>
      <PreCode codeHeight='300px' title='cyber' describe='Cyber style text , Beauty is justice!' code={code}>
        <Cyber><h2>Cyber is awesome</h2></Cyber>
      </PreCode>
    </>

  );
}

export default CyberExample
