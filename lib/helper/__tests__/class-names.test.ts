import classNames, {scopedClassMaker} from '../class-names';

describe('classNames', () => {
    it('接受一个className', () => {
        const result = classNames('a');
        expect(result).toEqual('a');
    });
    it('接受两个className', () => {
        const result = classNames('a');
        expect(result).toEqual('a');
    });
    it('接受undefined结果不会出现undefined', () => {
        const result = classNames('a', undefined);
        expect(result).toEqual('a');
    });
    it('接受各种奇怪的参数', () => {
        const result = classNames('a', undefined, '中文', null);
        expect(result).toEqual('a 中文');
    });
    it('接受0个参数', () => {
        const result = classNames();
        expect(result).toEqual('');
    });
});

describe('scopedClassMaker',() => {
    const sc = scopedClassMaker('cyber-layout')
    it('第一个参数接受一个字符串数组',() => {
        const result = sc(['xxx'])
        expect(result).toEqual('cyber-layout-xxx')
    })
    it('第一个参数接受多个字符串数组',() => {
        const result = sc(['a','b','c'])
        expect(result).toEqual('cyber-layout-a cyber-layout-b cyber-layout-c')
    })
    it('第一个参数接受数组含null,undefined,和空字符串',() => {
        const result = sc([null,undefined,'','xxx'])
        expect(result).toEqual('cyber-layout cyber-layout-xxx')
    })
    it('第一个参数接受空数组',() => {
        const result = sc([])
        expect(result).toEqual('')
    })
    it('剩余参数多个字符串',() => {
        const result = sc(['','a'],'b','c')
        expect(result).toEqual('cyber-layout cyber-layout-a b c')
    })
    it('剩余参数包含null,undefined和空字符串',() => {
        const result = sc(['','a'],null,undefined,'','b')
        expect(result).toEqual('cyber-layout cyber-layout-a b')
    })
})
