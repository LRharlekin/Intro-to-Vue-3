app.component("product-details", {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template:
    /* html */
    `<div class="product-details">
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
      </div>`,
  data() {
    return {};
  },
  methods: {},
  computed: {},
});
