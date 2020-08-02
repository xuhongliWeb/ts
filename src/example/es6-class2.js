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


// class Parent {
//   constructor(name) {
//     this.name = name
//   }
//   getName() {
//     return this.name
//   }
//   static getFnName () {
//     return this.name
//   }
// }

// super 函数
// 第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。

//  super 可以把父类的静态方法也继承过来

// tslint:disable-next-line:max-classes-per-file
// class Child extends Parent {
//   constructor(name, age) {
//     super(name)
//     this.age = age
//   }
// }

// let P = new Child('li',332)
// console.log(P.getName())
// console.log(P instanceof Child) // true 
// console.log(P instanceof Parent) // true
// console.log(Child.getFnName()) // 这里调用静态方法时要注意



// 获取 实列的 父级 父类
  // Object.getPrototypeOf(子)

  // console.log；(Object.getPrototypeOf(Child) === Parent)


  // class Parent {
  //   constructor () {
  //     this.name = 'parent'
  //   }
  //   getName() {
  //     console.log(this.name)
  //   }
  //   static getStaticName () {
  //   }
  // }

  // class Child extends Parent {
  //   constructor () {
  //     super()
  //     this.name = 'Child'
  //   }
  //   childPrint(){
  //     super.getName()
  //   }
  // }

  // let c = new Child()
  // console.log(c.childPrint())


  // prototyoe 和 __proto


  var obj = new Object()
  console.log(obj)
  console.log(obj.prototype)
  console.log(obj.prototype === obj.__proto__) // false
  console.log(Object.prototype === obj.__proto__) //  true

  // 子类的__proto__ 指向父类本身

  // 子类的prototype 属性的__proto__ 指向夫剋的prototype属性

  // 实列的__proto__ 属性的__proto__指向父类的=实列的__proto__


  // 原生对象的继承

  // Boolean

  // Number

  // Strng 

  // Array

  // Date

  // Function

  // RegExp

  // Error

  // Object

  class CustomArray extends Array {
    constructor(...arg) {
      super(...arg)
    }
  }

  let arr = new CustomArray(3)

  console.log(arr)

  console.log(arr.fill('-'))