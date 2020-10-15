const app = Vue.createApp({
  data() {
    return {
      pClass: '',
      pToggle: true,
      pInline: '',
    };
  },
  computed: {
    pClasses() {
      return {
        user1: this.pClass === 'user1',
        user2: this.pClass === 'user2',
        visible: this.pToggle,
        hidden: !this.pToggle,
      };
    },
  },
  watch: {},
  methods: {
    toggleParagraph() {
      this.pToggle = !this.pToggle;
    },
  },
});

app.mount('#styling');
