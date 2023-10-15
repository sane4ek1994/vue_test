<template>
  <div class="section">
    <div class="wrapper">
      <router-link v-for="product in allProducts" :key="product.id" :to="`/product/${product.id}`">
        <product-preview :product="product" />
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductPreview from '@/components/Products.vue';
import { mapGetters } from 'vuex';

export default {
  components: { ProductPreview },
  computed: mapGetters(['allProducts']),
}
</script>

<style>

.section {
  display: flex;
  justify-content: flex-start;
  padding: 79px 250px 112px 250px;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1400px;
}
</style>