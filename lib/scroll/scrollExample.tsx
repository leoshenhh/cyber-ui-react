import React from 'react';
import Scroll from './scroll';
import PreCode from '../precode/precode';
import {marked} from 'marked';

const code = `
import React from 'react'
import { Scroll } from 'cyber-ui-react'

const demo = () => {
  <Scroll>
    <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p><p>10</p><p>11</p><p>12</p>
    <p>13</p><p>14</p><p>15</p><p>16</p><p>17</p><p>18</p><p>19</p><p>20</p>
  </Scroll>
}

ReactDOM.render(<Demo />, document.getElementById('root'));
`
const table = `
|Params|Describe|Type|Optional|Default|
|:----|:----|:----|:--------|:--|
|wrapperHeight|scroll area height |string|px / % / vh|100px|
|autoHide|auto hide scrollbar|Boolean|true / false|false|
|speed|Animation speed (loop/s) |Number|-|2|
|animate|Active animate|Boolean|true / false|true|
|direction|Animation direction|String|all / row / column| all|
|angle|Animation angle|Number|-|90|
|gradients|color gradient|Array|[{color:#ffffff,percent:10}]|-|
`


const ScrollExample: React.FunctionComponent = () => {
  return (
    <div>
      <PreCode codeHeight='300px' title='Scroll' describe='Cyber style text , Beauty is justice!' code={code}>
        <Scroll wrapperHeight='300px'>
          <div><p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p><p>10</p><p>11</p><p>12</p>
            <p>13</p><p>14</p><p>15</p><p>16</p><p>17</p><p>18</p><p>19</p><p>20</p></div>
        </Scroll>
      </PreCode>
      <h2 style={{padding: '20px 0'}}>Attributes</h2>
      <div className='apiTable' dangerouslySetInnerHTML={{ __html: marked(table) }} />
    </div>
  );
};

export default ScrollExample;
