<template>
  <app-header />

  <router-view />

  <app-footer />
</template>

<script>

import { mapActions } from 'vuex';
import AppHeader from '@/components/Header';
import AppFooter from '@/components/Footer';

export default {
  components: { AppHeader, AppFooter },
	methods: mapActions(['fetchProducts']),
	async created() {
		await this.fetchProducts();
	},
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
  text-decoration: none;
  color: #0A1E32;
}

#app {
  height: 100vh;
}

</style>