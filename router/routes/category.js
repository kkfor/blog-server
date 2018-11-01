const CategoryController = require('../../controller/category')

module.exports = router => {
  router.get('/category', CategoryController.getClassifies)
  router.get('/category/:id', CategoryController.getCategoryById)
  
  router.patch('/category/:id', CategoryController.patchCategory)
  router.delete('/category/:id', CategoryController.delCategoryById)

  router.post('/category/add', CategoryController.addCategory)
}
