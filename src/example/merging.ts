// 声明合并
// interface Info2 {
//     name: String
// }

// interface Info2 {
//     age: Number
// }

// let InfoUse:Info2


// InfoUse = {
//     name: 'STR', // 合并了
//     age: 12
// }

// 函数在接口中重复 相等于重载
interface Info3 {
    age: number,
    getRes(par:string) :number  
}

interface Info3 {
    name: string,
    getRes(par:number) : string
}

let fUse:Info3

fUse = {
    age:12,
    name:'332',
    getRes:(txt:any):any => {
        if(typeof txt === 'string'){ return txt.length}
        else {return txt}
    }
}

console.log(fUse.getRes(2))


// 同名的类 定义在同名的命名空间上面

class ValClass {
    constructor() {}
    public check(){}
}

namespace ValClass {
    export const nameS = '我是命名空间'
}
console.dir(ValClass.nameS)


// 同名的函数 定义在同名的命名空间上面


function countUp() {
    countUp.count++
}

namespace countUp {
    export let count = 0 // 这样合并
}

