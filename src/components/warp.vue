<!--  -->
<template>
  <div class="warp">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
          <div v-for="item in list" :key="item.parentId">
            <Left :item="item"/>
          </div>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Left from "./left";
export default {
  data() {
    return {
      list: [
        {
          children: [
            {
             
              flag: "menu",
              id: "46025611226910727",
              menuIcon: "el-icon-house",
              menuName: "首页111-3",
              menuUrl: "home",
              parentId: "5",
               children: [
                {
                  children: [],
                  flag: "menu",
                  id: "46025611226910727",
                  menuIcon: "el-icon-house",
                  menuName: "首页111-3-1",
                  menuUrl: "home",
                  parentId: "6",
                },
              ]
            },
            {
              children: [],
              flag: "menu",
              id: "46025611226910727",
              menuIcon: "el-icon-house",
              menuName: "首页111-2",
              menuUrl: "home",
              parentId: "4",
            },
            {
              children: [],
              flag: "menu",
              id: "46025611226910727",
              menuIcon: "el-icon-house",
              menuName: "首页111-1",
              menuUrl: "home",
              parentId: "3",
            },
          ],
          flag: "menu",
          id: "46025611226910727",
          menuIcon: "el-icon-house",
          menuName: "首页111",
          menuUrl: "home",
          parentId: "1",
        },

        {
          children:[],
          flag: "menu",
          id: "46025611226910727",
          menuIcon: "el-icon-house",
          menuName: "正常",
          menuUrl: "home",
          parentId: "2",
        }
      ],
    };
  },

  components: { Left },

  computed: {},

  created() {},
  mounted() {},

  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>
<style lang="less" scoped>
.warp {
  width: 100%;
  height: 100vh;
  .el-container {
    width: 100%;
    height: 100vh;
    .el-header {
      background-color: #b3c0d1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }

    .el-aside {
      background-color: #d3dce6;
      color: #333;
      text-align: center;
      line-height: 200px;
    }

    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
  }
}
</style>