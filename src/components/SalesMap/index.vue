<template>
  <div class="sales-map">
    <div class="sales-map-inner">
      <v-chart class="chart" :option="option" />
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "SalesMap",
  setup(props) {
    const option = ref({});
    onMounted(() => {
      option.value = {
        series: [
          {
            type: "gauge",
            axisLine: {
              lineStyle: {
                width: 10,
                color: [
                  [0.3, "#67e0e3"],
                  [0.7, "#37a2da"],
                  [1, "#fd666d"],
                ],
              },
            },
            pointer: {
              itemStyle: {
                color: "auto",
              },
            },
            axisTick: {
              distance: -20,
              length: 5,
              lineStyle: {
                color: "#fff",
                width: 2,
              },
            },
            splitLine: {
              distance: -20,
              length: 20,
              lineStyle: {
                color: "#fff",
                width: 4,
              },
            },
            axisLabel: {
              color: "auto",
              distance: 20,
              fontSize: 20,
            },
            detail: {
              valueAnimation: true,
              formatter: "{value} 分",
              color: "auto",
            },
            data: [
              {
                value: 70,
              },
            ],
          },
        ],
      };
    });
    return {
      option,
    };
  },
});
</script>

<style lang="scss" scoped>
.sales-map {
  position: absolute;
  top: 1850px;
  left: 0;
  width: 100%;
  height: 600px;
  z-index: 10;
  padding: 25px 25px 0;
  box-sizing: border-box;
  &-inner {
    width: 100%;
    height: 100%;
    background-color: rgba($color: #fff, $alpha: 0.05);
  }
}
</style>
