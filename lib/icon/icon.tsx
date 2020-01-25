import React from 'react';
import './static/image/wechat.svg'

interface IconProps{
    name:string,
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>
            <svg>
                <use xlinkHref={'#wechat'}/>
            </svg>
        </span>
    )
}
export default Icon;
