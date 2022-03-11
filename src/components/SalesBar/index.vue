<template>
  <div class="sales-bar">
    <div class="sales-bar-inner">
      <v-chart class="chart" :option="option" />
    </div>
  </div>
</template>

<script lang="ts">
import { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "SalesBar",
  provide: {
    [THEME_KEY]: "dark"
  },
  setup () {
    const axis = ["南京", "深圳", "杭州", "上海", "北京", "全国"];
    const data1 = [68203, 73489, 79034, 204970, 231744, 630230];
    const data2 = [49325, 53438, 61000, 221594, 234141, 681807];
    const option = ref({
      title: {
        text: "今日销售额：253,089.01元",
        textStyle: {
          color: '#fff'
        },
        top: 10
      },
      backgroundColor: "",
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: "value",
        axisLabel: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)"
          }
        }
      },
      yAxis: {
        type: "category",
        data: axis,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      series: [
        {
          name: "平台流量",
          type: "bar",
          data: data1,
          itemStyle: {
            color: 'rgb(255, 0 ,0)'
          }
        },
        {
          name: "外部流量",
          type: "bar",
          data: data2,
          itemStyle: {
            color: 'rgb(0, 140 ,217)'
          }
        }
      ]
    });

    return { option };
  }
});
</script>

<style lang="scss" scoped>
.sales-bar {
  position: absolute;
  top: 300px;
  left: 0;
  width: 100%;
  height: 650px;
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
