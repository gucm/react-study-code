import React from 'react'
import Layout from './layout';
import Header from './header'
import Content from './content';
import Footer from './footer'
import Sider from './sider';
import './layout.example.scss'
const LayoutExample:React.FunctionComponent = () => {
    const [visible,setVisible] = React.useState(false)
    const handleCancel = (e:React.MouseEvent<HTMLElement>) => {
        setVisible(false)
    }
    const handleOk = (e:React.MouseEvent<HTMLElement>) => {
        setVisible(false)
    }
    return (
        <div>
            <h1>第一个例子</h1>
            <Layout className='examples'>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </Layout>
            <h1>第二个例子</h1>
            <Layout className='examples'>
                <Header></Header>
                <Layout className='examples'>
                    <Sider></Sider>
                    <Content></Content>
                </Layout>  
                <Footer></Footer>
            </Layout>
            <h1>第三个例子</h1>
            <Layout className='examples'>
                <Sider></Sider>
                <Layout className='examples'>
                    <Header></Header>
                    <Content></Content>
                    <Footer></Footer>
                </Layout>
            </Layout>
        </div>
       
    )
}

export default LayoutExample
