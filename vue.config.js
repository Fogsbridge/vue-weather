const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  pages: {
    index: {
      entry: 'src/main.js',
    }
  },


  /**
   * 指定后端API，此处使用的高德
   *  天气查询API文档：https://lbs.amap.com/api/webservice/guide/api/weatherinfo/#t1
   *  查询城市编码API文档：https://lbs.amap.com/api/webservice/guide/api/georegeo
   * 
   *  先查询城市编码，再根据城市编码查询该城市的天气信息
   */
  devServer: {
    proxy: {
      // 查询城市编码
      '/queryCityCode': {
        target: 'https://restapi.amap.com/v3/geocode/geo',
        pathRewrite: { '^/queryCityCode': '' }
      },
      // 查询天气
      '/queryWeather': {
        target: 'https://restapi.amap.com/v3/weather/weatherInfo',
        pathRewrite: { '^/queryWeather': '' }
      }
    }
  }
})
