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


// (3) 索引签名-类型来解决多余参数 

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

// 用接口来定义 数据中元素类型  

interface arrInfo {
  0: Number,
  1:String,
  readonly 2: string
}

let arr11:arrInfo = [4324,'stre','不能修改']
// arr11[2] = '' // Cannot assign to '2' because it is a read-only property.ts(254

// 定义函数

interface fnInfo {(num1:number,params:string):string}

// 使用

let getUserNName:fnInfo = ((user,name)=> {
  return `${user}${name}`
})

getUserNName(1,'ee')

// 第二种 type 别名

type userFn = (user:string,name:string) => string // 

let getName:userFn = (user,user2)=> user+user2

getName('str2','str')

// 索引签名 - 索引类型 -索引类型 - 可以在接口中任意属性名，并规定类型和值的类型

interface Type1 {
  [id:number]:number,
  name:string
}

const obj2:Type1 = {
  3:2,
  name:"x",
}

// 接口的继承 extends ...

interface xiaoming {
  sex:string,
}
interface zhangsan1 {
  JOB:string,
}
interface zhangsan extends xiaoming,zhangsan1{
  // sex:string,
  book: string
}
interface lisi {
  // sex:string,
  count:number
}

const p1:zhangsan = {
  book:'《》',
  sex:'nan',
  JOB: 'teacher'
}

// 混合类型 

interface Counter {
  ():void,
  count:number,
  reset():void,
}

const getCounter = ():Counter => {
  const count = ()=> {count.count++}
  count.count = 0
  count.reset = () => {}
  return count
}
const c = getCounter()
c()
console.log(c.count)
c()
console.log(c.count)

