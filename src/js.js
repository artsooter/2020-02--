import _ from 'lodash';
import {Loading,modern} from './component.js';
import {net,FaceAnimation} from './tool.js';
import './css.css';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import $ from '../node_modules/jquery/dist/jquery.js';
import {leetcode} from './leetcode.js';
import Worker  from './worker.js';

const worker = new Worker("./worker.js");//设置worker
Vue.use(Vuex);
Vue.use(VueRouter);
//如果使用模块化机制编程，要调用 Vue.use(VueRouter)

const routes = [
  { path: '/Loading', component: Loading },
  { path: '/modern', component: modern}
]//$route.params中会储存已经传入的参数

const router = new VueRouter({
  routes ,// (缩写) 相当于 routes: routes
})
router.afterEach((to, from) => { //全局后置守卫按照创建顺序调用
  console.log(to.path);
  switch (to.path) {
    case '/Loading':{
      $(".loading").ready(()=>{
        Loading.methods.init();
      })
      break;
    }
    case '/modern':{
      modern.methods.init(store);
      break;
    }  
  
    default:
      break;
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
    update:function(states,data){
      states[data.key]=data.val;
      console.log(states)
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
      new Promise(function(resolve,reject){
        net('manage',resolve,reject);
      }).then(
        (val)=>store.commit('update',{key:'ContentData',val:val})
      )
    },

    btnSpanClick:function(e){
      console.log(e)
      window.scrollTo({ 
        top: window.innerHeight, 
        behavior: "smooth" 
      });
    }
  },
}).$mount("#app");


// 程序入口
window.onload=function(){
  console.log(1)
  let animaManage=function(){ 
    let snapLeft=0.06;//bigtext-snap的偏移量
    $(".line-div").eq(0).removeClass("Anima3");
    $(".line-div").eq(0).addClass("Anima1_line0");

    $(".line-div").eq(0).on("animationend",(e)=>{//line-div 拉升完毕
      $(".bigtext-div").eq(0).addClass("Anima1");
      $(".bigtext-div").eq(1).addClass("Anima1");
      $(".line-div").eq(0).addClass("Anima1_line1");
    })
    $(".bigtext-div").eq(0).on("animationend",(e)=>{//左边bigtext-div加载完成时
      $(".title-span").eq(0).addClass("Anima2");
      $(".bigtext-span").eq(0).addClass("Anima4");
      $(".btn-div").eq(0).addClass("Anima5");
    })
    $(".bigtext-span").eq(0).on("animationend",(e)=>{
      $(".bigtext-span").eq(1).addClass("Anima4");
    })

    $(".bigtext-div:nth-child(4)>span").eq(0).css("left",$(".modernHome")[0].clientWidth*(-0.5-snapLeft)+"px");//设置字体位置
    $(".bigtext-div:nth-child(1)>span").eq(0).css("left",$(".modernHome")[0].clientWidth*(-1*snapLeft)+"px");
  }

  new Promise(function(resolve,reject){
    net('manage',resolve,reject);
  }).then((val)=>{
    this.console.log(val);
    setTimeout(() => {
      animaManage();//动画开始
    }, 1000);
  })

  $(".line-div").eq(0).addClass("Anima3");
  var snap;


  $(window).scroll(function() {
    //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //scrollTop就是触发滚轮事件时滚轮的高度

    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop>300){
      new FaceAnimation($(".face-canvas")[0]);
    }
    if(scrollTop>window.innerHeight){
      
    }
  })

  //net('manage');
  //app.init();
  console.log(leetcode());//leetcode刷题

}













/* 代码库

let remove=function(array,num){//用于去除数组中某一个数字的函数
  let ans;
  if(array.indexOf(num)==-1)  return array;
  ans=array.slice(0,array.indexOf(num)).concat(array.slice(array.indexOf(num)+1));
  if(ans.indexOf(num)!=-1){
    return remove(ans,num);
  }
  return ans;
}




*/