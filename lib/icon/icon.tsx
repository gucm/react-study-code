import React from 'react';
import './importIcons';
import classes from '../api/classnames';
import './icon.less';

interface IconProps extends React.SVGAttributes<SVGElement> {
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className,name,...restProps} = props
    return (
        <svg className={classes('gui-icon',className)}
             {...restProps}
        >
            <use xlinkHref={`#${name}`}/>
        </svg>
    );
};
export default Icon;
