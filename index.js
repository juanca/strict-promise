import Promise from 'bluebird';

export default class StrictPromise {
  constructor(executor) {
    this._promise = new Promise(executor);
  }

  static all(iterable) {
    return new StrictPromise((resolve, reject) => {
      Promise.all(iterable).then(resolve, reject);
    });
  }

  static race(iterable) {
    return new StrictPromise((resolve, reject) => {
      Promise.race(iterable).then(resolve, reject);
    });
  }

  static reject(value) {
    return new StrictPromise((resolve, reject) => {
      Promise.reject(value).then(resolve, reject);
    });
  }

  static resolve(value) {
    return new StrictPromise((resolve, reject) => {
      Promise.resolve(value).then(resolve, reject);
    });
  }

  then(onFulfilled, onRejected) {
    return new StrictPromise((resolve, reject) => {
      this._promise.then(onFulfilled, onRejected).then(resolve, reject);
    });
  }

  catch(onRejected) {
    return new StrictPromise((resolve, reject) => {
      this._promise.catch(onRejected).then(resolve, reject);
    });
  }
}
