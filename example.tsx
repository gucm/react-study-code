import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router,Route,Link, NavLink} from 'react-router-dom'
import IconExample from './lib/icon/icon.example'
import IconDemo from './lib/icon/icon.demo'
import ButtonExample from './lib/button/botton.example'
import ModalExample from './lib/modal/modal.example'
import LayoutExample from './lib/layout/layout.example'
import {Layout,Header,Content,Footer,Sider} from './lib/layout/index'
import './example.scss'
ReactDOM.render((
    <Router>
        <Layout className='page'>
            <Header className='header'>
                <div className='logo'>
                    <img src="" width='48' height='48' alt=""/>
                    <span>gcmui</span>
                </div>
            </Header>
            <Layout>
                <Sider className='sider'>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink to='/icon'>Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to='/button'>Button</NavLink>
                        </li>
                        <li>
                            <NavLink to='/modal'>dialog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/layout'>layout</NavLink>
                        </li>
                    </ul>
                </Sider>

                <Content className='content'>
                    <Route path='/icon' component={IconDemo}/>   
                    <Route path='/button' component={ButtonExample}/>   
                    <Route path='/modal' component={ModalExample}/>   
                    <Route path='/layout' component={LayoutExample}/>  
                </Content>
            </Layout>
            <Footer className={'footer'}>
                &copy;顾程铭
            </Footer>
        </Layout>
    </Router>  
),document.querySelector('#root'))