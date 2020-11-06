<template>
  <section>
    <form @submit.prevent>
      <div>
        <label>Name</label>
        <input v-model="enteredName" type="text" @input="setName" />
      </div>
      <div>
        <label>Phone</label>
        <input v-model="enteredPhone" type="text" />
      </div>
      <div>
        <label>Email</label>
        <input v-model="enteredEmail" type="text" />
      </div>
      <div>
        <button @click="setContact">Add Contact</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    setContact() {
      if (this.enteredName && this.enteredPhone && this.enteredEmail) {
        const newContact = {
          name: this.enteredName,
          phone: this.enteredPhone,
          email: this.enteredEmail,
        };
        this.$emit("on-submit-contact", newContact);
      }
    },
  },
};
</script>

<style>
</style>