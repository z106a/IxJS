import { AsyncIterableX } from '../../asynciterable';
import { _throw as throwStatic } from '../../asynciterable/throw';

/**
 * @ignore
 */
export function _throw<T>(error: any): AsyncIterableX<T> {
  return throwStatic<T>(error);
}

AsyncIterableX.throw = _throw;

declare module '../../asynciterable' {
  namespace AsyncIterableX {
    function _throw<T>(error: any): AsyncIterableX<T>;
    export { _throw as throw };
  }
}