import Koa from 'koa'
import cors from '@koa/cors'
import compress from 'koa-compress'
import bodyParser from 'koa-bodyparser'
import Router from '@koa/router'
import mongoose from 'mongoose'
import routers from './routers/index'
import config from './config'

// 数据库链接
mongoose.connect(config.mongodbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

const router = new Router()
router.use('/', routers.routes())

const app = new Koa()
app
  .use(cors())
  .use(compress())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(config.port, () => {
    console.log(`Koa Server is running on http://localhost:${config.port}`)
  })
