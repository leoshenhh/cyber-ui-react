import React from 'react';
import Scroll from './scroll';
import PreCode from '../precode/precode';

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

const ScrollExample: React.FunctionComponent = () => {
  return (
    <div>
      <PreCode codeHeight='300px' title='cyber' describe='Cyber style text , Beauty is justice!' code={code}>
        <Scroll>
          <div><p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p><p>10</p><p>11</p><p>12</p>
            <p>13</p><p>14</p><p>15</p><p>16</p><p>17</p><p>18</p><p>19</p><p>20</p></div>
        </Scroll>
      </PreCode>
    </div>
  );
};

export default ScrollExample;
