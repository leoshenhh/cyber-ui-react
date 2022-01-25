import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon'

const fn:React.MouseEventHandler = (e) =>{
    console.log(e)
    console.log(e.target)
}
ReactDOM.render(<div>
    <Icon className='test1 test2' name="wechat" onClick={fn} onMouseEnter={()=>{console.log('enter')}} onMouseLeave={()=>{console.log('leave')}}/>
</div>, document.querySelector("#root"));
