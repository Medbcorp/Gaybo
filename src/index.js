import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Layout, Typography, Avatar, Menu, Icon, Breadcrumb } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

import Graph from './graph'
import Weather from './weather'
import About from './about'
import { getReadings } from './services/apis';
import * as serviceWorker from './serviceWorker';

import './App.css';
import './index.css';

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  // state props { 
  //     news: stores data pulled from JSON, 
  //     filtered: getKeyword(evt) puts filtered results in an array
  // }

  // should not mutate the state of something important
  state = {
    data: getReadings(1, 'state')
  }

  render(){

    return (
      <div className="App">
        <BrowserRouter>
        <Layout>
          <Header style={{ padding: '2vh' }}>
            <Avatar src="./gay.png" style={{ float: 'right' }}/>
            <Title 
              level={3} 
              style={{ color: '#fff' }}
            >
              GAYBO
            </Title>
            </Header>
          <Layout>
            <Sider>
              <Menu 
                defaultSelectedKeys={['weather']}
                mode="inline"
              >
                <Menu.Item key='weather'><Link to="/weather">Weather</Link></Menu.Item>
                <SubMenu 
                  key="colmList"
                  title={
                    <span>
                      <Icon type="cloud-upload" />
                      <span>Devices</span>
                    </span>
                  }
                >
                  <Menu.ItemGroup key="colmList" title="Colm List">
                    <Menu.Item key="colm1"><Link to="/colm/1/start">Colm1</Link></Menu.Item>
                    <Menu.Item key="colm2"><Link to="/colm/2/start">Colm2</Link></Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="about"><Link to="/about">About</Link></Menu.Item>
              </Menu>
            </Sider >  
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Breadcrumb>
              <Content 
                style={{ 
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: '73vh',
                  width: '80vw'
                }}
              >
                  <div>
                    <Route path="/weather" component={Weather}/>
                    <Route path="/colm/:id/:opts" component={Graph}/>
                    <Route path="/about" component={About}/>
                  </div>
              </Content>
              <Footer 
                style={{ 
                  textAlign: 'center',
                  padding: 24,
                  }}
              >
                Meḋḃcorp ©2019
              </Footer>
            </Layout>        
          </Layout>
        </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();