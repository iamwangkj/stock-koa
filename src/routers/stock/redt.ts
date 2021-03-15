import Router from 'koa-router'
import { isLogin } from '../../middleware/auth'

const router = new Router()
router.get('/redt', isLogin, async ctx => {
  try {
    ctx.resolve('as')
  } catch (err) {
    const subCode = err.status || 500
    ctx.reject(null, subCode, err.message)
  }
})

export default router
