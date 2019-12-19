import React, { FunctionComponent, useState } from 'react';
import ReactDom from 'react-dom';
interface props{
    
}

const App:FunctionComponent<props> = (props) => {
    const [n] = useState(1)
    onclick = () => {
        return null
    }
    return (
        <React.Fragment>
            <div>{n}</div>
            <button onClick={onclick}>+1</button>
        </React.Fragment>
    )
}

ReactDom.render(<App/>,document.body);