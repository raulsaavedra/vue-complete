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
    setName(e) {
      this.name = e.target.value;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount('#events');
