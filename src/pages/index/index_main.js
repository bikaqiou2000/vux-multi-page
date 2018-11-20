// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './index'

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  render: h => h(App)
});
vm.$mount('#app-box');
