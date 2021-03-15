import Router from 'koa-router'
import redt from './redt'

const router = new Router({
  prefix: '/stock'
})
router.use(redt.routes())

export default router
