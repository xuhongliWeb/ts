// import 有提升效果
// a() // 可以的
// import {a} from './a'

// 不能动态引入名字

// import {`${aa}d`} from ./a

// 不可在块级作用域中使用 import 有解决办法

// 解决办法：新提案正在执行中， webpack 已经支持了
    // 定义了变量 
    // let status = 1
    // if(status) {
    //     import('./a')
    // }else {
    //     import('./b')
    // }

// export 语句

// 引入export default 可以这样写 

    // import {default as 任意名字} from ./a

// 一个模块只能有一个 export default 语句 引入的时候不需要指定名字


// 一个模块中既有 export default 又有export 可以这么引入

// import sex {name,age} from './a'


// 导出 其他模块

// export * from './b'

// export {name as nameProp} from './name'


// export {name as default} from './name'
