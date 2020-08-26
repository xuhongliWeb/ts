// 合并

// js 中的 对象合并

// let a = {
//     a:'a'
// }
// let b =  {
//     b:'b'
// }
// let ab = Object.assign(a,b)


// 对象的混入

interface a {
    a:String
}

interface b {
    b:number
}

let aa:a = {
    a: 'a'
}

let bb:b = {
    b: 324324
}

let ab:a&b = Object.assign(aa,bb) // 交叉类型

// js 中 class 的混入

// class classA {
//     aa () {
//         console.log('aa')
//     }
// }

// class classB {
//     bb (){
//         console.log('bb')
//     }
// }

// function  mixins(target,source) {
//     Object.getOwnPropertyNames(source).forEach(key => {
//         // console.log(key)
//         target[key] = source[key]
//     })
// }
// // console.log(classA.prototype)
// mixins(classA.prototype,classB.prototype)
// let aabbB = new classA()
// console.log(aabbB)


// ts 里的混入 

class classAA {
    constructor(parameters) {
        
    }
    funA () {

    }
}

class classBB {
    constructor(parameters) {
        
    }
    funB () {

    }
}

// 使用 implements 实现多个接口继承
// 首先应该注意到的是，没使用extends而是使用implements。 把类当成了接口，仅使用Disposable和Activatable的类型而非其实现。 这意味着我们需要在类里面实现接口。 但是这是我们在用mixin时想避免的。

// 我们可以这么做来达到目的，为将要mixin进来的属性方法创建出占位属性。 这告诉编译器这些成员在运行时是可用的。 这样就能使用mixin带来的便利，虽说需要提前定义一些占位属性。
class classAABB implements classAA, classBB {
    public aa:Boolean = false
    public bb: boolean = true

    public funA:  () => void
    public funB: () => void
}

function mixins (base:any, from:any[]) {
    from.forEach((fromItem) => {
        Object.getOwnPropertyNames(fromItem.prototype).forEach((key) => {
            console.log(key, 'KEY')
            base.prototype[key] = fromItem.prototype[key]
        })
    })
}

mixins(classAABB, [classAA,classBB])

let AABB = new classAABB()

console.log(AABB)