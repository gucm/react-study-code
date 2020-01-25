import classNames from '../classnames'

describe('classnames',()=>{
    it('接收一个classNames',()=>{
        const result = classNames('a')
        expect(result).toEqual('a')
    })
    it('接收2个calssName',()=>{
        const result = classNames('a','b')
        expect(result).toEqual('a b')
    })
    it('接收undefined 结果不会出现undefined',()=>{
        const result = classNames('a',undefined)
        expect(result).toEqual('a')
    })
    it('接收各种奇怪的值',()=>{
        const result = classNames('a',undefined,'中文',null)
        expect(result).toEqual('a 中文')
    })
    it('接收空值',()=>{
        const result = classNames()
        expect(result).toEqual('')
    })
})