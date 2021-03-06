import { IterableX } from '../../iterable';
import { _finally } from '../../iterable/finally';

/**
 * @ignore
 */
export function finallyProto<TSource>(
    this: IterableX<TSource>,
    action: () => void) {
  return _finally(this, action);
}

IterableX.prototype.finally = finallyProto;

declare module '../../iterable' {
  interface IterableX<T> {
    finally: typeof finallyProto;
  }
}