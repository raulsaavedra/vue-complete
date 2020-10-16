const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskValue: '',
      showList: true,
    };
  },
  computed: {
    buttonToggle() {
      return this.showList ? 'Hide List' : 'Show List';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskValue);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleList() {
      this.showList = !this.showList;
    },
  },
});

app.mount('#user-goals');
