const env = process.env.NODE_ENV || 'development'

export default {
  env,
  isDev: env === 'development',
  // 端口号
  port: process.env.PORT || 3000,
  // 数据库配置
  mongodbUrl: 'mongodb://127.0.0.1:27017/mongo_test'
}
