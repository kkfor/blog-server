const ArticleController = require('../../controller/article')

module.exports = router => {
  router
    // 获取文章列表
    .get('/article', ArticleController.getList)
    // 添加文章
    .post('/article', ArticleController.postArt)
    // 文章详情
    .get('/article/:id', ArticleController.getItem)
    // 修改文章
    .put('/article/:id', ArticleController.putArt)
    // 删除文章
    .delete('/article/:id', ArticleController.deleteArt)
}
