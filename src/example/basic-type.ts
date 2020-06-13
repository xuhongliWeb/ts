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

// void 类型， 任何类型都不是， 定义没有返回值的函数

let fn = ((text:string):void => {
  console.log(text)
  // return undefined return undefined null 可以， void可以赋值为undefined和null
})

// fn('我是void， 没有返回值的函数')

// null 和 undefined 既是值也是类型

let u:undefined
 u = undefined // 只能是undefined

 let n:null
 n = null // 同理


 // never 类型 永远不存在值的类型 never 是任何类型的子类型， 没有类型是never的子类型

 let throwFn = ((message:string):never => { // 抛错信息never
   throw new Error(message)
 })

 let infineFn = ()=>{ // 死循环 never
   while (true){

   }
 }

 // obj 类型 

 let objFn = (o:object):object => {
   return o
 }
 let obj = {
   name: 'text'
 }
 objFn(obj)

 // 类型断言  -- 一些情况下TS不够智能， 需要我们指定类型。 语法 (<> )和 (as )
    // getLength 会报出 类型number上不存在length 属性， 
 let getLength = ((target:string|number):number => {
  if((<string>target).length || (target as string).length === 0){
    return (<string>target).length
  }else {
    return target.toString().length
  }
 })

//  getLength(false)
console.log(getLength('ffa'))
console.log(getLength(534534545435))
