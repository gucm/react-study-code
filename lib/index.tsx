import reactDOM from 'react-dom';
import React from 'react';
import Icon from './icon/icon';
const onClick:React.MouseEventHandler = (e) => {
    console.log(e)
    console.log((e.target as SVGUseElement).href)
}
reactDOM.render(<Icon name='alipay' onClick={onClick}/>,document.querySelector('#root'))
