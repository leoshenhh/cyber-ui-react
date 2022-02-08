import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer'
import Icon from '../icon';
import { shallow , mount} from 'enzyme'

describe('button',()=>{
    it('是个div',()=>{
        const json = renderer.create(<Icon name="wechat"/>).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('Test click event', () => {
        const mockCallBack = jest.fn();

        const component = shallow((<Icon name="wechat" onClick={mockCallBack}>Ok!</Icon>));
        component.find('svg').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
    it('onClick', ()=>{
        const fn = jest.fn()
        const fn1 = jest.fn()
        const component = shallow(<Icon name="wechat" onClick={fn}/>)
        component.find('svg').simulate('click');
        expect(fn).toBeCalled()
        expect(fn1).toBeCalled()
    })
})
