const ZhuanlanController = require('../../controller/zhuanlan')

module.exports = router => {
  // 获取专栏列表
  router.get('/zhuanlan', ZhuanlanController.getList)
  // 获取专栏信息
  router.get('/zhuanlan/:id', ZhuanlanController.getItem)
  // 新增专栏
  router.post('/zhuanlan', ZhuanlanController.postItem)
  // 修改专栏
  router.put('/zhuanlan/:id', ZhuanlanController.putItem)
  // 删除专栏
  router.delete('/zhuanlan/:id', ZhuanlanController.delItem)
}
