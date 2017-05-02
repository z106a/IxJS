import { IterableX } from '../../iterable';
import { minBy } from '../../iterable/minby';

function minByProto<TSource, TKey>(
    this: IterableX<TSource>,
    keyFn: (x: TSource) => TKey,
    cmp?: (x: TKey, y: TKey) => number): IterableX<TSource> {
  return new IterableX(minBy(this, keyFn, cmp));
}

IterableX.prototype.minBy = minByProto;

declare module '../../iterable' {
  interface IterableX<T> {
    minBy: typeof minByProto;
  }
}