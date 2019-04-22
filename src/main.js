import Vue from 'vue';
import App from './components/app/app';
import { createStore } from './store/store';

Vue.config.productionTip = false;


new Vue({
  el: '#app',
  components: { App },
  store: createStore(),
  template: '<App/>'
})
