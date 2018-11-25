const CategoryController = require('../../controller/category')

module.exports = router => {
  // 获取分类列表
  router.get('/category', CategoryController.getCategories)
  // 获取分类信息
  router.get('/category/:id', CategoryController.getCategoryById)
  // 新增分类
  router.post('/category', CategoryController.postCategory)
  // 修改分类
  router.put('/category/:id', CategoryController.putCategory)
  // 删除分类
  router.delete('/category/:id', CategoryController.delCategoryById)
}
