const db = require('@utils/db.js')

const get_categories = async (req, res) => {
  const { take } = req.params
  try {
    const result = await db.category
      .findMany({ take: Number(take) })
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await db.$disconnect()
      })
    res.status(200).json(result)
  } catch (error) {
    console.error(error)
  }
}

const create_categories = async (req, res) => {
  const { name, state, image, description } = req.body
  try {
    const result = await db.category
      .create({
        data: {
          name: name,
          state: state,
          image: image,
          description: description,
        },
      })
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await db.$disconnect()
      })
    res.status(200).json(`your category (id number: ${result.id}) has been created successfully`)
  } catch (error) {
    console.error(error)
  }
}
module.exports = { get_categories, create_categories }
