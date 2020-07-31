//  es6 之前 定义 构造函数

// function Person(name,age) {
//     this.name = name
//     this.age = age
// }

// Person.prototype.getAll = function () {
//     return '我叫'+ this.name+'今年'+ this.age
// }


// let  p = new Person('小明',12)

// console.log(p.getAll())


// let  p2 = new Person('小明2',122)

// console.log(p2.getAll())
// console.log(p, 'p')


class Person {
    constructor (name1, age1) {
        this.name = name1;
        this.age = age1;
    }
    getAll () {
        return '我叫'+ this.name+'今年'+ this.age
    }
}

class Child2 extends Person {
    constructor(age) {
        super('Child2') // 调用父类
        this.age = age
    }
}
let  p1 = new Person('小明',12)
let c2 = new Child2(1222) // 子继承父类

console.log(c2.getAll()) 
// console.log(c2.toString('a'))
// console.log(p.getAll())



// es6 class 必须使用new 操作符

// let  p2 = new Person('小明2',122)


// 判断是不是自身的属性 hwsOwnProperty('属性名')
console.log(p1)
console.log(p1.hasOwnProperty('name'))
console.log(p1.hasOwnProperty('getAll')) //false, 在__proto__
console.log(p1.__proto__.hasOwnProperty('getAll'))

// console.log(c2)
// console.log(c2.hasOwnProperty('age'))
// console.log(c2.hasOwnProperty('name')) // 继承来的name 也属于自身的属性
// console.log(c2.hasOwnProperty('toString')) // 


// set get 关键字 

var x = {
    _age: 0,
    set a (val) {
        console.log(val)
        if(val > 18){
            console.log('已经变老了')
        }else {
            console.log('怎么还不长大')
        }
        this._age = val
    },
    get a () {
        console.log('别问我年纪')
        return this._age
    }
}

console.log(x.a = 22)
console.log(x)
console.log(x.a)


// ES6 中的 get set 关键字 

class S {
    constructor(name) {
        this.name = name 
    }
    get name() {
        return 'getter 拦截'
    }
    set name(val) {
        console.log('setter'+ val)
    }
}
let s = new S('xu')
console.log(s.name)
console.log(s.name = 'li')


// 定义class 的方式

// 1.
// class a {}
// 2.
// const b = class a {}

// let t = new b()

// class 只有静态方法 没有静态属性

// 定义类时 不想要 实例 继承该方法， 使用 static 


// class Point {
//     constructor (x,y) {
//         this.x = x
//         this.y =y
//     }
//     getPos() {
//         return this.x +'[]'+ this.y
//     }
    
//     static getFnName () {
//         return this.name
//     }
// }

// let p4 = new Point(1,2)
// console.log(p4.getPos())
// // console.log(p4.getFnName()) // 调用static 方法 这样调用报错

// console.log(Point.getFnName()) // 这样可以

// 如果静态方法包含this关键字，这个this指的是类，而不是实例。

// 定义类时 不想要 实例继承属性 ， 实现 静态属性

// class Point {
//     constructor (x) {
//         this.x = x
//     }
// }

// Point.name = 'xx'

// let t = new Point(12)
// console.log(t.x)
// console.log(t.name) // 不存在
// console.log(Point.name) // 存在


// 私有方法 

// 私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装，但 ES6 不提供，只能通过变通方法模拟实现。

// 有以下几种方式


// 第一种

// function fun2 () {
//     console.log('我是Point 的私有方法')
// }
// class Point {
//     constructor (x) {
//         this.x = x
//     }
//     fun1() {
//         fun2.call(this)
//     }
// }

// let pp2 = new Point(2)
// console.log(pp2.fun1())

// 第2种
// let fun1 = Symbol('fun1')
// function fun2 () {
//     console.log('我是Point 的私有方法')
// }
// class Point {
//     constructor (x) {
//         this.x = x
//     }
//     static [fun1] () {
//     console.log('我是Point 的私有方法')

//     }
// }

// let pp2 = new Point(2)


// 私有属性

// # 
function fun2 () {
    console.log('我是Point 的私有方法')
}
// class Point {
//     #xValue = 0;
//     constructor (x) {
//         this.x = x
//     }
   
//     fun1() {
//         fun2.call(this)
//     }
// }


// target 

// new是从构造函数生成实例对象的命令。ES6 为new命令引入了一个new.target属性，该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。如果构造函数不是通过new命令或Reflect.construct()调用的，new.target会返回undefined

function Person11(name) {
    if (new.target !== undefined) {
      this.name = name;
    } else {
      throw new Error('必须使用 new 命令生成实例');
    }
  }

  let y = new Person11('li'); // 正确
// let notAPerson = Person.call(person, 'xu');  // 报错


// 子类继承父类时，new.target会返回子类。