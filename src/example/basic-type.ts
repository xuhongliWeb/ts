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
let arr:Number[]
arr = [1,23]
let arr2:Array<number>
arr2 = [1,24]

// 混合类型

let arr3:(Number|string)[]
arr3= [32,'32']

let arr4:Array<Number|String>
arr4 = [32,'32']
