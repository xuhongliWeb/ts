// const getFullName = (({firstName,lastName}) => {
//   return `${firstName} ${lastName}`
// })

// console.log(getFullName({
//   firstName: 'li',
//   lastName:32
// }))

//使用接口
const getFullName = (({firstName,lastName}:NameInfo):string => {
  return `${firstName} ${lastName}`
})
// 这样也能达到效果
// const getFullName = (({firstName,lastName}:{firstName:string,lastName:string}):string => {
//   return `${firstName} ${lastName}`
// })

// 定义接口 
interface NameInfo {
  firstName: string,
  lastName: string
}
getFullName({
  lastName:'13',
  firstName:'li'
})
// 可选参数
interface Fruit {
  num?:number,
  fruit: string,
}
const printFruit = ({num,fruit}:Fruit):string => {
    return num ?`${num}${fruit}`:fruit
}
// 绕开多余类型检测
  // （1） 类型断言
// console.log(printFruit({
//   fruit:'apple',
//   type:3424
// } as Fruit) )
// （2） 类型兼容性 赋值的变量里必须满足原有接口的条件

const f = {
  fruit:'apple',
  type:3424
}
console.log(printFruit(f))


// (3) 索引签名来解决多余参数 

interface Person {
  readonly sex: string,
  name: string,
  job?: string,
  age: number,
  [prop:string]:any
}

const createPerson = (({name,age,sex,job}:Person) => {
  return `我叫${name}，今年${age}岁，性别${sex},${job?'工作'+job:''}`
})

console.log(createPerson(
  {
    name:'赵刚刚',
    sex:'女',
    age:423,
    job:'没有',
    dd:45345
  }
))