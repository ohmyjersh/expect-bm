import bm from './index';

test('should get ms for execution', () => {
    let val = bm.run(() => console.log('hiiiii'));
    expect(val).toBeLessThan(5)
})