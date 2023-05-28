<template>
    <form class="main-form">
        <h1 class="main-form-title">Персональные данные</h1>

        <label class="main-form-label" for="name">
            <div class="main-form-label-text">Имя</div>
            <input id="name" type="text" placeholder="Петр">
        </label>

      <label class="main-form-label" for="name">
        <div class="main-form-label-text">Возраст</div>
        <input id="name" type="text" placeholder="99">
      </label>


    </form>
</template>

<script>
export default {
    name: "Main"
}
</script>

<style scoped>

.main-form {
    margin: 30px 0;
}

.main-form-title{
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 20px;
}


.main-form-label{
    display: block;
    width: 100%;
    border: 1px solid #F1F1F1;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
  margin-bottom: 10px;
}

.main-form-label-text{
  color: rgba(17, 17, 17, 0.48);
}

input{
width: 100%;
  outline: none;
  border: none;
}

</style>