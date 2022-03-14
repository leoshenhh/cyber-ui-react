import React from 'react';
import Layout from './layout';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Aside from './aside';


const LayoutExample: React.FunctionComponent = () => {
  return (
    <>
      <div>
        <h1>example 1</h1>
        <Layout style={{height: 500}} className="hi">
          <Header style={{background: 'blue'}}>Header</Header>
          <Content style={{background: 'yellow'}}>Content</Content>
          <Footer style={{background: 'blue'}}>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>example 2</h1>
        <Layout style={{height: 500}} className="hi">
          <Header style={{background: 'blue'}}>Header</Header>
          <Layout>
            <Aside style={{background: 'red'}}>aside</Aside>
            <Content style={{background: 'yellow'}}>Content</Content>
          </Layout>
          <Footer style={{background: 'blue'}}>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>example 3</h1>
        <Layout style={{height: 500}} className="hi">
          <Aside style={{background: 'red'}}>aside</Aside>
          <Layout>
            <Header style={{background: 'blue'}}>Header</Header>
            <Content style={{background: 'yellow'}}>Content</Content>
            <Footer style={{background: 'blue'}}>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default LayoutExample;
