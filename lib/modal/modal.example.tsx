import React from 'react'
import Modal,{confirm} from './modal'


const ModalExample:React.FunctionComponent = () => {
    const [visible,setVisible] = React.useState(false)
    const handleCancel = (e:React.MouseEvent<HTMLElement>) => {
        setVisible(false)
    }
    const handleOk = (e:React.MouseEvent<HTMLElement>) => {
        setVisible(false)
    }
    return (
        <div>
            <button onClick={()=>{setVisible(!visible)}}>click</button>
            <Modal 
                visible={visible}
                title={'modal'}
                onCancel={handleCancel}
                onOk={handleOk}
                okText={'ok'}
                cancelText={<span>cancel</span>}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>  


            <button onClick={()=>(confirm({content:'1',okText:'xx',cancelText:'yy'}))}>alert</button>
        </div>
    )
}

export default ModalExample
