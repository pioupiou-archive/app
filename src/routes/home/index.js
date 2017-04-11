import Vue from 'vue'
import Home from '@/routes/home/template'

export default {
  path: '/home',
  name: 'home',
  label: Vue.prototype.$pgettext('Route label', 'Home'),

  icon: 'list-ul',
  nav: true,
  mobile: true,

  component: Home
}