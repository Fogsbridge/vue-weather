<template>
    <div class="search">
        <input type="text" v-model="cityName" placeholder="请输入城市名字" spellcheck="false">
        <button @click="query"><img src="../assets/images/search.png"></button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Search',
    data() {
        return {
            cityName: ''
        }
    },
    methods: {
        query() {
            let weatherInfo = {}

            // 此处的myKey填写从高德开发平台申请的key
            const myKey = ''

            // 向后端查询天气信息，并将天气信息传给Weather组件
            axios.get('/queryCityCode', {
                params: {
                    key: myKey,
                    output: 'json',
                    address: this.cityName
                }
            }).then(response => {
                let cityCode = response.data.geocodes[0].adcode
                return axios.get('/queryWeather', {
                    params: {
                        key: myKey,
                        city: cityCode
                    }
                })
            }).then(response => {
                weatherInfo = response.data
                console.log(weatherInfo)
                this.$bus.$emit('info', weatherInfo)
            }).catch(error => {
                this.$bus.$emit('info', null)
            })
        }
    }
}
</script>

<style scoped>
.search {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.search input {
    border: 0;
    outline: 0;
    background: #ebfffc;
    color: #555;
    padding: 10px 25px;
    height: 60px;
    border-radius: 30px;
    flex: 1;
    margin-right: 16px;
    font-size: 18px;
    width: 80%;
}

.search button{
    border: 0;
    outline: 0;
    background: #ebfffc;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    cursor: pointer;
}

.search button img {
    width: 16px;
}
</style>