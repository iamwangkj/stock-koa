import Router from 'koa-router'

const router = new Router()
router.get('/login', async ctx => {
  ctx.resolve('wangkj')
})

export default router
