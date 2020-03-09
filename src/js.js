import _ from 'lodash';
import {Loading,Bar} from './component.js';
import {net} from './tool.js';
import './css.css';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(VueRouter);
//如果使用模块化机制编程，要调用 Vue.use(VueRouter)

const routes = [
  { path: '/loading', component: Loading },
  { path: '/bar/:inte', component: Bar ,props:true}
]//$route.params中会储存已经传入的参数

const router = new VueRouter({
  routes ,// (缩写) 相当于 routes: routes
})

const store = new Vuex.Store({//状态保存空间
  state: {
    count: 0
  },
  mutations: {//中间管理方法
    loadingInit:function(){  
      Loading.methods.init();
    },
    add:function (states) {
      states.count++;
      console.log(states.count)
    }
  }
})



let app=new Vue({//vue总管理器
  router,
  data:{
    vuedata:123,
    arr_interface:[],
  },
  methods: {
    VueRouterInit:function(event){//vue实例入口
      let ans=event.target.hash.match(/#\/([^\/]*)/)[1];//匹配出path
      console.log(ans)
      store.commit(`${ans}Init`);
    },
    clickMessage:function(){
      store.commit('add');
      console.log(router);
    }
  },
}).$mount("#app");

// 程序入口
window.onload=function(){
  //app.init();
  const ans=[1,2,3];
  let a = 'hello';
  let b = 'world';

  let test=function(){
      setTimeout(() => {
        console.log("异步1")
      }, 0);
      console.log("同步1")
    
    new Promise(function(reslove,reject){
      console.log("同步2")
      setTimeout(() => {
        console.log("异步2")
      }, 0);
      reslove(3);
    }).then((result) => {
        console.log(`异步${result}`)
    })   
     
  }();
}
