/**
 * 泛型
 */

//  泛型是指在定义函数，接口或类时不预先定义具体的类型，而在使用的时候在指定类型的一种特性


const createArr = function <T>(length:number,val:T):Array<T>{
  let result = []
  for (let i = 0; i< length; i++) {
    result[i] = val
  }
  return result
}
// 有相应的提示 
console.log(createArr<string>(3,'23').map((item => {
  return item.length
})))

// 定义类型别名

// type Log = <T>(value:T) => T 

// function log <T>(val:T) {
//   console.log(val)
//   return val
// }

// const my:Log = log

// 定义类
  // 不能定义类的静态成员

class Namea<T> {
  constructor() {
    
  }
  run(val:T) {
    console.log(val)
  }
}

let tee = new Namea<string>()
tee.run('33')

// 类型约束
interface len {
  length:number
}
function log1 <T extends len>(val:T) { // 必须包含leng属性 或 字段
  console.log(val)
}

log1('2')
log1([])
log1({length:22})