var express = require('express')
var path = require('path')
var Router = express.Router()

var viewsPath = path.join(__dirname, '../') + 'public/'

Router.get('/users', function(req, res){
  res.sendFile(viewsPath + 'user.html')

})

Router.get('/admin', function(req, res){
  res.sendFile(viewsPath + 'admin.html')

})

Router.get('/dashboard', function(req, res){
  res.sendFile(viewsPath + 'dashboard.html')

})

Router.all('/*', function(req, res){
  res.send('no se encontro el recurso solicitado')
  res.end()
})

module.exports = Router
