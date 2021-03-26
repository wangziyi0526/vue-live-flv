<!-- 左侧边栏 -->
<template>
  <div> 
      <el-submenu :index="item.parentId" v-if="item.children.length>0">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.menuName}}</span>
        </template>
        <el-menu-item-group v-for="it in item.children" :key='it.parentId'>
           <el-menu-item :index="it.parentId" v-if='it.children.length == 0'>{{it.menuName}}</el-menu-item>
            <div v-if="it.children.length >0">
                <My-el-submenu :item='it' />
            </div>
        </el-menu-item-group> 
      </el-submenu> 
      <el-menu-item index="2"  v-if="item.children.length==0">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.menuName}}</span>
      </el-menu-item>
      <my-el-submenu/>
  </div>
</template>

<script>
export default {
    name: 'My-el-submenu',
    props:{
        item:{
            type: Object,
            default:{}
        }
    },
  data() {
    return {};
  },

  components: {},

  computed: {},

  created() {},
  mounted() {
      console.log(this.item)
  },

  methods: {},
};
</script>
<style scoped>
</style>