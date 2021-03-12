import Router from 'koa-router'
import login from './login'

const router = new Router({
  prefix: '/users'
})
router.use(login.routes())

export default router
