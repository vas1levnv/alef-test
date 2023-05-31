<template>
  <form @submit.prevent class="main-form">
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
      <button
          @click="addChild"
          v-show="children.length < 6"
          :disabled="checkIsEmptyInputs">Добавить ребенка
      </button>
      <div v-show="children.length > 0 && children.length <6">
        <label for="nameChild">
          <span v-show="isErrorNameChild" style="color: red">Введите имя</span>
          <span>Имя</span>
          <input
              @blur="blurNameInputChild"
              @focus="isErrorNameChild = false"
              v-model="nameChild"
              id="nameChild" type="text">
        </label>
        <label for="ageChild">
          <span v-show="isErrorAgeChild" style="color: red">Введите возраст</span>
          <span>Возраст</span>
          <input
              @blur="blurAgeInputChild"
              @focus="isErrorAgeChild = false"
              v-model="ageChild"
              id="ageChild" type="number">
        </label>
      </div>
    </div>
    <div v-for="child in children">
      <div>{{ child.name }}</div>
      <div>{{ child.age }}</div>
      <button @click="removeChild(child.id)">Удалить</button>
    </div>
    <!--    <InputChild v-for="child in children"
                    @remove="removeChild"
                    v-bind:child="child"
                    v-bind:currentChild="currentChild"
                    :key="child"/>-->
    <button @click="console.log(children)">children</button>
  </form>
</template>

<script>

import InputChild from "@/components/InputChild.vue";

export default {
  name: "Main",
  components: {InputChild},

  data() {
    return {
      name: null,
      age: null,
      isErrorName: false,
      isErrorAge: false,
      nameChild: null,
      ageChild: null,
      isErrorNameChild: false,
      isErrorAgeChild: false,
      isShowChildInputs: false,
      childInc: 0,
      currentChild: {},
      children: [],
    }
  },
  methods: {
    blurNameInput() {
      if (this.name === null) {
        this.isErrorName = true
      }
    },
    blurAgeInput() {
      if (this.age === null) {
        this.isErrorAge = true
      }
    },

    blurNameInputChild() {
      if (this.nameChild === null) {
        this.isErrorNameChild = true
      } else {
        this.currentChild.name = this.nameChild
      }
    },
    blurAgeInputChild() {
      if (this.ageChild === null) {
        this.isErrorAgeChild = true
      } else {
        this.currentChild.age = this.ageChild
      }
    },
    addChild() {
      this.childInc += 1
      this.children = [...this.children, {
        id: this.childInc,
        name: this.currentChild.name,
        age: this.currentChild.age
      }]
      this.nameChild=''
      this.ageChild=''
    },
    removeChild(id) {
      this.children = this.children.filter(c => c.id !== id)
    }

  },
  computed: {
    checkIsEmptyInputs: function () {
      return !(this.name !== null && this.age !== null);
    }
  }

}
</script>

<style>

.main-form {
  margin: 30px 0;
}


label span {
  display: block;
}

</style>