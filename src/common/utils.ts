import * as _ from 'lodash-es';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};

export const sleep = (timeoutMs: number) =>
  new Promise((resolve) => setTimeout(resolve, timeoutMs));

export const camelizeKeys = <T extends Record<string, unknown>>(obj: T): T => {
  return _.transform(
    obj,
    (result: Record<string, unknown>, value: unknown, key: string, target) => {
      const camelKey = Array.isArray(target) ? key : _.camelCase(key);
      result[camelKey] = _.isObject(value)
        ? camelizeKeys(value as Record<string, unknown>)
        : value;
    },
  ) as T;
};

export const snakeCaseKeys = <T extends Record<string, unknown>>(obj: T): T => {
  return _.transform(
    obj,
    (result: Record<string, unknown>, value: unknown, key: string, target) => {
      const snakeKey = Array.isArray(target) ? key : _.snakeCase(key);
      result[snakeKey] = _.isObject(value)
        ? snakeCaseKeys(value as Record<string, unknown>)
        : value;
    },
  ) as T;
};
