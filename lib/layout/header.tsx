import React from 'react'
import { scopedClassMaker } from '../api/classes';
import classes from '../api/classnames';
interface IHeaderProps extends React.HTMLAttributes<HTMLElement>{

}
const scopedClass = scopedClassMaker('gui-layout')
const Header:React.FunctionComponent<IHeaderProps> = (props) => {
    const {className,style} = props
    return (
        <div className={classes(scopedClass('header'),className)} style={style}>{props.children}</div>
    )
}

Header.defaultProps = {

}

export default Header