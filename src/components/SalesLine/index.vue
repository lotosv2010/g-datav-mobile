<template>
  <div class="sales-line">
    <div class="sales-line-inner">
      <v-chart class="chart" :option="option" />
    </div>
  </div>
</template>

<script lang="ts">
import { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "SalesLine",
  provide: {
    [THEME_KEY]: "dark"
  },
  setup () {
    const axis = ["00:00", "08:00", "16:00", "24:00"];
    const data1 = [151, 532, 901, 334];
    const data2 = [320, 173, 501, 334];
    const data3 = [600, 600, 600, 600];

    const option = ref({
      title: {
        text: "分时访问&成交趋势图",
        textStyle: {
          color: '#fff'
        },
        top: 10,
        left: 10,
      },
      backgroundColor: "",
      grid: {
        left: "3%",
        right: "5%",
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: axis,
        boundaryGap: false,
        axisLabel: {
          color: 'rgba(255, 255, 255, .3)'
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: 'rgba(255, 255, 255, .3)'
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)"
          }
        }
      },
      series: [
        {
          name: "访问量",
          type: "line",
          data: data1,
          smooth: true,
          itemStyle: {
            opacity: 0,
            color: 'rgb(0, 160 ,233)'
          }
        },
        {
          name: "成交量",
          type: "line",
          data: data2,
          smooth: true,
          itemStyle: {
            opacity: 0,
            color: 'yellow'
          }
        },
        {
          name: "KPI",
          type: "line",
          data: data3,
          smooth: true,
          itemStyle: {
            opacity: 0,
            color: 'red'
          }
        },
      ]
    });

    return { option };
  }
});
</script>

<style lang="scss" scoped>
.sales-line {
  position: absolute;
  top: 950px;
  left: 0;
  width: 100%;
  height: 500px;
  z-index: 10;
  padding: 25px 25px 0;
  box-sizing: border-box;
  &-inner{
    width: 100%;
    height: 100%;
    background-color: rgba($color: #fff, $alpha: .05);
  }
}
</style>
