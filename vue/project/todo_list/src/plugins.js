export default {
    install(Vue) {
        //定义插件
        Vue.filter('filte', function(value) {
            return value.slice(0, 4)
        });
        //全局指令
        Vue.directive('fbind', {

        });
        //自定义混入
        Vue.mixin('ss', {

        });
        //原型上新增方法(vm和vc都能使用)
        Vue.prototype.hello = () => { alert('hello') }

    }
}