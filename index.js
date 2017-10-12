import { performance } from 'perf_hooks';

class bm {
    static run = func => {
        let start = performance.now();
        func();
        let end = performance.now();
        return (end - start);
    }
}

export default bm;