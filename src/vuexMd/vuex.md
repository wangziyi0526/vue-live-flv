**Vuex** 是一个专为Vue.js应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

### 什么是“状态管理模式”？

让我们从一个简单的 Vue 计数应用开始:

```
new Vue({
    // state
    data () {
        return {
            count: 0
            
        }
    },
    // view
    template: `<div>{{count}}</div>`,
    // actions
    methods: {
        increment () {
            this.count++
        }
    }
})
```

这个状态自管理应用包含以下几个部分：

- **state** 驱动应用的数据源
- **view** 以声明方式将state映射到视图
- **actions** 相应在view上的用户输入导致的状态变化

### 核心概念

> Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用
 - 最简单的 **store**
 > 在vue项目中生成一个store.js
 
 ```
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.store({
  // 
  state: {
    name: 'Kobe Bryant',
    num: 24,
    content: '世界上最牛逼的篮球运动员'
  },
  mutations: {
    CHANGE_NAME (state) {
      state.name = 'wangziyi'
    }
  }
})

``` 

### state

> Vuex使用 **单一状态树**，用一个对象就包含了全部的应用层级状态。值此它便作为一个"唯一数据源"而存在。这也意味着，每个应用将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任意特定的状态片段，在调试的过程中也能青叶地去的整个当前应用状态的快照。

- 在Vue组件职工获得Vuex状态

- 通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到。

**mapState 辅助函数**

> 当一个组件需要获取多个状态时候，讲这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 **mapState**
辅助函数帮助我们生成计算属性

```
// 在担负构建的版本中辅助函数为 Vuex.mapState

<template>
  <div class="test">
    {{name}}
    {{count}}
  </div>
</template>
<script type="text/ecmascript-6">
import store from '../store.js';
import {mapState} from 'vuex';
export default {
  data() {
    return {
    }
  },
  computed: mapState({
    count: state => state.num,
    // name: state => state.name,
    name: 'content'
  }),
  mounted () {
   
  },
  components: {
  }
}
</script>

```

### Getter

> 有时候我们需要从store中的state中派生出一些状态，例如对列表进行过滤并计数：

```
<template>
  <div class="test">
    {{name}}
    {{count}}
   <div> 目前还有{{length}}见事情没有做</div>
   <div v-for="(item, index) in lists" :key="index">{{item.content}}</div>
   <div> {{getTodoByIdItem.id}},{{getTodoByIdItem.content}} </div>
  </div>
</template>
<script type="text/ecmascript-6">
import store from '../store.js';
import {mapState} from 'vuex';
export default {
  data() {
    return {
      lists:this.$store.getters.doneTodos,
      getTodoByIdItem:this.$store.getters.getTodoById(3)
    }
  },
  computed: mapState({
    count: state => state.num,
    name: 'content',
    length() {
      return this.$store.state.todos.filter(todo => !todo.done).length
    },
    
  }),
  mounted () {
  },
  components: {
  }
}
</script>

```

**mapGetters 辅助函数**

>  mapGetters 辅助函数仅仅是将store中的getter 映射到局部计算属性：

```
import {mapGetters} from 'vuex'

export default {
   computed: {
    //使用对象展开运算符将 getter 混入 computed 对象中
    
        ...mapGetters([
            'doneTodos',
            'getTodoById'
        ])
   }
}

```

demo 代码

```
<template>
  <div class="test">
    {{ name }}
    {{ count }}
    <div>目前还有{{ doneTodos.length }}见事情没有做</div>
    <div v-for="(item, index) in doneTodos" :key="index">
      {{ item.content }}
    </div>
    <div>{{ getTodoById(3).id }},{{ getTodoById(3).content }}</div>
  </div>
</template>
<script type="text/ecmascript-6">
import store from "../store.js";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["count", "name"]),
    ...mapGetters(["doneTodos", "getTodoById"]),
  },
  mounted() {},
  components: {},
};
</script>
```

### Mutation

> 更改Vuex 的store中的 状态的唯一方法 是提交 mutation 。Vuex 中的mutation非常类似于事件:
> - 每个 mutation 都有一个字符串的 **事件类型** 和一个 **回调函数**
> - 这个回调函数就是我们实际进行状态更改的地方，并且他会接受state作为第一个参数

```
const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutation: {
        increment (state) {
        // 变更状态
        state.count++
        }
    }
})
```

- 你不能直接调用一个 mutation handler。这个选项更像是事件注册：“当触发一个类型为 increment 的 mutation 时，调用此函数。”要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法：

```
store.commit('increment')
```

**提交载荷**

- 你可以向 **store.commit** 传入额外的参数，也就是 mutation的载荷

```
mutations: {
  increment (state, n) {
    state.count += n
  }}
```

```
store.commit('increment', 10)
```

**对象风格提交**

- 提交 mutation的另一种方式是直接使用包含 type属性的对象：

```
store.commit({
    type: 'increment',
    amount: 10
})
```

```
mutations: {
    increment (state,payload){
        state.count += payload.amount
    }
}
```

**Mutation 必须是同步函数**
> 因为如果是异步回调的话会造成状态改变的不可追踪

**mapMutations**

> 在组件中使用 `this.$store('xxx')`  提交 mutation，或者使用 **mapMutation** 辅助函数将组件中的methods映射为 store.commit调用（需要在根节点注入 store）

```
<template>
  <div class="test">
    {{ name }}
    {{ count }}
    <div @click="changeName(item)">目前还有{{ doneTodos.length }}见事情没有做</div>
    <div v-for="(item, index) in doneTodos" :key="index">
      {{ item.content }}
    </div>
    <div>{{ getTodoById(3).id }},{{ getTodoById(3).content }}</div>
  </div>
</template>
<script type="text/ecmascript-6">
import store from "../store.js";
import { mapState,mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      item:{
        name:"wzy"
      }
    };
  },
  computed: {
    ...mapState(["count", "name"]),
    ...mapGetters(["doneTodos", "getTodoById"]),
  },
  methods: {
    ...mapMutations({
      changeName:'CHANGE_NAME'
    })
   
  },
  mounted() {},
  components: {},
};
</script>
```

### Action

> Action 类似于 mutation，不同在于:
- Action 提交的是 mutation，而不是直接更改状态
- Action 可以包含任意异步操作

```
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

```

- Action 函数接受一个与store 实例具有相同方法和属性的context 对象，因此可以调用context.commit 提交一个mutation，或者通过 context.state 和 context.getters 来获取state和getters.



### Module

> 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：

```
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态

```