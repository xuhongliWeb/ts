// ES5 
// const add = function (num1:number, num2:number) :number {
//   return num1+num2
// }

// const add = (num1:number,num2:number):number => num1+num2

// 定义函数类型 
   
// let add:(x:number,y:number) => number  // 这种方式定义类型 名字必须时add, 
// add = (num1,num2) => num1+num2

// add(1,2)

// 类型别名 定义类型

// type numberType = (x:number,y:number) =>number

// let add:numberType = (num1,num2) => num1+num2

// // add(2,2)

// 接口定义函数参数类型

interface numberType {
  (x:number,y:number): number
}

let add:numberType = (num1,num2) => num1+num2

add(1,2)


// 可选参数 - 可选参数须放在必选参数之后


type addType = (arg1:number, arg2:number,arg3?:number) => number
// interface addType {
//   (arg1:number,arg2:number,arg3?:number) :number
// }
// let addFunc:addType
//     addFunc = (num1:number,num2:number) => num1+num2
//     addFunc = (num1:number,num2:number,num3:number) => num1+num2+num3

//     console.log(addFunc(1,2,3))

// let addTest =  (num1:number,num2:number,num3?:number) => num1+num2+num3


type AddFunction = (arg1: number, arg2: number, arg3?: number) => number
let addFunction: AddFunction
addFunction = (x: number, y: number) => x + y
addFunction = (x: number, y: number, z: number) => x + y + z

// 默认参数 （xx = xx） TS 能推断出参数类型

// addFunc = (num1 = 2) => num1

// 剩余参数 利用解构

const handData = ((arg1:number,arg2:number, ...arg3:number[]):void => {
  console.log(arg3)
}) 

console.log(handData(2,2,434,54,7777))

// 函数的重载 

const reloadFn = (params:any):any => {
  if(typeof params === 'number') {
    return params.toString().split('').map((item) => item+'-')
  } else if (typeof params === 'string') {
    return params.split('').reverse().join('')
  }else {
    return params
  }
}

console.log(reloadFn('你是谁'))
console.log(reloadFn(123456))
console.log(reloadFn([123456]))
console.log(reloadFn({}))
// 重载2 -- 这样定义可以判断出类型
// 先定义类型
function reloadFn2 (params:number):number[]
function reloadFn2 (params:string):string
// 主题实现
function reloadFn2(params:any):any {
  if(typeof params === 'number') {
    return params.toString().split('').map((item) => item+'-')
  } else if (typeof params === 'string') {
    return params.split('').reverse().join('')
  }else {
    return params
  }
}
console.log(reloadFn2('你是谁'))
console.log(reloadFn2(123456))


// 重载的reloadFn2函数在调用的时候会进行正确的类型检查。

// 为了让编译器能够选择正确的检查类型，它与JavaScript里的处理流程相似。 它查找重载列表，尝试使用第一个重载定义。 如果匹配的话就使用这个。 因此，在定义重载的时候，一定要把最精确的定义放在最前面。

// 注意，function reloadFn2(x): any并不是重载列表的一部分，因此这里只有两个重载：一个是接收string另一个接收数字。 以其它参数调用 reloadFn2会产生错误。