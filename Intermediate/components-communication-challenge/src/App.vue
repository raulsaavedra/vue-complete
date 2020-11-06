<template>
  <div>
    <active-user :name="user.name" :age="user.age"></active-user>
    <user-data @setUser="updateUser" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: {
        name: "Raul",
        age: 20,
      },
    };
  },
  methods: {
    updateUser(name, age) {
      const newUser = {
        name,
        age: +age,
      };
      this.user = newUser;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
html {
  font-family: "Lato", sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  text-align: center;
}
form {
  max-width: 30rem;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
label {
  font-weight: bold;
}
input {
  padding: 5px;
  border: 2px solid green;
}
button {
  font-weight: bold;
  color: white;
  background: green;
  padding: 5px 10px;
  margin-top: 10px;
}
.form-field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.alert_input {
  border: 2px solid red;
}
</style>