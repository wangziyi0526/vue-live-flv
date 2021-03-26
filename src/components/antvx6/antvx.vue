
<!-- 流程图 -->
<template>
  <div class="antvContainer">
    <div v-for="node_type in nodeList" :key="node_type.nodeType">
      <el-collapse v-if="node_type.nodeType === nodeType" accordion>
        <el-collapse-item
          v-for="node_group in node_type.children"
          :key="node_group.groupName"
          :title="node_group.groupName"
          :name="node_group.groupName"
          class="collapse-item"
        >

            <Base 
             v-for="node in node_group.children"
 
            :key="node"
             :graph="graph"
            :dnd="dnd"
            :logo="node.logo"
            :node-name="node.nodeName"
            @mousedown="startDrag(node, $event)">
            </Base>
        
        </el-collapse-item>
      </el-collapse>
    </div>
    <div id="container"></div>
    <img style="width:100px;height:70px" src="/static/img/星环数据湖.c786757.png" alt="">
  </div>
</template>

<script>
import { Graph, Shape, Dom, Addon } from "@antv/x6";
 const { Dnd } = Addon;
 import Base from './Base'
 import { initBaseNode } from "./base-node.js";
import { initBezierEdge } from "./egde/bezier-edge.js";
export default {
  data() {
    return {
      dnd: {},
      graph: {},
      nodeType: "store",
      optionsNodeType: [
        {
          value: "store",
          label: "存储",
        },
        {
          value: "transfer",
          label: "中转",
        },
        {
          value: "process",
          label: "处理",
        },
        {
          value: "application",
          label: "应用",
        },
        {
          value: "custom",
          label: "自定义",
        },
      ],
      nodeList: [
        {
          nodeType: "store",
          typeName: "存储",
          children: [
            {
              groupName: "数据库",
              children: [
                {
                  id:'12212',
                  nodeName: "Mysql",
                  logo: require("../../assets/company-logo/Mysql.png"),
                },
                {
                  nodeName: "Oracle",
                  logo: require("@/assets/company-logo/Oracle.png"),
                },
                {
                  nodeName: "Postgres",
                  logo: require("@/assets/company-logo/Postgres.png"),
                },
                {
                  nodeName: "SQL Server",
                  logo: require("@/assets/company-logo/SQL Server.png"),
                },
              ],
            },
            {
              groupName: "数据湖",
              children: [
                {
                  nodeName: "星环数据湖",
                  logo: require("@/assets/company-logo/星环数据湖.png"),
                },
                {
                  nodeName: "AWS数据湖",
                  logo: require("@/assets/company-logo/AWS数据湖.png"),
                },
              ],
            },
            {
              groupName: "分布式数据库",
              children: [
                {
                  nodeName: "MongoDb",
                  logo: require("@/assets/company-logo/MongoDb.png"),
                },
                {
                  nodeName: "Hbase",
                  logo: require("@/assets/company-logo/Hbase.png"),
                },
              ],
            },
          ],
        },
        {
          nodeType: "transfer",
          typeName: "中转",
          children: [
            {
              groupName: "数据交换",
              children: [
                {
                  nodeName: "前置机",
                  logo: require("@/assets/company-logo/前置机.png"),
                },
              ],
            },
            {
              groupName: "数据采集",
              children: [
                {
                  nodeName: "ETL",
                  logo: require("@/assets/company-logo/ETL.png"),
                },
              ],
            },
            {
              groupName: "数据库连接",
              children: [
                {
                  nodeName: "Hive",
                  logo: require("@/assets/company-logo/Hive.png"),
                },
                {
                  nodeName: "JDBC",
                  logo: require("@/assets/company-logo/JDBC.png"),
                },
              ],
            },
          ],
        },
        {
          nodeType: "process",
          typeName: "处理",
          children: [
            {
              groupName: "数据治理",
              children: [
                {
                  nodeName: "数据清洗",
                  logo: require("@/assets/company-logo/数据清洗.png"),
                },
                {
                  nodeName: "数据脱敏",
                  logo: require("@/assets/company-logo/数据脱敏.png"),
                },
              ],
            },
            {
              groupName: "隐私保护",
              children: [
                {
                  nodeName: "隐私沙盒",
                  logo: require("@/assets/company-logo/隐私沙盒.png"),
                },
              ],
            },
            {
              groupName: "数据计算",
              children: [
                {
                  nodeName: "用户画像",
                  logo: require("@/assets/company-logo/用户画像.png"),
                },
              ],
            },
          ],
        },
        {
          nodeType: "application",
          typeName: "应用",
          children: [
            {
              groupName: "营销",
              children: [
                {
                  nodeName: "短信平台",
                  logo: require("@/assets/company-logo/短信平台.png"),
                },
              ],
            },
          ],
        },
        {
          nodeType: "custom",
          typeName: "自定义",
          children: [],
        },
      ],
      nodeName: "",
      nodeId:'',
        };
  },

  components: {
    Base
  },

  computed: {},
  watch: {},

  created() {},
  mounted() {
    this.init();
    this.initDnd();
  },

  methods: {
    init() {
         initBaseNode();
        initBezierEdge();
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
       graph.centerContent(); // 居中

      graph.on("cell:click", ({ cell, x, y, edge, options }) => {
        console.log(cell,options);
      });

      this.graph = graph;
    
    },
    async initDnd() {
      this.dnd = new Dnd({
        target: this.graph,
        animation: true,
      });
    },
    
  },
};
</script>
<style>
.antvContainer {
  width: 100%;
  display: flex;
}
p {
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
}
p img {
  width: 40px;
  height: 40px;
}
</style>
