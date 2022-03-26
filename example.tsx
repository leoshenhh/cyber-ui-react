import React from 'react';
import ReactDOM from 'react-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import FormExample from './lib/form/form.example'
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import {Layout, Aside, Content, Footer, Header} from './lib/layout/layout';
import './example.scss'
import ButtonExample from './lib/button/button.example';
import Cyber from './lib/cyber/cyber';
import ScrollExample from './lib/scroll/scrollExample';
import CyberExample from './lib/cyber/cyber.example';

const logo = require('./icons/logo.png').default

ReactDOM.render((
  <Router>
    <Layout className='site-page'>
      <Header className='site-header'>
        <div className="logo">
          <img src={logo} alt=""/>
          <h2><Cyber>CyberUI</Cyber></h2>
        </div>
        <h4><Cyber>  A Cool And Simple REACT UI library </Cyber></h4>
      </Header>
      <Layout>
        <Aside className='site-aside'>
          <h1><Cyber>Component</Cyber></h1>
          <ul>
            <li>
              <NavLink to="/cyber">Cyber</NavLink>
            </li>
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
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
            <li>
              <NavLink to="/scroll">Scroll</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className='site-main'>
          <Route path="/cyber" component={CyberExample}/>
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
          <Route path="/form" component={FormExample}/>
          <Route path="/scroll" component={ScrollExample}/>
        </Content>
      </Layout>
      <Footer className='footer'><Cyber>&copy; leoshenhh</Cyber></Footer>
    </Layout>
  </Router>
), document.getElementById('root'));

