import { createStore } from 'vuex';
import { getProducts } from '@/services/api';

const store = createStore({
  state: {
    products: null,
    favorites: [],
    likes: Boolean
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    allFavorites(state) {
      return state.favorites;
    },
    getFavoritesLength(state) {
      return state.favorites.length;
    },
    getFavorites(state) {
      return (product) => {
        const index = state.favorites.findIndex((item) => item.id === product.id);

        return index !== -1;
      }
    }
  },
  actions: {
    async fetchProducts(store) {
      const { data: products } = await getProducts();
      store.commit('updateProducts', products);
    },
    addToFavorites(store, payload) {
      store.commit('addToFavorites', payload);
    }
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
    addToFavorites(state, product) {
      const index = state.favorites.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(product);
      }
    }
  }
});


export default store;