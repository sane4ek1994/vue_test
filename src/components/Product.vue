<template>
  <div class="link">
    <router-link to="/">Главная</router-link> › {{ product.title }}
  </div>
  <div class="section">
    <div v-if="product" class="product">
      <div class="product__img">
        <img :src="product.image" alt="">
      </div>
      <div class="product__info">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }} руб.</p>
        <button class="product__actions">Избранное</button>
      </div>
    </div>
    <div v-else>404</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters(['allProducts']),
		product() {
			return this.allProducts && this.allProducts.find((item) => item.id === +this.$route.params.id);
		}
	},
  methods: {
    addToFavorites(product) {
      this.$store.dispatch('addToFavorites', product);
    }
  },
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

.product {
  display: flex;
  gap: 40px;
}

.product__img {
  width: 680px;
  height: 715px;
  border: solid #E5E5E5 1px;
  text-align: center;
}
.product__img img {
  max-height: 700px;
  max-width: 600px;
}

.product__info h2 {
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  padding-bottom: 24px;
}
.product__info p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 24px;
}

.product__info button {
  background: #ffffff;
  border: solid #0A1E32 1px;
  border-radius: 4px;
  width: 200px;
  height: 48px;
  padding: 10px;
}

</style>