import React from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/base16/dracula.css';
import './precode.scss'


const PreCode: React.FunctionComponent = (props) => {
  React.useEffect(() => {
    document.querySelectorAll('pre').forEach(block => {
      try {hljs.highlightElement(block);} catch (e) {console.log(e);}
    });
  });
  return (
    <>
      <div className="container">
        <pre className="language-tsx">
          <code>
            {props.children}
          </code>
        </pre>
      </div>
    </>
  );
};

export default PreCode;
