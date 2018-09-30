module.exports = function(app){
  var IndexControler = app.http.controllers.index

  app.route('/')
    .get(IndexControler.show)
    .post(IndexControler.create)
}