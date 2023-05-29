<template>
    <form @submit.prevent class="main-form">
        <h1 class="main-form-title">Персональные данные</h1>

        <label class="main-form-label" for="name">
            <div class="main-form-label-text">Имя</div>
            <input v-model="name" id="name" type="text" placeholder="Петр">
        </label>

        <label class="main-form-label" for="name">
            <div class="main-form-label-text">Возраст</div>
            <input v-model="age" id="age" type="number" placeholder="99">
        </label>

        <div v-show="children.length < 5">
            <button @click="addChild">+ Добавить ребенка</button>
        </div>
        <div>
            Дети (макс. 5)
        </div>
        <InputChild v-for="child in children"
                    @remove="removeChild"
                    :key="child.id" v-bind:child="child"
        />
        <button @click="saveForm">
            Сохранить
        </button>

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

            childInc: 0,
            children: [],
        }
    },
    methods: {
        addChild() {
            this.childInc += 1
            this.children.push({id: this.childInc})
        },
        removeChild(id) {
            this.children = this.children.filter(c => c.id !== id)
        },
        saveForm() {
            console.log(this.name, this.age)
        },
    }
}
</script>

<style>

.main-form {
    margin: 30px 0;
}

.main-form-title {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 20px;
}


.main-form-label {
    display: block;
    width: 100%;
    border: 1px solid #F1F1F1;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    margin-bottom: 10px;
}

.main-form-label-text {
    color: rgba(17, 17, 17, 0.48);
}

input {
    width: 100%;
    outline: none;
    border: none;
}

</style>