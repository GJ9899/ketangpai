// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import 'jquery'
import editor from '@/components/editor'
// import store from './store'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$ajax= axios

// http response响应拦截器
axios.interceptors.response.use(response =>{
  // console.log(response);
  return response;
},error => {
  if(error.response){
    switch(error.response.status){
      //返回404，清除token信息并跳转到登录页面
      case 401:
      router.replace({
        path:'/login'
      })

      case 403:
        alert("非法的数据访问，请重新登录");
        router.replace({
          path:'/login'
        })
    }
    //返回接口返回的错误信息
    return Promise.reject(error.response.data);
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App,editor },
  template: '<App/>',
  // store
})

// router.beforeEach((to,from,next) => {
//   if(to.meta.requireAuth){
//     if(store.state.token){
//       next();
//     }
//     else{
//       next({
//         path:'/login',
//         query:{redirect:to.fullPath}
//       })
//     }
//   }
//   else{
//     next();
//   }
// })
