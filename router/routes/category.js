const CategoryController = require('../../controller/category')

module.exports = router => {
  // 获取分类列表
  router.get('/category', CategoryController.getList)
  // 获取分类信息
  router.get('/category/:id', CategoryController.getItem)
  // 新增分类
  router.post('/category', CategoryController.postItem)
  // 修改分类
  router.put('/category/:id', CategoryController.putItem)
  // 删除分类
  router.delete('/category/:id', CategoryController.delItem)
}
