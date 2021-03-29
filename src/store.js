import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  //
  state: {
    name: 'Kobe Bryant',
    num: 24,
    content: '世界上最牛逼的篮球运动员',
    todos: [
      {
        done: false,
        content: '吃水果',
        id:1
      },
      {
        done: false,
        content: '吃鸡蛋',
        id:2
      },
      {
        done: true,
        content: '喝牛奶',
        id:3
      },
      {
        done: false,
        content: '5km',
        id:4
      },
      {
        done: true,
        content: '工作',
        id:5
      }
    ],
  //  路由数组
    routerArray:[
      {
        title:'首页',
        path: '/'
      },
      {
        title:'数字页',
        path: '/home'
      }
    ],
    activeRouterTitle:'首页'
  },
  mutations: {
    CHANGE_NAME (state,payload) {
      state.name = payload.name
    },
    // 新增
    PUSH_ROUTER (state,payload){
      state.routerArray.push(payload)
    },
    // 删除
    DELETE_ROUTER (state,payload){
      state.routerArray = state.routerArray.filter(item => item.title !=payload)
    },
    // 更改选中样式名字
    CHANGE_ROUTERTITLE(state,payload){
      state.activeRouterTitle = payload
    }
  },
  getters: {
    doneTodos : state => {
      return state.todos.filter(todo => !todo.done)
    },
    getTodoById: (state)=> (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  }

})
export default store
