import React from 'react';
import ReactDOM from 'react-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import {Layout, Aside, Content, Footer, Header} from './lib/layout/layout';
import './example.scss'

ReactDOM.render((
  <Router>
    <Layout className='site-page'>
      <Header className='site-header'>
        <div className="logo">
          <img src='./icons/logo.png' alt=""/>
          <span>CyberUI</span>
        </div>
      </Header>
      <Layout>
        <Aside className='site-aside'>
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
          </ul>
        </Aside>
        <Content>
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className='footer'>&copy; leoshenhh</Footer>
    </Layout>
  </Router>
), document.getElementById('root'));

