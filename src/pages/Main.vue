<template>
  <form @submit.prevent class="main-form">
    <div class="main-form-title">Персональные данные</div>
    <div style="margin-bottom: 33px">
      <label for="name">
        <span v-show="isErrorName" class="main-form-error">Введите имя</span>
        <span class="main-form-text">Имя</span>
        <input
            @blur="blurNameInput"
            @focus="isErrorName = false"
            v-bind:value="name"
            placeholder="Введите имя"
            @input="name=$event.target.value"
            id="name" type="text">
      </label>
      <label for="age">
        <span v-show="isErrorAge" class="main-form-error">Введите возраст</span>
        <span class="main-form-text">Возраст</span>
        <input
            @blur="blurAgeInput"
            @focus="isErrorAge = false"
            v-bind:value="age"
            placeholder="Введите возраст"
            @input="age=$event.target.value"
            id="age" type="number">
      </label>
    </div>
    <div>
      <div style="display: flex;justify-content: space-between;margin-bottom: 11px">
        <div style="font-weight: 500;">
          Дети (макс. 5)
        </div>
        <button
            class="btn btn-primary-outline"
            @click="addChild"
            v-show="children.length < 6"
            :disabled="checkIsEmptyInputs">
          <span class="btn-plus"></span>
          <span>Добавить ребенка</span>
        </button>
      </div>
      <div v-show="children.length > 0 && children.length <6">
        <label for="nameChild">
          <span v-show="isErrorNameChild" class="main-form-error">Введите имя</span>
          <span>Имя ребенка</span>
          <input
              @blur="blurNameInputChild"
              @focus="isErrorNameChild = false"
              v-bind:value="nameChild"
              placeholder="Введите имя ребенка"
              @input="setNameInputChild"
              id="nameChild" type="text">
        </label>
        <label for="ageChild">
          <span v-show="isErrorAgeChild" class="main-form-error">Введите возраст</span>
          <span>Возраст ребенка</span>
          <input
              @blur="blurAgeInputChild"
              @focus="isErrorAgeChild = false"
              v-bind:value="ageChild"
              placeholder="Введите возраст ребенка"
              @input="setAgeInputChild"
              id="ageChild" type="number">
        </label>
      </div>
    </div>
    <div class="main-form-child-item" v-show="child.name" v-for="child in children" :key="child.id">
      <div class="main-form-child-item-content">
        <div>Имя</div>
        <div>{{ child.name }}</div>
      </div>
      <div class="main-form-child-item-content">
        <div>Возраст</div>
        <div>{{ child.age }}</div>
      </div>
      <button class="main-form-child-item-btn" @click="removeChild(child.id)">Удалить</button>
    </div>
    <button v-show="children.length>0" class="btn btn-primary" :disabled="checkIsSaveBtn" @click="saveForm">Сохранить
    </button>
  </form>
</template>

<script>

export default {
  name: "Main",

  data() {
    return {
      name: '',
      age: '',
      isErrorName: false,
      isErrorAge: false,
      nameChild: '',
      ageChild: '',
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
      if (this.name === '') {
        this.isErrorName = true
      }
    },
    blurAgeInput() {
      if (this.age === '') {
        this.isErrorAge = true
      }
    },

    blurNameInputChild() {
      if (this.nameChild === '') {
        this.isErrorNameChild = true
      }
    },
    blurAgeInputChild() {
      if (this.ageChild === '') {
        this.isErrorAgeChild = true
      }
    },
    setNameInputChild() {
      this.nameChild = event.target.value
      this.currentChild.name = this.nameChild
    },
    setAgeInputChild() {
      this.ageChild = event.target.value
      this.currentChild.age = this.ageChild
    },


    addChild() {
      this.childInc += 1
      this.children = [...this.children, {
        id: this.childInc,
        name: this.currentChild.name,
        age: this.currentChild.age
      }]
      this.nameChild = ''
      this.ageChild = ''
      this.currentChild.name = ''
      this.currentChild.age = ''
    },
    removeChild(id) {
      this.children = this.children.filter(c => c.id !== id)
    },

    saveForm() {
      localStorage.clear();
      if (this.children.length < 5) {
        this.children = [...this.children, {
          id: this.childInc,
          name: this.currentChild.name,
          age: this.currentChild.age
        }]
      }
      this.children.splice(0, 1)
      localStorage.setItem('children', JSON.stringify(this.children))
      localStorage.setItem('name', this.name)
      localStorage.setItem('age', this.age)
      this.$router.push({path: 'preview'})
    }

  },
  computed: {
    checkIsEmptyInputs: function () {
      if (this.children.length > 0 && this.currentChild.name === '' || this.currentChild.age === '') {
        return true
      } else {
        return !(this.name !== '' && this.age !== '');
      }
    },

    checkIsSaveBtn: function () {
      if (this.children.length < 1) {
        return true
      } else if (this.children.length === 6) {
        return false
      } else if (this.children.length > 0 && this.currentChild.name === '' || this.currentChild.age === '') {
        return true
      } else {
        return !(this.name !== '' && this.age !== '');
      }
    },
  }

}
</script>

<style>

.main-form-title {
  font-weight: 500;
  margin-bottom: 20px;
}

label {
  display: block;
  width: 100%;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 8px 16px;
  font-size: 14px;
}

label input {
  width: 100%;
  outline: none;
  border: none;
}

.main-form-text {
  color: rgba(17, 17, 17, 0.48);
  margin-bottom: 2px;
}

.main-form-error {
  color: red;
  margin-bottom: 2px;
}

label span {
  display: block;
}

.btn {
  display: block;
  border-radius: 100px;
  font-size: 14px;
  padding: 10px 20px;
  transition: all .3s ease;
  background: white;
  cursor: pointer;
}

.btn-primary-outline {
  color: #01A7FD;
  border: 2px solid #01A7FD;
  display: flex;
  align-items: center;
}

.btn-plus {
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  display: inline-block;
}

.btn-plus:before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  width: 2px;
  border-radius: 138px;
  background: #01A7FD;
  transition: all .3s ease;
}

.btn-plus:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 2px;
  width: 100%;
  border-radius: 138px;
  background: #01A7FD;
  transition: all .3s ease;
}

.btn:disabled {
  color: #CEECFC;
  border-color: #CEECFC;;
}

.btn:disabled .btn-plus:before, .btn:disabled .btn-plus:after {
  background: #CEECFC;
}


.btn-primary {
  margin-top: 30px;
  border: none;
  background: #01A7FD;
  color: white;
}

.btn-primary:disabled {
  color: white;
  background: #CEECFC;
}

.main-form-child-item {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 18px;
  margin-bottom: 10px;
  font-size: 14px;
}

.main-form-child-item-content {
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  padding: 8px 16px;
}

.main-form-child-item-content div:first-child {
  color: rgba(17, 17, 17, 0.48);
  margin-bottom: 2px;
}

.main-form-child-item-btn {
  border: none;
  background: white;
  color: #01A7FD;
  cursor: pointer;
}

</style>