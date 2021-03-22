<template>
  <div class="test">
    {{ name }}
    {{ count }}
    <div @click="changeName(item)">目前还有{{ doneTodos.length }}见事情没有做</div>
    <div v-for="(item, index) in doneTodos" :key="index">
      {{ item.content }}
    </div>
    <div>{{ getTodoById(3).id }},{{ getTodoById(3).content }}</div>
    <input type="text" v-focus>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState,mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      item:{
        name:"wzy"
      }
    };
  },
  computed: {
    ...mapState(["count", "name"]),
    ...mapGetters(["doneTodos", "getTodoById"]),
  },
  methods: {
    ...mapMutations({
      changeName:'CHANGE_NAME'
    })
   
  },
  mounted() {},
  components: {},
};
</script>
