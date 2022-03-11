<template>
  <div class="sales-pie">
    <div class="sales-pie-inner">
      <div class="sales-pie-inner-item">
        <v-chart class="chart" :option="option1" />
      </div>
       <div class="sales-pie-inner-item">
        <v-chart class="chart" :option="option2" />
      </div>
       <div class="sales-pie-inner-item">
        <v-chart class="chart" :option="option3" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "SalesPie",
  setup () {
    const option1 = ref({});
    const option2 = ref({});
    const option3 = ref({});
    const createOption = (title: string, value: string, data: number[]) => {
      return {
        title: [{
          text: title,
          textStyle: {
            color: 'rgba(255, 255, 255, .3)',
            fontSize: 12
          },
          top: 3
        },
        {
          text: value,
          textStyle: {
            color: 'rgba(255, 255, 255)',
            fontSize: 16,
            fontWeight: 500
          },
          top: '43%',
          left: '32%'
        }],
        tooltip: {
          trigger: 'item',
          formatter(params: any) {
            return `${params.data.name}<br />${params.data.value}`
          }
        },
        series: [
          {
            name: title,
            type: "pie",
            radius: ['65%', '80%'],
            data: [{
              value: data[0],
              name: '数据',
              itemStyle: {
                color: 'rgba(0, 140, 217)'
              },
            },
            {
              value: data[1],
              name: '数据',
              itemStyle: {
                color: 'rgba(35, 69, 145)'
              },
            }],
            label: {
              show: false,
            },
          }
        ]
      }
    }
    onMounted(() => {
      option1.value = createOption('转化率', '13%', [1000, 130]);
      option2.value = createOption('退单率', '5%', [1000, 50]);
      option3.value = createOption('跳失率', '43%', [1000, 430]);
    });
    return {
      option1,
      option2,
      option3,
    };
  }
});
</script>

<style lang="scss" scoped>
.sales-pie {
  position: absolute;
  top: 1450px;
  left: 0;
  width: 100%;
  height: 400px;
  z-index: 10;
  padding: 25px 12.5px 0;
  box-sizing: border-box;
  &-inner{
    display: flex;
    width: 100%;
    height: 100%;
    &-item {
      flex: 0 0 33.3333%;
      width:33.3333%;
      height: 100%;
      padding: 0 12.5px;
      box-sizing: border-box;
      .chart {
        background-color: rgba($color: #fff, $alpha: .05);
      }
    }
  }
}
</style>
