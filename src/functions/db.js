const config = require('../config/config')
const superSecretKey = config.super_secret_key

const doSomething = async () => {
  const useKey = await new Promise(resolve => {
    resolve(superSecretKey.toLowerCase())
  })
  return useKey
}

module.exports = {
  doSomething: doSomething
}
