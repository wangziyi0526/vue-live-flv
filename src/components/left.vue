<!-- 左侧边栏 -->
<template>
  <div>
      <el-submenu :index="item.menuUrl" v-if="item.children.length &&item.children.length>0">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.menuName}}</span>
        </template>
        <el-menu-item-group v-for="it in item.children" :key='it.menuUrl'>
           <el-menu-item :index="it.menuUrl" v-if='it.children.length == 0' >{{it.menuName}}</el-menu-item>
            <div v-if="it.children.length >0">
                <left :item='it' />
            </div>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item :index="item.menuUrl"  v-if="!item.children.length">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.menuName}}</span>
      </el-menu-item>
      <left/>
  </div>
</template>

<script>
export default {
    name: 'Left',
    props:{
        item:{
            type: Object,
            default: ()=>{
              return {}
            }

        }
    },
  data() {
    return {};
  },

  components: { },

  computed: {},

  created() {},
  mounted() {
   },

  methods: {

  },
};
</script>
<style scoped>
</style>
