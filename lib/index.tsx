import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

const fn = () =>{
    console.log('111')
}
ReactDOM.render(<div>
    <Icon name="wechat" onClick={fn}/>
</div>, document.querySelector("#root"));
