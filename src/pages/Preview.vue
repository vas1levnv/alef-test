<template>
  <div class="preview-title">Персональные данные</div>
  <div class="preview-parent" v-show="name">
    {{ name }}, {{ age }} {{ textAge(age) }}
  </div>
  <div v-show="children">
    <div class="preview-title">Дети</div>
    <div class="preview-children" v-for="child in children">
      <div class="preview-children-item">{{ child.name }}, {{ child.age }} {{ textAge(child.age) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preview",
  data() {
    return {
      name: localStorage.name,
      age: localStorage.age,
      text: '',
      children: JSON.parse(localStorage.children),
    }
  },
  methods: {
    textAge: function (age) {
      let count = age % 100;
      if (count >= 5 && count <= 20) {
        this.text = 'лет';
      } else {
        count = count % 10;
        if (count === 1) {
          this.text = 'год';
        } else if (count >= 2 && count <= 4) {
          this.text = 'года';
        } else {
          this.text = 'лет';
        }
      }
      return this.text;
    }

  },

  computed: {

    /*    let count = age % 100;
        if (count >= 5 && count <= 20) {
          this.text = 'лет';
        } else {
           count = count % 10;
          if (count === 1) {
            this.text = 'год';
          } else if (count >= 2 && count <= 4) {
            this.text = 'года';
          } else {
            this.text = 'лет';
          }
        }
        return txt;
      }*/
  }
}


</script>

<style scoped>


.preview-title {
  font-weight: 500;
  margin-bottom: 20px;
}

.preview-parent {
  font-weight: 700;
  margin-bottom: 60px;
}

.preview-children-item {
  width: fit-content;
  margin-bottom: 20px;
  padding: 10px 20px;
  background: #F1F1F1;
  border-radius: 5px;
  font-weight: 700;
}

</style>