<!--  -->
<template>
  <div class="node" :node-name="nodeName"  @mousedown="startDrag">
    <img class="logo" :src="logo" alt="" />
    <div class="label">{{ nodeName }}</div>
  </div>
</template>

<script>
import { Graph, Addon } from "@antv/x6";
const { Dnd } = Addon;

export default {
  props: {
    graph: {
      type: Object,
      default: () => {
        return new Graph({});
      },
    },
    dnd: {
      type: Object,
      default: () => {
        return new Dnd({});
      },
    },
    logo: {
      type: String,
      default: () => {
        return "";
      },
    },
    nodeName: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  created() {},
  mounted() {},

  methods: {
    startDrag(e) {
      console.log(this.logo);
      const node = this.graph.createNode({
        width: 150,
        height: 40,
        label: this.nodeName,
        labelRefX: 90,
        logo: this.logo,
        ports: {
          groups: {
            // 输入链接桩群组定义
            in: {
              position: "left",
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: "#31d0c6",
                  strokeWidth: 1,
                  fill: "#fff",
                },
              },
            },
            // 输出链接桩群组定义
            out: {
              position: "right",
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: "#31d0c6",
                  strokeWidth: 1,
                  fill: "#fff",
                },
              },
            },
          },
          items: [
            {
              id: "port1",
              group: "in",
            },

            {
              id: "port5",
              group: "out",
            },
          ],
        },
      });
      this.dnd.start(node, e);
    },
  },
};
</script>
<style lang="less" scoped>
 .node {
    position: relative;
    width: 150px;
    height: 40px;
    margin-top: 16px;
    cursor: move;
    user-select: none;
    border: 1px solid #ddd;
    .logo {
      width: 40px;
      height: 38px;
      position: absolute;
      left: 0;
      top: 0;
    }
    .label {
      width: 110px;
      height: 40px;
      position: absolute;
      text-align: center;
      line-height: 40px;
      left: 40px;
      top: 0;
    }
  }
</style>