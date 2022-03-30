import React from 'react';
import Layout from './layout';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Aside from './aside';
import './layout.example.scss'
import Scroll from '../scroll/scroll';


const LayoutExample: React.FunctionComponent = () => {
  return (
    <>
      <div>
        <h1>example 1</h1>
        <Layout className="layout">
          <Header className="header">Header</Header>
          <Content className="content">Content</Content>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>example 2</h1>
        <Layout className="layout">
          <Header className="header">Header</Header>
          <Layout>
            <Aside className="aside">aside</Aside>
            <Content className="content">Content</Content>
          </Layout>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>example 3</h1>
        <Layout className="layout">
          <Aside className="aside">aside</Aside>
          <Layout>
            <Header className="header">Header</Header>
            <Content className="content">Content</Content>
            <Footer className="footer">Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default LayoutExample;
