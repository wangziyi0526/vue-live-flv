<!-- 流程图 -->
<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import { Graph, Shape, Dom } from "@antv/x6";

export default {
  data() {
    return {
  
      graph:{}
    };
  },

  components: {},

  computed: {},
  watch: {},

  created() {},
  mounted() {
    this.init();
  },

  methods: {
    init() {
      const rect = new Shape.Rect({
        id: "node1",
        x: 40,
        y: 40,
        width: 100,
        height: 40,
        zIndex: 2,
        attrs: {
          body: {
            fill: "#31d0c6",
          },
          label: {
            text: "Hello",
            fill: "white",
          },
        },
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

      const circle = new Shape.Circle({
        id: "node2",
        x: 280,
        y: 200,
        width: 60,
        height: 60,
        label: "circle",
        zIndex: 2,
        ports: [
          {
            id: "port1",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "red",
                strokeWidth: 1,
                fill: "#fff",
              },
            },
          },
          {
            id: "port2",
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
         
        ],
      });

      const edge = new Shape.Edge({
        id: "线",
        source: rect,
        target: circle,
        zIndex: 1,
      });
      let graph = new Graph({
        container: document.getElementById("container"),
        width: 900,
        height: 800,
        panning: true, // 整体拖拽
        background: {
          color: "#fffbe6", // 设置画布背景颜色
        },
        grid: {
          size: 5, // 网格大小 10px
          visible: true, // 渲染网格背景
        },
      });
      graph.addNode(rect);
      graph.addNode(circle);
      // graph.addEdge(edge);
      graph.centerContent(); // 居中
      graph.on("cell:click", ({ cell, x, y, edge, options }) => {
        console.log(cell, edge, x, y, options);
      });
       this.graph = graph
       console.log(graph);
    },
  },
};
</script>
<style>
.mask {
  width: 200px;
  height: 200px;
  border-radius: 4px;
  background: red;
  position: absolute;
  top: 500px;
  left: 450px;
}
</style>