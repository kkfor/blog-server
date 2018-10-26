const ClassifyController = require('../../controller/classify')

module.exports = router => {
  router.get('/classify', ClassifyController.getClassifies)
  router.get('/classify/:id', ClassifyController.getClassifyById)
  
  router.patch('/classify/:id', ClassifyController.patchClassify)
  router.delete('/classify/:id', ClassifyController.delClassifyById)

  router.post('/classify/add', ClassifyController.addClassify)
}
