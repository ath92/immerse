<template>
  <div>
    <!-- Lees een rss feed -->
    <!-- List pagina -->
    <!-- Detail pagina: -->
    <!-- lees 1 artikel van de rss feed -->
    <!-- Als je op een woord klikt moet er een vertaling worden gehaald -->
    <!-- 1 component waar de vertaling wordt weergegeven, 1 voor het artikel -->

  </div>
</template>

<script>
import { get } from './http';
import axios from 'axios';

export default {
  components: {
  },
  mounted() {
    console.log('this first?');
    axios.get('http://localhost:3000').then(response => {
      console.log('kjnasdkjnasdjknasd');
      console.log(response, 'ahahaha');
    }).catch(error => console.log(error, 'jhbhjbjhb'));
  }
}
</script>

<style>
</style>
