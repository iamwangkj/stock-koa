import jwt from 'jsonwebtoken'

const SECRET = 'shhhhh'

function sign (userId = '') {
  const token = jwt.sign({ userId: userId }, SECRET, { expiresIn: '720h' })
  return token
}

function verify (token = '') {
  try {
    const decoded = jwt.verify(token, SECRET)
    return decoded
  } catch (err) {
    return err
  }
}

export default {
  sign,
  verify
}
