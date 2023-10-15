<template>
  <div class="link">
    <router-link to="/">Главная</router-link> > Избранное
  </div>
  <div class="section">
    <div v-if="!allFavorites.length">
      <h1>У вас пока нет избранного</h1>
    </div>
    <div v-else class="wrapper" >
      <router-link v-for="product in allFavorites" :key="product" :to="`/favorites`">
        <router-link :to="`/product/${product.id}`">
          <product-preview :product="product" :is-favorite-page="true" />
        </router-link>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductPreview from '@/components/Products.vue';

export default {
  components: { ProductPreview },
  computed: mapGetters(['allFavorites']),
}
</script>

<style scoped>

.link {
  margin: 33px 0 0 250px;
  text-decoration: underline;
}

.link:hover {
  text-decoration: none;
}

</style>