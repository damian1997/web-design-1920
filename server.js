import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import fs from 'fs'


const PORT = process.env.PORT || 4000,
      app = express(),
      COMPONENTPATH = `${__dirname}/src/components`,
      BUNDLE = getBundleUrls(),
      urlencodedParser = bodyParser.urlencoded({ extended: true })

app
  .use(compression())
  .use(express.static('static'))
  .use(bodyParser.json())
  .use(urlencodedParser)
  .set('view engine', 'ejs')
  .set('views', 'src/components')

// ROUTES
import home from './routes/home.js'
import dashboard from './routes/dashboard.js'
import scheduler from './routes/scheduler-form.js'

app
  .get('/', (req,res) => home(req,res,COMPONENTPATH,BUNDLE))
  .get('/dashboard', (req,res) => dashboard(req,res,COMPONENTPATH,BUNDLE))
  .post('/scheduler-form', (req,res) => scheduler(req,res,COMPONENTPATH,BUNDLE))
  .listen(PORT, () => console.log(`Using port: ${PORT}`))

function getBundleUrls() {
  const BUNDLEFILENAMES = JSON.parse(fs.readFileSync(`static/bundle/manifest.json`))
  return BUNDLEFILENAMES
}
