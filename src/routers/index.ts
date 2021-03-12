import Router from 'koa-router'
import users from './users'

const router = new Router({
  prefix: '/api'
})
router.use(users.routes())

export default router
