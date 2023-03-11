const passport = require('passport'),
  JwtStrategy = require('passport-jwt').Strategy,
  { ExtractJwt } = require('passport-jwt'),
  LocalStrategy = require('passport-local'),
  { secret } = require('@config/index.js'),
  { comparePassword } = require('@utils/password'),
  db = require('@utils/db.js')

const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
  try {
    const user = await db.users.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    })
    console.log(user)
    if (!user) {
      return done(null, false, { message: 'Incorrect email.' })
    }
    const checkMatch = await comparePassword(password, user.password)
    console.log(password, user.password)
    // console.log(user)
    if (!checkMatch) {
      return done(null, false, { message: 'Incorrect password.' })
    }
    return done(null, user)
  } catch (error) {
    console.error(error)
  }
})

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret,
}

const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  console.log(payload)
  const user = await db.users.findUnique({
    where: {
      id: payload.sub,
    },
  })

  if (user) {
    done(null, user)
  } else {
    done(null, false)
  }
})

passport.use(jwtLogin)
passport.use(localLogin)
