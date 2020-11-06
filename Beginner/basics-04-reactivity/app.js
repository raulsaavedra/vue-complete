const app = Vue.createApp({
  data() {
    return {
      currentValue: 5,
    };
  },
  computed: {
    result() {
      if (this.currentValue < 37) {
        return 'Not there yet!';
      }
      if (this.currentValue === 37) {
        return 'Success';
      }
      if (this.currentValue > 37) {
        return 'Too much!';
      }
    },
  },
  watch: {
    currentValue() {
      if (this.currentValue > 37) {
        const that = this;
        setTimeout(() => {
          that.currentValue = 0;
        }, 1000);
      }
    },
  },
  methods: {
    add(number) {
      this.currentValue = this.currentValue + number;
    },
  },
});

app.mount('#events');
