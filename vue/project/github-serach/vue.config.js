const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    //关闭语法校验
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.github.com/search/users',
                pathRewrite: { '^/api': '' },
                // ws: true,
                // changeOrigin: true
            }
        }
    }
})