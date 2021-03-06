import { AsyncIterableX } from '../../asynciterable';
import { concatStatic } from '../../asynciterable/concat';

/**
 * @ignore
 */
export function _concat<T>(...args: AsyncIterable<T>[]): AsyncIterableX<T> {
  return concatStatic<T>(...args);
}

AsyncIterableX.concat = _concat;

declare module '../../asynciterable' {
  namespace AsyncIterableX {
    export let concat: typeof _concat;
  }
}