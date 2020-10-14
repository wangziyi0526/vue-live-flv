<template>
  <div class="page">
    <div id="main" style="width: 100%;height:500px;margin: 0 auto"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import echarts from "echarts/lib/echarts";

export default {
  data() {
    return {
      options: {
        title: {
          text: "",
        },
        color: ["#407ffd"],
        tooltip: {
          trigger: "axis",
          
          backgroundColor:'#5397FF',

          axisPointer: {
            type: "cross",
            label: {
              show: false,
            },
          },
          formatter: "{b} : {c}%",
        
        },
        legend: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "衬衫"],
          axisLabel: {
            width: "5%",
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} %",
          },
        },
        series: [
          {
            data: [10, 20, 30, 40, 5, 10],
            type: "bar",
            // showBackground: true,
            
            barWidth: 30,
            barMaxWidth: 40,  
            itemStyle: {
                    // emphasis: {
                    //     barBorderRadius: 20
                    // },
                    normal: {
                        barBorderRadius: [30,30,0 ,0],
                        color: new echarts.graphic.LinearGradient(
                            0, 1, 1, 0,
                            [
                                {offset: 0, color: '#6414FF'},
                                {offset: 1, color: '#407FFD'}

                            ]
                        )
                    }
                },
                 
          },
        ],
      },
    };
  },
  mounted() {
    let that = this
    let myChart = echarts.init(document.getElementById("main"));
    myChart.setOption(this.options);
    myChart.on('mouseover', function (params) {
     that.$emit("chartFunc",params)
});
  },
  components: {},
 
};
</script>

<style>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
