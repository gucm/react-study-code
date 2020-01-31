import React from 'react'
import { scopedClassMaker } from '../api/classes';
import classes from '../api/classnames';
interface IFooterProps extends React.HTMLAttributes<HTMLElement>{

}
const scopedClass = scopedClassMaker('gui-layout')
const Footer:React.FunctionComponent<IFooterProps> = (props) => {
    const {className,style} = props
    return (
        <div className={classes(scopedClass('footer'),className)} style={style}>
            {props.children}
        </div>
    )
}

Footer.defaultProps = {

}

export default Footer