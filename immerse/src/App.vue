<template>
  <div>
    <!-- Lees een rss feed -->
    <!-- List pagina -->
    <!-- Detail pagina: -->
    <!-- lees 1 artikel van de rss feed -->
    <!-- Als je op een woord klikt moet er een vertaling worden gehaald -->
    <!-- 1 component waar de vertaling wordt weergegeven, 1 voor het artikel -->
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { get } from './http';
import axios from 'axios';

import FeedList from './components/feed-list';
import store from './store';

console.log(VueRouter);

Vue.use(Vuex);

export default {
  components: {
  },
  store: new Vuex.Store(store),
  router: new VueRouter({
    routes: [
      {
        path: '/',
        component: FeedList,
      }
    ]
  }),
  data: () => ({
    items: [],
  }),
  mounted() {
  }
}
</script>

<style>
</style>
