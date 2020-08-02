// 数字枚举 
// 
enum Num {
    one,
    two=3,
    three
}

console.log(Num.one)
console.log(Num['one'])
console.log(Num.three)

// 反向映射 可通过 值来访属性
enum Num2{
    one,
    two=3,
    three
}

console.log(Num2[0])


//  字符串枚举 可以使用 枚举成员中的属性


enum status {
    SUCCESS='成功',
    ERROR= '失败',
    FAILED=ERROR
}


console.log(status.ERROR)
console.log(status.SUCCESS)
console.log(status.FAILED)



// 异构枚举

enum Res {
    N= 0,
    Succ= 'STR'
}

// 枚举成员类型和联合枚举类型

enum InterEnum {
    Off,
    On
}
interface Bb {
    start: InterEnum
}

const Tb:Bb = {
    start:InterEnum.Off
}

// 运行时的枚举

const enum A {
    SUCCESS = 200
}

// 编译时 没有 对象了， 直接是 200 
// Res.code === 200