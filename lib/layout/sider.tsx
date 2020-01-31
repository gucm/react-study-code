import React from 'react'
import { scopedClassMaker } from '../api/classes';
import classes from '../api/classnames';
interface ISiderProps extends React.HTMLAttributes<HTMLElement>{

}
const scopedClass = scopedClassMaker('gui-layout')
const Sider:React.FunctionComponent<ISiderProps> = (props) => {
    const {className,style} = props
    return (
        <div className={classes(scopedClass('sider'),className)} style={style}>
            {props.children}
        </div>
    )
}

Sider.defaultProps = {

}

export default Sider