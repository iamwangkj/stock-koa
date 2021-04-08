const env = process.env.NODE_ENV || 'development'

export default {
  env,
  isDev: env === 'development',
  port: 3000, // 端口号
  mongodbUrl: 'mongodb://127.0.0.1:27017/stock' // 数据库配置
  // mongodbUrl: 'mongodb://159.75.0.180/stock'// 数据库配置
}
