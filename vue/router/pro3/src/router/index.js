// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Details from '../components/Details'

//创建并暴露一个路由器
export default new VueRouter({
    routes: [{
            //命名路由
            name: 'aboutPage',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [{
                    path: 'message',
                    component: Message,
                    children: [{
                        name: 'MessageDetails',
                        //params
                        path: 'details/:id/:title',
                        component: Details,
                        //第一种写法 props 该对象中的所有属性都会以props形式传递给该组件
                        // props: { a: 1, b: 'hello' }
                        // //第二种写法 若为真就会把路由params参数以props形式传递给该组件
                        // props: true
                        //第三种写法 值为函数路由query参数以props形式传递给该组件
                        props($route) {
                            return {
                                id: $route.query.id,
                                title: $route.query.title,
                            }
                        }
                    }]
                },
                {
                    path: 'news',
                    component: News
                }
            ]
        }
    ]
})