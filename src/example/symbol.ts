let s1 = Symbol('s')
let s2 = Symbol('s')

// console.log(s1 === s2) // false

let s3 = Symbol(32)
let s4 = Symbol(43)

// console.log(s3+s4) // 不能

// 用于 key 的Symbol -- Symbol 只能 [] 语法

let s5 = Symbol('age')
let s6 = Symbol('job')
const info:object = {
  name: 'xx',
  [s5]:'18',
  [s6]:'teachar'
}

// 遍历 有Symbol的对象

// 1. for key in 遍历 不到

// for(const key in info) {
//   console.log(key)
// }

// Object.getOwnPropertyNames(info) 遍历不到 -- 返回数组

// console.log(Object.getOwnPropertyNames(info)) 

// Object.keys(info) 遍历不到 -- 返回数组
// 
// console.log(Object.keys(info))



// console.log(JSON.stringify(info)) // 获取不到

// 可以获取到 Symbol 的方法

// Object.getOwnPropertySymbols 只会返回Symbol的key
// console.log(Object.getOwnPropertySymbols(info))

// 

console.log(Reflect.ownKeys(info)) // 返回所有key， 包含symbol 数组


