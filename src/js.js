import _ from 'lodash';
import {Foo,Bar} from './component.js';
import {net} from './tool.js';
import './css.css';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(VueRouter);
//如果使用模块化机制编程，要调用 Vue.use(VueRouter)

const routes = [
  { path: '/foo/:id', component: Foo },
  { path: '/bar', component: Bar }
]//$route.params中会储存已经传入的参数

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

const store = new Vuex.Store({//状态保存空间
  state: {
    count: 0
  },
  mutations: {
    add:function (states) {
      states.count++;
      console.log(states.count)
    }
  }
})



let app=new Vue({//vue总管理器
  router,
  data:{
    arr_interface:[],
  },
  methods: {
    clickMessage:function(){
      store.commit('add');
    }
  },
}).$mount("#app");
// 现在，应用已经启动了！

console.log(net(getManage))