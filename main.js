const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    addToCart(id) {
      this.cart.push(id);
    },
    removeFromCart(id) {
      this.cart.indexOf(id) !== -1 &&
        this.cart.splice(this.cart.indexOf(id), 1);
    },
  },
});
