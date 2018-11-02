const CategoryController = require('../../controller/category')

module.exports = router => {
  router.get('/category', CategoryController.getCategories)
  router.get('/category/:id', CategoryController.getCategoryById)
  
  router.put('/category/:id', CategoryController.putCategory)
  router.delete('/category/:id', CategoryController.delCategoryById)

  router.post('/category', CategoryController.postCategory)
}
