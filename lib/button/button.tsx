import React, {MouseEventHandler} from 'react';
import './button.scss'
import '../index.scss'
import {scopedClassMaker} from '../api/classes'
import classes from '../api/classnames'
import {on} from "cluster";
interface IButtonProps{
    type?:string
    disabled?:boolean
    size?:string
    onClick?:React.MouseEventHandler<HTMLElement>
}
enum EGuiBtnType {
    default = 'default',
    primary = 'primary',
    dashed = 'dashed',
    danger = 'danger',
    link = 'link',
}
enum EGuiBtnSize{
    large = 'large',
    small = 'small'
}

const scopedClass = scopedClassMaker('gui-btn') 
const Button:React.FunctionComponent<IButtonProps> = (props) => {
    const handleClick:React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
        const {onClick} = props
        if(onClick){
            (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
        }
    }
    return (
        <button className={classes(scopedClass(), scopedClass(props.type === EGuiBtnType.default ? '' : props.type), props.disabled ? scopedClass((props.type === EGuiBtnType.default ? '' : props.type + '-') + 'disabled') : undefined, scopedClass(props.size === EGuiBtnSize.large ? 'lg' : (props.size === EGuiBtnSize.small ? 'sm':'')))}
                disabled={props.disabled}
                onClick={handleClick}
        >
            {props.children} 
        </button> 
    )
};
Button.defaultProps = {
    type:"default", //default 次按钮   primary 主按钮   dashed 虚线    danger 危险   link 无边框的
    disabled:false,
    size:''
}
export default Button;
