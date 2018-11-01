const ArticleController = require('../../controller/article')

module.exports = router => {
  router
    .get('/article', ArticleController.getArts)                   // 文章列表
    .post('/article', ArticleController.postArt)                  // 添加文章
    .get('/article/:id', ArticleController.getArt)                // 文章详情
    .put('/article/:id', ArticleController.putArt)                // 修改文章
    .delete('/article/:id', ArticleController.deleteArt)          // 删除文章
}