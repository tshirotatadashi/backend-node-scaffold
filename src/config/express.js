var express = require('express')
var load = require('express-load')
var bodyParser = require("body-parser")
var httpErrors = require('../http/middlewares/httpErrors/404.js')

module.exports = function(){
  var app = express()

  app.use(express.static('./src/public'))
  app.set('view engine', 'ejs')
  app.set('views', './src/views')
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())

  load('domain', {cwd: 'src/'})
    .then('http')
    .into(app)

  app.use(httpErrors(app))
  
  return app
}