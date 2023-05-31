<template>
  <div>
    <label for="name">
      <span v-show="isErrorName" style="color: red">Введите имя</span>
      <span>Имя</span>
      <input
          @blur="blurNameInput"
          @focus="isErrorName = false"
          v-model="name"
          id="name" type="text">
    </label>
    <label for="age">
      <span v-show="isErrorAge" style="color: red">Введите возраст</span>
      <span>Возраст</span>
      <input
          @blur="blurAgeInput"
          @focus="isErrorAge = false"
          v-model="age"
          id="age" type="number">
    </label>
    <div>
      <button @click="$emit('remove', child.id)">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['child','currentChild'],
  name: "InputChild",
  data() {
    return {
      name: null,
      age: null,
      isErrorName: false,
      isErrorAge: false,
    }
  },
  methods: {
    blurNameInput() {
      if (this.name === null) {
        this.isErrorName = true
      } else {
        this.currentChild.name = this.name
      }
    },
    blurAgeInput() {
      if (this.age === null) {
        this.isErrorAge = true
      }else {
        this.currentChild.age = this.age
      }
    },
  },
}
</script>

<style scoped>

</style>