import _ from 'lodash';
import {Loading,Content} from './component.js';
import {net} from './tool.js';
import './css.css';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(VueRouter);
//如果使用模块化机制编程，要调用 Vue.use(VueRouter)

const routes = [
  { path: '/Loading', component: Loading },
  { path: '/Content/:ContentData', component: Content ,props:true}
]//$route.params中会储存已经传入的参数

const router = new VueRouter({
  routes ,// (缩写) 相当于 routes: routes
})
router.afterEach((to, from) => { //全局后置守卫按照创建顺序调用
  console.log(to.path);
  if(to.path=='/Loading'){
    console.log(Loading.methods)
    Loading.methods.init();
  }
})
//console.log(router.match(location))
//router.beforeEach()

const store = new Vuex.Store({//状态保存空间
  state: {
    flag: '',
    ContentData:[],
  },
  mutations: {//中间管理方法
    update:function(states,key,val){
      states.key=val;
      console.log(key)
      console.log(states.key)
    },
    LoadingInit:function(states){  
      states.flag='Loading'
    },
    ContentInit:function (states) {
      states.flag='Content';
      Content.methods.init(states);
    }
  }
})



let app=new Vue({//vue总管理器
  router,
  data:{
    vuedata:'ContentData',
    InterfaceName:[],
  },
  methods: {
    init:function(){
      console.log(store)
      store.commit('update',"flag",123)
      console.log(store)

    },
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
  
  net('manage');
  //app.init();
 
  /*
  function Tnode(x){
    this.val = x;
    this.r = null;
    this.l = null;
  }
  let p=new Tnode(1);
  p.r=new Tnode(2);
  p.r.r=new Tnode(3);
  p.r.l=new Tnode(4);
  p.l=new Tnode(6);
  p.l.r=new Tnode(21);
  p.l.l=new Tnode(9);
  */
}
