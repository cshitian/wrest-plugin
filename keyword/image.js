// 这是一个外部指令插件示例，用于测试外部指令能否正常工作
// 插件开发语言不限于 node.js，只要添加下列注释参数，并设置正确的 @Target 作为解析器即可

// @Group: imagefn
// @Roomid: *
// @Phrase: 聊天图片处理函数
// @Level: 9
// @Target: node.exe
// @Remark: 测试插件

console.log("收到图片", process.argv[2]);
