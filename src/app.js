const bodyParser = require('body-parser')
const morgan = require('morgan')
const express = require('express')
const router = require('./routes/route')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/foo', router)

app.use('/healthz', (req, res) => {
  res.json({ error: false })
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

/* eslint-disable no-unused-vars */

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    if (err.status !== 404) {
      console.log(err) // eslint-disable-line no-console
    }
    res.json({
      message: err.message,
      error: true
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: true
  })
})

app.listen(process.env.PORT || '3000', () => {
  console.log('Server is live on port 3000')
})
