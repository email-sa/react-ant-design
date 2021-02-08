import React, { Component } from 'react';
import './home.scss'
import { Layout,Menu } from 'antd';
import { Link } from 'react-router-dom';



import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { connect } from 'react-redux';


// const mapStateToProps = state => ({
//   // authToken: state.currentUser && state.currentUser.authToken,
//   number: state.number
// });


const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;


class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      collapsed: false
    }
  }

    hanlderClick(){
        // this.props.history.push('/about')
    }
    render(){
        const list = [{title:'计划1'}]
        const style = {
          height:'500px'
        }
       return (
        <div>
           <Layout>
              <Header><h1 className="top-header">管理计划系统</h1></Header>
              <Layout style={style}>
                <Sider>
                  <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    // inlineCollapsed={this.state.collapsed}
                  >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                      <Link to='/main'>首页</Link> 
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                      <Link to='/about'>列表</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined />}>
                      <Link to='/addplan'>详情</Link>
                    </Menu.Item>
                   
                    {/* <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                      <Menu.Item key="9">Option 9</Menu.Item>
                      <Menu.Item key="10">Option 10</Menu.Item>
                      <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                      </SubMenu>
                    </SubMenu> */}
                  </Menu>
                </Sider>
                <Content className="content">
                   {this.props.children}
                </Content>
              </Layout>
              {/* <Footer>Footer</Footer> */}
            </Layout>
           
        </div>
       ) 
    }
}
export default Home
