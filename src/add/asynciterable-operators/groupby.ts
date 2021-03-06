import { AsyncIterableX } from '../../asynciterable';
import { groupBy, GroupedAsyncIterable } from '../../asynciterable/groupby';
import { identityAsync } from '../../internal/identity';

export function groupByProto<TSource, TKey>(
    source: AsyncIterable<TSource>,
    keySelector: (value: TSource) => TKey | Promise<TKey>): AsyncIterableX<GroupedAsyncIterable<TKey, TSource>>;
export function groupByProto<TSource, TKey, TValue>(
    source: AsyncIterable<TSource>,
    keySelector: (value: TSource) => TKey | Promise<TKey>,
    elementSelector?: (value: TSource) => TValue | Promise<TValue>): AsyncIterableX<GroupedAsyncIterable<TKey, TValue>>;
/**
 * @ignore
 */
export function groupByProto<TSource, TKey, TValue>(
    source: AsyncIterable<TSource>,
    keySelector: (value: TSource) => TKey | Promise<TKey>,
    elementSelector: (value: TSource) => TValue | Promise<TValue> = identityAsync): AsyncIterableX<GroupedAsyncIterable<TKey, TValue>> {
  return groupBy<TSource, TKey, TValue>(source, keySelector, elementSelector);
}

AsyncIterableX.prototype.groupBy = groupByProto;

declare module '../../asynciterable' {
  interface AsyncIterableX<T> {
    groupBy: typeof groupByProto;
  }
}