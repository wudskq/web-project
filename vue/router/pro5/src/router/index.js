// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Details from '../components/Details'

//创建并暴露一个路由器
const router = new VueRouter({
    routes: [{
            //命名路由
            name: 'aboutPage',
            path: '/about',
            component: About,
            meta: { isAuth: false, title: '关于' },
        },
        {
            path: '/home',
            component: Home,
            meta: { isAuth: false, title: '主页' },
            children: [{
                    path: 'message',
                    component: Message,
                    meta: { isAuth: false, title: '消息' },
                    beforeEnter(to, from, next) {
                        if (to.meta.isAuth) { //判断是否需要鉴权
                            if (localStorage.getItem('school') === 'atguigu') {
                                next()
                            } else {
                                alert('学校名不对，无权限查看！')
                            }
                        }
                    },
                    children: [{
                        name: 'MessageDetails',
                        //params
                        path: 'details/:id/:title',
                        component: Details,
                        meta: { isAuth: true, title: '详情' },
                        props({ query: { id, title } }) {
                            return {
                                id: id,
                                title: title,
                            }
                        }
                    }]
                },
                {
                    name: 'News',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    beforeEnter(to, from, next) {
                        if (to.meta.isAuth) { //判断是否需要鉴权
                            if (localStorage.getItem('school') === 'atguigu') {
                                next()
                            } else {
                                alert('学校名不对，无权限查看！')
                            }
                        }
                    }
                }
            ]
        }
    ],
})

// //配置全局前置路由守卫
// //初始化之前以及切换路由之前调用
// router.beforeEach((to, from, next) => {
//     console.log('@全局前置路由守卫');
//     console.log(to);
//     console.log(from);
// if (to.meta.isAuth) { //判断是否需要鉴权
//     if (localStorage.getItem('school') === 'atguigu') {
//         next()
//     } else {
//         alert('学校名不对，无权限查看！')
//     }
//     } else {
//         //放行
//         next()
//     }
//     // next();
// });

// //配置后置路由守卫
// router.afterEach((to, from) => {
//     console.log('@全局后置路由守卫');
//     console.log(to);
//     console.log(from);
//     console.log(to.meta.title);
//     document.title = to.meta.title || '路由守卫'
// });


export default router;