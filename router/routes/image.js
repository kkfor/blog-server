const ImageController = require('../../controller/image')

module.exports = router => {
  router.post('/image', ImageController.postItem)
  router.get('/image', ImageController.getList)
}
