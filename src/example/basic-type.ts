// 布尔类型
let bool:boolean = false
bool = true

// 数值类型

let num:number = 123 

// 各种进制的数字
num = 0b1110111 
num = 0o173
num =  0x7b  

// 字符串类型
let str:string = 'str'

str = `数字是${num}`

// console.log(str)

// 数组类型

  // 只能是一种类型的
  //写法1
let arr:number[]
arr = [1,23]
// 写法2
let arr2:Array<number>
arr2 = [1,24]

// 联合类型
//写法1
let arr3:(Number|string)[]
arr3= [32,'32']
// 写法2
let arr4:Array<Number|String>
arr4 = [32,'32']

// 元组类型 - 固定长度和类型的， 不能越界

let tuple:[number,string,boolean]
tuple = [1,'str',false]
let x: [string,number]
x = ['str',123]

// 枚举

enum Name {
  'xiaohong',
  'wanger' = 12,
  'zhangsan'
}
console.log(Name.xiaohong)

// any 类型 任何都可以

const arrAny:any[] = [1,'32']
let value:any
value = false
value = ''
value = 32