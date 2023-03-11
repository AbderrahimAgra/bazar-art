const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { passwordHash } = require('@utils/password')

module.exports = prisma
;(async function account() {
  prisma.$use(async (params, next) => {
    try {
      if (params.model == 'users' && params.action == 'create') {
        params.args.data.password = await await passwordHash(params.args.data.password)
      }
      return next(params)
    } catch (error) {
      console.error(error)
    }
  })
})()
