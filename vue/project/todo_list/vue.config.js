const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    productionTip: false,
    lintOnSave: false //关闭语法检查
})