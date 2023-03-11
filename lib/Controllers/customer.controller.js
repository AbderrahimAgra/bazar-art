const db = require('@utils/db.js')

const add_product = async (req, res) => {
  const { name, qte, description, image, sale, price, admin_id, category_id } = req.body
  try {
    const result = await db.products
      .create({
        data: {
          name,
          qte,
          description,
          image,
          sale,
          price,
          admin_id,
          category_id,
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
const remove_product = async (req, res) => {
  const { id } = req.params
  try {
    const result = await db.products
      .deleteMany({
        where: {
          id: {
            equals: parseInt(id, 10),
          },
        },
      })
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await db.$disconnect()
      })
    if (result.count === 1) {
      res.status(200).json('Your product has been removed successfully')
    } else {
      res.status(200).json('no product found!')
    }
  } catch (error) {
    console.error(error)
  }
}
const get_all_products = async (req, res) => {
  const { take } = req.params

  try {
    const result = await db.products
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

const get_single_products = async (req, res) => {
  const { id } = req.params
  try {
    const result = await db.products
      .findFirst({
        where: {
          id: {
            equals: parseInt(id, 10),
          },
        },
      })
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

const get_product_by_category = async (req, res) => {
  const { id } = req.params
  try {
    const result = await db.products
      .findMany({
        where: {
          category_id: Number(id),
        },
      })
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
module.exports = {
  add_product,
  remove_product,
  get_all_products,
  get_single_products,
  get_product_by_category,
}
