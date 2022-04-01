import React from 'react';
import ReactDOM from 'react-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import FormExample from './lib/form/form.example';
import {BrowserRouter, Route, NavLink, Routes} from 'react-router-dom';
import {Layout, Aside, Content, Footer, Header} from './lib/layout/layout';
import './example.scss';
import ButtonExample from './lib/button/button.example';
import Cyber from './lib/cyber/cyber';
import ScrollExample from './lib/scroll/scrollExample';
import CyberExample from './lib/cyber/cyber.example';
import {Icon, Scroll} from './lib';
import CyberBrExample from './lib/cyber-br/index.example';

const logo = require('./icons/logo.png').default;

ReactDOM.render((
  <BrowserRouter>
    <Scroll wrapperHeight='100vh'>
      <Layout className="site-page">
        <Header className="site-header">
          <div className="logo">
            <img src={logo} alt=""/>
            <h2><Cyber>CyberUI</Cyber></h2>
          </div>
          <h4>
            <Cyber> A Cool And Simple REACT UI library </Cyber>
            {/*<Cyber><Icon name='github'></Icon></Cyber>*/}
            <img src="" alt=""/>
          </h4>
        </Header>
        <Layout>
          <Aside className="site-aside">
            <h2>Component</h2>
            <ul>
              <li>
                <NavLink to="cyber">Cyber</NavLink>
              </li>
              <li>
                <NavLink to="button">Button</NavLink>
              </li>
              <li>
                <NavLink to="scroll">Scroll</NavLink>
              </li>
              <li>
                <NavLink to="cyberBr">CyberBr</NavLink>
              </li>
              <li>
                <NavLink to="icon">Icon</NavLink>
              </li>
              <li>
                <NavLink to="layout">Layout</NavLink>
              </li>
              <li>
                <NavLink to="form">Form</NavLink>
              </li>
              <li>
                <NavLink to="dialog">Dialog</NavLink>
              </li>
            </ul>
          </Aside>
          <Content className="site-main">
            <Routes>
              <Route path="cyber" element={<CyberExample/>}/>
              <Route path="icon" element={<IconExample/>}/>
              <Route path="button" element={<ButtonExample/>}/>
              <Route path="dialog" element={<DialogExample/>}/>
              <Route path="layout" element={<LayoutExample/>}/>
              <Route path="form" element={<FormExample/>}/>
              <Route path="scroll" element={<ScrollExample/>}/>
              <Route path="cyberBr" element={<CyberBrExample/>}/>
            </Routes>
          </Content>
        </Layout>
        <Footer className="site-footer"><Cyber>&copy; leoshenhh</Cyber></Footer>
      </Layout>
    </Scroll>
  </BrowserRouter>
), document.getElementById('root'));

