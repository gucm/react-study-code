import React from 'react'
import Sider from './sider'
import './layout.scss'
import { scopedClassMaker } from '../api/classes';
import classes from '../api/classnames';
interface ILayoutProps extends React.HTMLAttributes<HTMLElement> {

}
const scopedClass = scopedClassMaker('gui-layout')
const Layout:React.FunctionComponent<ILayoutProps> = (props) => {
    const hasAside = Array.isArray(props.children) && 
                        props.children.reduce((result:boolean,node:React.ReactElement)=>{
                            return result || node.type === Sider
                        },false)
    const {className,style} = props
    return (
        <div className={classes(scopedClass(),className,hasAside ? scopedClass('has-sider') : '')} style={style}>
            {props.children}
        </div>
    )
}

Layout.defaultProps = {

}

export default Layout