<template>
    <div class="card">
        <Search></Search>
        <Weather></Weather>
    </div>
</template>

<script>
import Search from './components/Search.vue'
import Weather from './components/Weather.vue'
export default {
    name: 'App',
    components: {
        Search,
        Weather
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}

body {
    background: #222;
}

.card {
    width: 90%;
    max-width: 470px;
    background: linear-gradient(135deg, #00feba, #5b548a);
    color: #fff;
    margin: 100px auto 100px;
    border-radius: 20px;
    padding: 40px 35px;
    text-align: center;
}
</style>