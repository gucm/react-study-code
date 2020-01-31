import React from 'react'
import ReactDOM from 'react-dom'
import './modal.scss'
import '../index.scss'
import {Icon,Button} from '../index'
import {scopedClassMaker} from '../api/classes'
import classes from '../api/classnames'
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
    /** 外层容器类名 */
    wrapClassName?:string
    /** 是否显示右上角的关闭按钮 */
    closable?:boolean
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

    const renderDOM = props.visible ? 
        <React.Fragment>
            {
                props.mask &&  <div className={scopedClass('mask')} onClick={handleMaskCancel}/>
            }
            <div className={classes(scopedClass(),props.wrapClassName)} style={{width:props.width}}>
                {
                    props.closable && 
                    <div className={scopedClass('close')} onClick={handleCancel}>
                        <span className={scopedClass('close-x')}>
                            <Icon name='close'/>  
                        </span>
                    </div>
                }
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
        </React.Fragment>:null
    return (
        ReactDOM.createPortal(renderDOM,document.body)
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
interface IConfirmProps{
    content:string|React.ReactNode
    className?:string
    title?:string|React.ReactNode
    mask?:boolean
    maskClosable?:boolean
    onCancel?:(e: React.MouseEvent<HTMLElement>) => void
    onOK?:(e: React.MouseEvent<HTMLElement>) => void
    /** 确认按钮文字 */
    okText?:React.ReactNode
    /** 确认按钮类型 */
    okType?: string;
    /** 取消按钮文字 */
    cancelText?:React.ReactNode
}
const confirm = (props:IConfirmProps) => {
    const confirmClose = () => {
        ReactDOM.render(React.cloneElement(component,{visible:false}),div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const handleCancel = (e:React.MouseEvent<HTMLElement>) => {
        if(props.onCancel){
            props.onCancel(e)
        }
        confirmClose()
    }
    const handleOk = (e:React.MouseEvent<HTMLElement>)=>{
        if(props.onOK){
            props.onOK(e)
        }
        confirmClose()
    }
    const confirmBody = (
        <div className={scopedClass('confirm-body-wrapper')}>
            <div className={scopedClass('confirm-body')}>
                {props.content}
            </div>
            <div className={scopedClass('confirm-btns')}>
                <Button onClick={handleCancel}>{props.cancelText || '取消'}</Button>
                <Button type={props.okType || 'primary'} onClick={handleOk}>{props.okText || '确认'}</Button>
            </div>
        </div> 
    )


    const component = (
        <Modal
            visible={true}
            title={props.title || ''}
            wrapClassName={props.className}
            closable={false}
            mask={props.mask || true}
            maskClosable={props.maskClosable || false}
            footer={null}
            width={416}
        >
            {confirmBody}
        </Modal>   
    )
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(component,div)
}

export {confirm}
export default Modal
