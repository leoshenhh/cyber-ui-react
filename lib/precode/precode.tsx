import React, {useState} from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/base16/dracula.css';
// import 'highlight.js/styles/atom-one-dark.css';
import './precode.scss';
import {marked} from 'marked';
import {scopedClassMaker} from '../helper/class-names';
import Icon from '../icon/icon';
import {Scroll} from '../index';

marked.setOptions({
  langPrefix: 'hljs language-',
  highlight: function (code) {
    return hljs.highlightAuto(code, ['html', 'typescript']).value;
  }
});
const sc = scopedClassMaker('cyber-pre')

interface Props extends React.HTMLAttributes<HTMLElement>{
  code: string;
  title: string;
  describe: string;
  codeHeight?: string;
}



const PreCode: React.FunctionComponent<Props> = (props) => {
  const [spread,setSpread] = useState(true)
  const MARKDOWN_TEXT = ` \`\`\` ${props.code} \`\`\` `;

  const onClick = () => {
    console.log(spread)
    setSpread(!spread)
  }
  return (
    <div className={sc([''])}>
      <div className={sc(['example'])}>{props.children}</div>
      <div className={sc(['describe'])}>
        <span className={sc(['describe-title'])}>{props.title}</span>
        {props.describe}
        <Icon style={{cursor: 'pointer'}} onClick={onClick} name='open'/>
      </div>
      <div style={{
        maxHeight: spread ? props.codeHeight : '0',
        overflow: 'hidden',
        transition: 'all .3s ease-in-out'
      }}>
        <Scroll wrapperHeight={props.codeHeight}>
          <div className={sc(['codeWrapper'])} style={{height: props.codeHeight}} dangerouslySetInnerHTML={{__html: marked(MARKDOWN_TEXT)}}/>
        </Scroll>

      </div>
    </div>
  )
};

PreCode.defaultProps = {
  codeHeight: '400px'
}

export default PreCode;
