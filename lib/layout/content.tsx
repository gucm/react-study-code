import React from 'react'
import { scopedClassMaker } from '../api/classes';
import classes from '../api/classnames';
interface IContentProps extends React.HTMLAttributes<HTMLElement>{

}
const scopedClass = scopedClassMaker('gui-layout')
const Content:React.FunctionComponent<IContentProps> = (props) => {
    const {className,style} = props
    return (
    <div className={classes(scopedClass('content'),className)} style={style}>{props.children}</div>
    )
}

Content.defaultProps = {

}

export default Content