<template>
  <div class="sales-radar">
    <div class="sales-radar-inner">
      <v-chart class="chart" :option="option" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "SalesRadar",
  setup() {
    const option = ref({
      radar: {
        name: {},
        indicator: [
          { name: "订单量", max: 6500 },
          { name: "热度", max: 16000 },
          { name: "配送", max: 30000 },
          { name: "客服", max: 38000 },
          { name: "访问量", max: 52000 },
          { name: "店铺量", max: 25000 },
        ],
      },
      series: [
        {
          name: "运营指标",
          type: "radar",
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: "预期",
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: "实际",
            },
          ],
        },
      ],
    });

    return { option };
  },
});
</script>

<style lang="scss" scoped>
.sales-radar {
  position: absolute;
  top: 3250px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 800px;
  padding: 25px 25px 0;
  box-sizing: border-box;

  .sales-radar-inner {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
  }
}
</style>
