<script setup>


</script>

<template>
    <div class="app-wrapper">
        <header>
            <div class="logo">
                <router-link to="/">
                    <img src="./assets/img/logo.svg" alt="logo">
                </router-link>
            </div>
            <div class="nav">
                <router-link to="/">Форма</router-link>
                <router-link to="preview">Превью</router-link>
            </div>
        </header>

        <main>
            <div class="container">
                <router-view></router-view>
            </div>
        </main>
        <footer>
            all rights reserved
        </footer>
    </div>
</template>

<style>

.container {
    padding: 0 20px;
    max-width: 1000px;
    margin: 0 auto;
}

.app-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header{
    display: flex;
    padding: 24px 92px;
}

main {
    flex: 1 1 0;
}

footer {
    text-align: center;
    padding: 30px;
    background: #FAFAFA;
    box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
}

</style>
