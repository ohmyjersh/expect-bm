import bm from './index';

test('should get ms for execution', () => {
    let val = bm.run(() => console.log('hiiiii'));
    expect(val).toBeLessThan(5)
})

test('should pass ', async () => {
    let x = 1;
    let val = await bm.run( () => new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve("Success!"); // Yay! Everything went well!
          }, 250);
      }));
    expect(val).toBeLessThan(5)
})

test('should pass stuff', async () => {
    let x = 100000;
    let val = await bm.run( async () => new Promise(resolve => setTimeout(resolve,500000)));
    expect(val).toBeLessThan(5)
})