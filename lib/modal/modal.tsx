import React from 'react'
import './modal.scss'
import '../index.scss'
import {Icon,Button} from '../index'
import {scopedClassMaker} from '../api/classes'
interface IDialogProps{
    /** 对话框是否可见 */
    visible:boolean

    width?:string | number
    /** 标题 */
    title?:string|React.ReactNode
    /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层时的回调 */
    onCancel?:(e: React.MouseEvent<HTMLElement>) => void;
    
    /** 点击确定回调 */
    onOk?: (e: React.MouseEvent<HTMLElement>) => void;
    /** 确认按钮文字 */
    okText?:React.ReactNode
    /** 确认按钮类型 */
    okType?: string;
    /** 取消按钮文字 */
    cancelText?:React.ReactNode
    /** 底部内容 */
    footer?:React.ReactNode
    /** 是否显示遮罩 */
    mask?: boolean;
    /** 点击蒙层是否允许关闭 */
    maskClosable?:boolean
}



const scopedClass = scopedClassMaker('gui-modal') 

const Modal:React.FunctionComponent<IDialogProps> = (props) => {
    /** 关闭事件 */
    const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
        const { onCancel } = props

        if(onCancel){
            onCancel(e)
        }

    }
    /** 确认事件 */
    const handleOk = (e:React.MouseEvent<HTMLElement>) => {
        const { onOk } = props
        if(onOk){
            onOk(e)
        }
    }
    /** 点击遮罩是否关闭 */
    const handleMaskCancel = (e: React.MouseEvent<HTMLElement>) => {
        const {maskClosable} = props
        if(maskClosable){
            handleCancel(e)
        }
    }
    console.log(props.footer === null)
    console.log(props.footer === undefined)
    return (
        props.visible ? 
        <React.Fragment>
            {
                props.mask &&  <div className={scopedClass('mask')} onClick={handleMaskCancel}/>
            }
            <div className={scopedClass()} style={{width:props.width}}>
                <div className={scopedClass('close')} onClick={handleCancel}>
                    <span className={scopedClass('close-x')}>
                        <Icon name='close'/>  
                    </span>
                </div>
                {
                    props.title && 
                    <div className={scopedClass('header')}>
                        <div className={scopedClass('title')}>
                            {props.title}
                        </div>
                    </div>
                }
                
                <div className={scopedClass('body')}>
                    {props.children}
                </div>
                {
                    props.footer === null ?
                        <React.Fragment/> :
                        (props.footer ? props.footer :
                                <div className={scopedClass('footer')}>
                                    <Button onClick={handleCancel}>{props.cancelText}</Button>
                                    <Button type={props.okType} onClick={handleOk}>{props.okText}</Button>
                                </div>
                        )
                }

            </div> 
        </React.Fragment>
        :
        null
    )
}
Modal.defaultProps = {
    width:520,
    okType:'primary',
    okText:'确定',
    cancelText:'取消',
    mask:true,
    maskClosable:true
}


export default Modal
