import React from 'react'
import Button from './button'
const ButtonExample: React.FunctionComponent = () => {
    const handleBtnClick: React.MouseEventHandler<HTMLElement> = (e) => {
        console.log(12321)
    }
    return (
        <React.Fragment>
            <Button size='large' onClick={handleBtnClick}>Default</Button>
            <Button type='primary' size='small'>Primary</Button>
            <Button type='dashed' disabled={true} onClick={handleBtnClick}>Dashed</Button>
            <Button type='danger'>Danger</Button>
            <Button type='link' disabled={true}>Link</Button>
        </React.Fragment>
    )
}

export default ButtonExample
