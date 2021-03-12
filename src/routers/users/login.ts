import Router from 'koa-router'
import Joi from 'joi'
import _ from 'lodash'
import md5 from 'md5'
import userModel from '../../models/user'

const router = new Router()
router.post('/login', async ctx => {
  try {
    const params = ctx.request.body
    const validator = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required()
    })
    const validateRes = validator.validate(params)
    const errMsg = _.get(validateRes, 'error.details.0.message')
    if (errMsg) {
      return ctx.reject(null, 400, errMsg)
    }
    let { username, password } = params
    password = md5(password)
    // 验证密码
    const userInfo = await userModel.findOne({ username, password })
    console.log('res password=', password)
    if (!userInfo) {
      ctx.throw(400, '账号或密码不对')
    }
    
    // 返回token
    const token = userInfo.id
    ctx.resolve({ token })
  } catch (err) {
    const code = err.status || 500
    ctx.reject(null, code, err.message)
  }
})

export default router
