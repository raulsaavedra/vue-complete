<template>
  <section>
    <h3>Name: {{ name }}</h3>
    <h4>Age: {{ age }}</h4>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: false,
    },
  },
};
</script>

<style>
</style>