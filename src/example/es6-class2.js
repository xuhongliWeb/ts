// es6 之前定义继承

// function Parent (name) {
// this.name = name
// }
// Parent.prototype.getName = function () {
//   return this.name
// }

// function Children (name,age) {
//   this.name = name

//   this.age = age
// }

// Children.prototype = new Parent('li')
// Children.prototype.constructor = Children


// let C:any = new Children('su',22)
// console.log(C,'c')
// console.log(C.getName())

// console.log(C instanceof Children)
// console.log(C instanceof Parent)


class Parent {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
  static getFnName () {
    return this.name
  }
}

// super 函数 只能在 contructor 中调用？？

//  super 可以把父类的静态方法也继承过来

// tslint:disable-next-line:max-classes-per-file
class Child extends Parent {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}

let P = new Child('li',332)
console.log(P.getName())
console.log(Child.getFnName()) // 这里调用静态方法时要注意


// 获取 实列的 父级
  // Object.getPrototypeOf(子)

  // console.log；(Object.getPrototypeOf(Child) === Parent)