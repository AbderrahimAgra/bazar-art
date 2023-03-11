const app = require('app'),
  userRouter = require('@routes/user.routes.js'),
  customerRouter = require('@routes/customer.routes.js'),
  categoriesRouter = require('@routes/categories.routes.js'),
  authRouter = require('@routes/auth.routes.js'),
  { port: appPort } = require('@config/index'),
  cors = require('cors'),
  { normalizePort, onError } = require('@utils/index')

require('dotenv')

const port = normalizePort(appPort || '3005')

app.set('port', port)

const corsOptions = {
  origin: process.env.ORIGIN_URL,
  optionsSuccessStatus: 200,
}

app.enable('trust proxy')

app.use(cors(corsOptions))
app.set('json spaces', 2)

app.get('/', (req, res) => {
  res.status(200).send('Welcome to this API')
})

app.use('/user', userRouter)

app.use('/customer', customerRouter)

app.use('/categories', categoriesRouter)

app.use('/auth', authRouter)

const server = app.listen(port, () => {
  const { address: host, port: _port } = server.address()
  console.log(`app listening on port http://${host}:${_port}`)
  console.log('Press Ctrl+C to quit.')
})

server.on('error', onError)
