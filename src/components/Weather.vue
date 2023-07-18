<template>
    <div class="weather">
        <img :src="weatherIconSrc" class="weather-icon">
        <h1 class="temp">{{ temp }}℃</h1>
        <h2 class="city">{{ city }} {{ this.wname }}</h2>
        <div class="details">
            <div class="col">
                <img src="../assets/images/humidity.png">
                <div>
                    <p class="humidity">{{ humidity }}%</p>
                    <p>湿度</p>
                </div>
            </div>
            <div class="col">
                <img src="../assets/images/wind.png">
                <div>
                    <p class="wind">{{ wind }}级</p>
                    <p>风力</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Weather',
    data() {
        return {
            // 后端可能返回的所有天气名集合
            weatherSet: {
                clear: [
                    '晴', '浮尘', '浓雾', '强浓雾', '大雾', '特强浓雾', '热',
                    '未知'
                ],

                snow: [
                    '雨雪天气', '雨夹雪', '阵雨夹雪', '冻雨', '雪', '阵雪', '小雪', '中雪', '大雪',
                    '暴雪', '小雪-中雪', '中雪-大雪', '大雪-暴雪', '冷'
                ],

                rain: [
                    '疾风', '强风/劲风', '大风', '烈风', '风暴', '狂爆风', '飓风', '热带风暴', '重度霾',
                    '严重霾', '阵雨', '雷阵雨', '雷阵雨并伴有冰雹', '中雨', '大雨',
                    '暴雨', '大暴雨', '特大暴雨', '强阵雨', '强雷阵雨', '极端降雨', '雨', '中雨-大雨',
                    '大雨-暴雨', '暴雨-大暴雨', '大暴雨-特大暴雨'
                ],

                clouds: [
                    '少云', '多云', '有风', '微风', '和风', '清风', '沙尘暴', '强沙尘暴', '龙卷风', '阴'
                ],

                mist: [
                    '晴间多云', '平静', '霾', '中度霾', '扬沙', '雾'
                ],

                drizzle: [
                    '小雨', '毛毛雨/细雨', '小雨-中雨', '轻雾'
                ]
            },
            weatherIconSrc: require('@/assets/images/clear.png'),
            temp: 'null',
            city: '请输入城市名',
            wname: 'null',
            humidity: 'null',
            wind: 'null'
        }
    },
    methods: {
        show(info) {
            if (info === null) {
                this.temp = 'null'
                this.city = '没有此城市信息'
                this.humidity = 'null'
                this.wind = 'null'
                this.weatherPng = require('@/assets/images/clear.png')
                this.wname = 'null'
            }

            
            this.temp = info.lives[0].temperature
            this.city = info.lives[0].city
            this.humidity = info.lives[0].humidity
            this.wind = info.lives[0].windpower === '≤3' ? '小于3' : info.lives[0].windpower
            this.wname = info.lives[0].weather

            // 根据后端接口返回的天气名匹配对应的天气图标
            for (let wobj in this.weatherSet) {
                for (let i in this.weatherSet[wobj]) {
                    if (this.weatherSet[wobj][i] === info.lives[0].weather) {
                        this.weatherIconSrc = require(`@/assets/images/${wobj}.png`)
                        return
                    }
                }
            }
        }
    },
    mounted() {
        // 接受Search组件传过来的天气信息
        this.$bus.$on('info', this.show)
    },
    beforeDestroy() {
        this.$bus.$off()
    }
}
</script>

<style scoped>
.weather-icon {
    width: 170px;
    margin-top: 30px;
}

.weather h1 {
    font-size: 80px;
    font-weight: 500;
}

.weather h2 {
    font-size: 45px;
    font-weight: 400;
    margin-top: -10px;
}

.details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 50px;
}

.col {
    display: flex;
    align-items: center;
    text-align: left;
}

.col img {
    width: 40px;
    margin-right: 10px;
}

.humidity, .wind {
    font-size: 28px;
    margin-top: -6px;
}
</style>