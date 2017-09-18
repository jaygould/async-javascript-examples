import { simplePromise } from './examples/promise/simplePromise';
import { chainPromise } from './examples/promise/chainPromise';
import { simpleAsyncawait } from './examples/asyncawait/simpleAsync';
import { chainAsyncawait } from './examples/asyncawait/chainAsync';
import {
	concurrentAsyncawaitA,
	concurrentAsyncawaitB
} from './examples/asyncawait/concurrentAsync';

simplePromise();
chainPromise();
simpleAsyncawait();
chainAsyncawait();
concurrentAsyncawaitA();
setTimeout(() => {
	concurrentAsyncawaitB();
}, 4000);
