const CommentController = require('../../controller/comment')

module.exports = router => {
  // 获取评论列表
  router.get('/comment', CommentController.getComments)
  // 新增评论
  router.post('/comment', CommentController.postComment)
}