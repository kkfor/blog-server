const CommentController = require('../../controller/comment')

module.exports = router => {
  // 获取评论列表
  router.get('/comment', CommentController.getList)
  // 新增评论
  router.post('/comment', CommentController.postItem)
  // 修改评论
  router.put('/comment/:id', CommentController.putItem)
  // 删除评论
  router.delete('/comment/:id', CommentController.delItem)
}
