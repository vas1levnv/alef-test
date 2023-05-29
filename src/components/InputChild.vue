<template>
    <div :id="child.id">
        <label  class="main-form-label" for="childName">
            <div v-show="isErrorName" style="color: red">Введите имя</div>
            <div class="main-form-label-text">Имя</div>
            <input @blur="errorNameBlur"
                   @focus="isErrorName = false"
                   v-model="childName"
                   id="childName" type="text" placeholder="Петр">
        </label>

        <label class="main-form-label" for="childAge">
            <div v-show="isErrorAge" style="color: red">Введите возраст</div>
            <div class="main-form-label-text">Возраст</div>
            <input
                @blur="errorAgeBlur"
                @focus="isErrorAge = false"
                v-model="childAge" id="childAge" type="number" placeholder="99">
        </label>
        <button @click="$emit('remove', child.id)">Удалить</button>
    </div>
</template>

<script>
export default {
    props:['child'],
    name: "InputChild",
    data() {
        return {
            childName: null,
            childAge: null,
            isErrorName: false,
            isErrorAge: false,
        }
    },
    methods:{
        errorNameBlur(){
            !this.childName ? this.isErrorName = true : false
        },
        errorAgeBlur(){
            !this.childAge ? this.isErrorAge = true : false
        },
    }
}
</script>

<style scoped>

</style>