import React from 'react'
import Highlight,{defaultProps} from 'prism-react-renderer'
import Button from './lib/button/button';
interface IDemoProps{
    code:string
}
const Demo:React.FunctionComponent<IDemoProps> = (props) => {
    const [codeVisable,setCodeVisable] = React.useState(false)
    const handleVideCode = () => {
        setCodeVisable(!codeVisable)
    }
    const code = <Highlight {...defaultProps} code={props.code} language={'jsx'}>
                    {
                        ({ className, style, tokens, getLineProps, getTokenProps }) => {
                            return (
                                <pre className={className} style={style}>
                                    {
                                        tokens.map((line, i) => (
                                                <div { ...getLineProps({line, key: i}) }>
                                                    {
                                                        line.map((token, key) => (
                                                            <span {...getTokenProps({token, key})} />
                                                        ))
                                                    }
                                                </div>
                                            )
                                        )
                                    }
                                </pre>
                            )
                        }
                    }
                </Highlight>

    return (
        <div>
            <div>
                {props.children}
            </div>
            <div>
                <Button onClick={handleVideCode}>{codeVisable ? '关闭代码' : '查看代码'}</Button>
            </div>
            {codeVisable && code}
        </div>
    )
}

export default Demo