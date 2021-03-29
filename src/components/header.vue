<template>
  <div class="header">
    <el-tabs :value="activeRouterTitle" @tab-click="handleClick" closable @tab-remove="removeCard" style="margin-left:200px">
      <el-tab-pane :label="item.title" :name="item.title" :url="item.path" v-for="item in routerArray" :key="item.path"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "Header",

  data() {
    return{
    }
  },
  computed:{
    ...mapState(['routerArray','activeRouterTitle'])
  },
  mounted() {
  },

  methods :{
    ...mapMutations(['DELETE_ROUTER','CHANGE_ROUTERTITLE']),
    handleClick(e) {
      console.log(e.$attrs)
      this.CHANGE_ROUTERTITLE(e.$attrs.label)
      this.$router.push({path:e.$attrs.url})
    },
    removeCard(e){
      console.log(e)
      this.DELETE_ROUTER(e)
    }
  }

}
</script>

<style lang="less" scoped>

</style>
