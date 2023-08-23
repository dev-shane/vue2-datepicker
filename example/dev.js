// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';

import DatePicker from '../src/index';
import '../src/style/index.scss';
import '../src/locale/zh-cn';

import App from './app';

import SimpleDateCell from './demo/SimpleDateCell.vue';

Vue.component('simple-date-cell', SimpleDateCell);

DatePicker.install(Vue);
DatePicker.locale('en');

new Vue({
  render: h =>
    h(App, {
      props: {
        changeLocale: DatePicker.locale,
      },
    }),
}).$mount('#app');
