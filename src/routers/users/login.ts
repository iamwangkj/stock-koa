import Router from '@koa/router'

const router = new Router()
router.get('/login', async ctx => {
  console.log('login=', ctx)
  ctx.body = 'login'
})

export default router
