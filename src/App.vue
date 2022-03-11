<template>
  <div class="datav-wrapper">
    <TopHeader />
    <SalesBar />
    <SalesLine />
    <SalesPie />
    <SalesMap />
    <SalesSun />
    <SalesRadar />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import TopHeader from "./components/TopHeader/index.vue";
import SalesBar from "./components/SalesBar/index.vue";
import SalesLine from "./components/SalesLine/index.vue";
import SalesPie from "./components/SalesPie/index.vue";
import SalesMap from "./components/SalesMap/index.vue";
import SalesSun from "./components/SalesSun/index.vue";
import SalesRadar from "./components/SalesRadar/index.vue";

export default defineComponent({
  name: "App",
  components: {
    TopHeader,
    SalesBar,
    SalesLine,
    SalesPie,
    SalesMap,
    SalesSun,
    SalesRadar,
  },
  setup () {
    return {};
  }
});
</script>

<style lang="scss">
body {
  background-image: url('./assets/datav-mobile-bg2.jpeg');
  background-size: 100%;
}
#app {
  position: relative;
  height: 100%;
  overflow: scroll;
  .datav-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url('./assets/datav-mobile-bg.jpeg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
</style>
