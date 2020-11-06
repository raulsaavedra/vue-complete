<template>
  <section>
    <form @submit.prevent>
      <div class="form-field">
        <label>Name</label>
        <input
          :class="{ alert_input: alert }"
          placeholder="Your name"
          v-model="name"
          type="text"
        />
      </div>
      <div class="form-field">
        <label>Age</label>
        <input
          :class="{ alert_input: alert }"
          placeholder="Your age"
          v-model="age"
          type="text"
        />
      </div>
      <button @click="setUser" type="submit">Set User</button>
      <p v-if="alert">Please enter an name and age</p>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      alert: false,
    };
  },
  methods: {
    setUser() {
      if (this.name && this.age > 0) {
        this.$emit("set-user", this.name, this.age);
      } else {
        this.alert = true;
      }
    },
  },
};
</script>

<style>
</style>