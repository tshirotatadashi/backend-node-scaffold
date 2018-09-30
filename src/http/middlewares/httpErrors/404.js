module.exports = (app) => {
  return function (req, res, next){
    res.status(404).render('errors/404')
    next()
  }
  
}