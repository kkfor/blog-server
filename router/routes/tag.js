const TagController = require('../../controller/tag')

module.exports = router => {
  // 获取分类列表
  router.get('/tag', TagController.getList)
  // 获取分类信息
  router.get('/tag/:id', TagController.getItem)
  // 新增分类
  router.post('/tag', TagController.postItem)
  // 修改分类
  router.put('/tag/:id', TagController.putItem)
  // 删除分类
  router.delete('/tag/:id', TagController.delItem)
}
