const express = require('express'),
  app = express(),
  fs = require('fs'),
  morgan = require('morgan'),
  swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json')

app.use(
  morgan('combined', {
    stream: fs.createWriteStream('./app.log', { flags: 'a' }),
  })
)
app.get('/test', (req, res) => {
  res.status(200).send('this is just for testing routes')
})
app.use(morgan('combined'))
app.enable('trust proxy')
app.use(express.json({ type: '*/*' }))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = app
