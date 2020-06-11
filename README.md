# next-param
> Param based on next.

## installation
```bash
npm install -S @feizheng/next-param
```

## apis
| name    | type   | description    |
| ------- | ------ | -------------- |
| hash    | object | 传入的参数列表 |
| url     | string | URL            |
| options | object | 其它选项       |

## options
| name      | type     | description                                                          |
| --------- | -------- | -------------------------------------------------------------------- |
| joinKey   | string   | 当参数值为 `array` 的时候， `join` 的连接字符                        |
| encode    | function | `encodeURI` 或者 `encodeURIComponent` ，或者自定义                   |
| isEmpty   | function | 过渡掉不需要的 `value` ，可以用这个函数；默认过滤掉 `null/undefined` |
| transform | function | 对每一组 `key/value` 进行处理，最终返回需要用 `&` 拼接的字符串       |


## usage
```js
import '@feizheng/next-param';

nx.param({ var1: 123, var2: 'str', ids: [1,2,3] });
// var1=123&var2=str&ids=1%2C2%2C3
```
