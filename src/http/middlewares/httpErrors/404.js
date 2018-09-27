module.exports = (app) => {
  return function (req, res, next){
    console.log(app)
    res.status(404).render('erros/404')
    next()
  }
  
}