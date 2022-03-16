import renderer from 'react-test-renderer'
import Button from '../button/button';

describe('button',()=>{
    it('是个div',()=>{
        const json = renderer.create(<Button/>).toJSON()
        expect(json).toMatchSnapshot()
    })
})
