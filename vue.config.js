const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 保存时是否进行语法检查。true表示检查，false表示不检查，默认值是true。
  lintOnSave: false,

  // 配置入口
  pages: {
    index: {
      entry: 'src/main.js',
    }
  },


  /*
    14-Vue如何解决AJAX跨域
  */
  // 配置代理
  // devServer: {
  //   // 注意：这个地址就写到端口号位置即可。后面的具体的路径不需要写。
  //   proxy: 'http://localhost:8000'
  // }

  // devServer: {
  //   proxy: {
  //     // 凡是请求路径以 /api 开始的，都走这个代理
  //     '/api': {
  //       target: 'http://localhost:8000',
  //       pathRewrite: { '^/api': '' },
  //       ws: true, // 开启对websocket的支持（websocket是一种实时推送技术），默认不写就是true。
  //       changeOrigin: true // 默认值也是true，表示改变起源。（让对方服务器不知道我们真正的起源到底是哪里）
  //     },
  //     '/abc': {
  //       target: 'http://localhost:8001',
  //       pathRewrite: { '^/abc': '' },
  //       ws: true,
  //       changeOrigin: true
  //     }
  //   }
  // }



  /*
    15-BugList综合案例-AJAX请求
  */
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8000',
  //       pathRewrite: { '^/api': '' }
  //     }
  //   }
  // }




  /*
    16-Weather案例
  */
  devServer: {
    proxy: {
      '/queryCityCode': {
        target: 'https://restapi.amap.com/v3/geocode/geo',
        pathRewrite: { '^/queryCityCode': '' }
      },
      '/queryWeather': {
        target: 'https://restapi.amap.com/v3/weather/weatherInfo',
        pathRewrite: { '^/queryWeather': '' }
      }
    }
  }
})
