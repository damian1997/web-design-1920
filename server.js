import express from 'express'
import compression from 'compression'
import fs from 'fs'


const PORT = process.env.PORT || 4000,
      app = express(),
      COMPONENTPATH = `${__dirname}/src/components`

app
  .use(compression())
  .use(express.static('static'))
  .set('view engine', 'ejs')
  .set('views', 'src/components')

// ROUTES
import home from './routes/home.js'

app
  .get('/', (req,res) => home(req,res,COMPONENTPATH))
  .listen(PORT, () => console.log(`Using port: ${PORT}`))
