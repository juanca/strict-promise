# Strict Promise

Fast promises with a small but robust API.

## Interface

- `StrictPromise.all`
- `StrictPromise.race`
- `StrictPromise.reject`
- `StrictPromise.resolve`
- `strictPromise.then`
- `strictPromise.catch`

## Performance

Paraphrased metrics from bluebird's `./bench doxbee`

```
file                                       time(ms)  memory(MB)
callbacks-suguru03-neo-async-waterfall.js       246       47.12
promises-bluebird.js                            270       47.67
promises-ecmascript6-native.js                  496       98.73
promises-strict-promise.js                      740      103.74
promises-obvious-kew.js                         973      118.71

Platform info:
Darwin 17.5.0 x64
Node.JS 8.11.1
V8 6.2.414.50
Intel(R) Core(TM) i5-6287U CPU @ 3.10GHz × 4
```
