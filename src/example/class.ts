// 定义类 

class Ponint {
    x:number
    y:number
    constructor(x:number,y:number){
        this.x = x

        this.y = y
    }
    getPosition(){
        return `${this.x}[]${this.y}`
    }
}
// public 公共的 外部可以访问的属性或方法
// private 私有的 类的外面没有办法访问的 - 私有的在子类中也不可以访问呢
// protected 在继承该类的子类中可以访问 -- 不能通过父类创建实例？
// readonly 只读
class Parent {
    public name:String
    private age: Number
    protected job?:String
    public readonly sex: String
    constructor(name:String, age:Number,job?:String, sex?) {
        this.name = name
        this.age = age
    }
   public getName (){
        return this.name
    }
}

class Child extends Parent {
    constructor(age:number){
        super('',age) // 私有的在子类中也不可以访问呢
    }
}
const P = new Parent ('x', 12)
console.log(P.name)
// console.log(P.age) // 私有的 访问报错

class t {
    constructor(public name: String) {
        this.name = name 
    }
}


// abstract 定义之后 该类 或 属性 或 方法 职能用于被继承


// abstract class AA {
//     abstract age:Number
//     name:String
//     constructor(name:String,age) {
//         this.name = name
//     }
//     public abstract getName() {
//     }
// } 

// class UserInfo {
//     public readonly name: string
//     constructor(name: string) {
//         this.name = name
//     }
// }
// const userInfo = new UserInfo('lison')
// console.log(userInfo)
// userInfo.name = 'haha'

// class A {
//     constructor(public name: string) {}
// }
// const a1 = new A('lison')
// console.log(a1.name)

// class Parent {
//     public static getAge() {
//         return Parent.age
//     }
//     private static age: number = 18
//     constructor() {}
// }
// const p = new Parent()
// console.log(p.age)
// console.log(Parent.age)

class Info {
    public name: string
    public age?: number
    private _infoStr: string
    constructor(name: string, age?: number, public sex?: string) {
        this.name = name
        this.age = age
    }
    get infoStr() {
        return this._infoStr
    }
    set infoStr(value) {
        // console.log(`setter: ${value}`)
        this._infoStr = value
    }
}
// const info1 = new Info('lison')
// console.log(info1)
// const info3 = new Info('lison', 18)
const info4 = new Info('lison', 18, 'man')
info4.infoStr = 'lison: 18'
// console.log(info4.infoStr)

// abstract class People {
//     constructor(public name: string) {}
//     public abstract printName(): void
// }
// // const p1 = new People()
// class Man extends People {
//     constructor(name: string) {
//         super(name)
//         this.name = name
//     }
//     public printName() {
//         console.log(this.name)
//     }
// }
// const m = new Man('lison')
// m.printName()

// abstract class People {
//     public abstract _name: string
//     abstract get insideName(): string
//     abstract set insideName(value: string)
// }
// class P extends People {
//     public _name: string
//     public insideName: string
// }

class People {
    constructor(public name: string) {}
}
let p2: People = new People('lison')
class Animal {
    constructor(public name: string) {}
}
p2 = new Animal('haha')

interface FoodInterface {
    type: string
}
// 用 implements 来使用 定义的接口
// class FoodClass implements FoodInterface {
//     public type: string
// }

// class A {
//     protected name: string
// }
// interface I extends A {}
// class B extends A implements I {
//     public name: string
// }

// const create = <T>(c: new() => T): T => {
//     return new c()
// }
// class Infos {
//     public age: number
//     constructor() {
//         this.age = 18
//     }
// }
// console.log(create<Infos>(Infos).age)
// console.log(create<Infos>(Infos).name)


interface InterTest {
    name: String,
    age: number
}

class BBB implements InterTest {
    name: String
    age: number
    constructor(name:String) {
        this.name = name
        this.age = 312
    }
}