module.exports = app => {

  const IndexRepository = app.domain.repositories.index
  
  class IndexControler {     
    static async show(req, res){
      res.render('home/index')
    }
    
    static async create(req, res){
      const index = req.body
      IndexRepository.create(index)
        .then( index => {
          res.status(200).json(index)
        })
    }
  }
  return IndexControler
}