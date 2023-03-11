const db = require('@utils/db.js')
const { sgKEY, emailTo, emailFrom } = require('@config/index')
const sgMail = require('@sendgrid/mail')

const add_comment = async (req, res) => {
  const { name, email, comment, usersId, products_id } = req.body
  try {
    const result = await db.comments
      .create({
        data: {
          name,
          email,
          comment,
          usersId,
          products_id,
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
const edit_comment = async (req, res) => {
  const { comment, id } = req.body
  try {
    const user = await db.comments
      .updateMany({
        where: {
          id: parseInt(id, 10),
        },
        data: { comment: comment },
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

const contact_us = async (req, res) => {
  const { name, subject, message } = req.body
  sgMail.setApiKey(sgKEY)
  try {
    const sendMessage = {
      to: emailTo,
      from: 'bensaad.a@outlook.com',
      subject: subject,
      text: name,
      html: message,
    }
    sgMail
      .send(sendMessage)
      .then(() => {
        console.log('Email sent successfully')
        res.status(200).send('Email sent successfully')
      })
      .catch((error) => {
        console.error(error)
      })
  } catch (error) {
    console.error(error)
  }
}

const get_all_comment = async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    const result = await db.comments
      .findMany({
        where: {
          products_id: Number(id),
        },
        orderBy: {
          id: 'desc',
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
module.exports = { get_all_comment, add_comment, edit_comment, contact_us }
