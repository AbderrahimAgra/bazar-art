const db = require('@utils/db.js')

const create_user = async (req, res) => {
  const { name, email, password, phone } = req.body
  try {
    const result = await db.users
      .create({
        data: {
          name,
          email,
          password,
          phone,
        },
      })
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await db.$disconnect()
      })
    res.json(result)
  } catch (error) {
    console.error(error)
  }
}
const get_allUsers = async (req, res) => {
  try {
    const users = await db.users
      .findMany()
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await db.$disconnect()
      })
    res.status(200).json(users)
  } catch (error) {
    console.error(error)
  }
}

const delete_user = async (req, res) => {
  const { id } = req.params
  try {
    const user = await db.users
      .delete({
        where: {
          id: parseInt(id, 10),
        },
      })
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await db.$disconnect()
      })
    res.json(user)
  } catch (error) {
    console.error(error)
  }
}
const get_user = async (req, res) => {
  const { id } = req.params
  try {
    const user = await db.users
      .findUnique({
        where: {
          id: parseInt(id, 10),
        },
      })
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await db.$disconnect()
      })
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
  }
}

module.exports = { get_user, get_allUsers, delete_user, create_user }
