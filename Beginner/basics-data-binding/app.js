const app = Vue.createApp({
  data() {
    return {
      name: 'Raul',
      age: 20,
      imageUrl:
        'https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    };
  },
  methods: {
    age5() {
      return this.age + 5;
    },
    favoriteNumber() {
      const number = Math.random();
      if (number < 0.5) {
        return 0;
      }
      return 1;
    },
  },
});

app.mount('#user-goal');
