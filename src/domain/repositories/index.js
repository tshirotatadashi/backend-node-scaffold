module.exports = app => {
    
    class IndexRepository {     
      static async show(index){
          return true;
      }
      
      static async create(index){
          console.log(index)
          return {test: 'test'}
      }
    }
    return IndexRepository
  }