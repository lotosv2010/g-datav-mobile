import { createApp } from 'vue'
import App from './App.vue'
// px2rem
import 'amfe-flexible'
// echarts
import 'echarts';
import VChart, { THEME_KEY } from 'vue-echarts'
// reset
import './styles/reset.scss'

createApp(App).component('VChart', VChart).mount('#app')
