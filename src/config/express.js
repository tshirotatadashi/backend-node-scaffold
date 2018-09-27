var express = require('express')
var load = require('express-load')
var httpErrors = require('../http/middlewares/httpErrors/404.js')

module.exports = function(){
  var app = express()

  app.use(express.static('./src/public'))
  app.set('view engine', 'ejs')
  app.set('views', './src/views')

  load('routes', {cwd: 'src/http'}).into(app)

  app.use(httpErrors(app))
  
  return app
}