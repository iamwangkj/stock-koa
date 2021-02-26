import Router from '@koa/router'
import users from './users'

const router = new Router()

router.use('/users', users.routes())
router.get('/', async ctx => {
  ctx.body = 'asdf'
})
export default router
