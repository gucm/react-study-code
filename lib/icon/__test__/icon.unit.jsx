import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'

describe('icon',()=>{
    it('icon是个svg',()=>{
        const json = renderer.create(<Icon/>).toJSON()
        expect(json).toMatchSnapshot()
    })
})