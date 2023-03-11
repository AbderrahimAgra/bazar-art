const bcrypt = require('bcrypt')

const passwordHash = async (plainPassword) => {
  const hash = await bcrypt.hash(String(plainPassword), 10)

  return hash
}

const comparePassword = async (plainPassword, hashedPassword) => {
  const isMatch = await bcrypt.compare(String(plainPassword), hashedPassword)

  return isMatch
}

module.exports = {
  passwordHash,
  comparePassword,
}
