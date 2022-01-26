import classNames from '../class-names';

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
