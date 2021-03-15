import Router from 'koa-router'
import users from './users'
import stock from './stock'

const router = new Router({
  prefix: '/api'
})
router.use(users.routes())
router.use(stock.routes())

export default router
