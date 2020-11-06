const app = Vue.createApp({
  data() {
    return {
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    alert() {
      alert('Aleeert!');
    },
    confirmName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount('#events');
