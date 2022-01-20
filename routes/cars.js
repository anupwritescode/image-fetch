var express = require('express');
var router = express.Router();
const ImageService = require('../services/ImageService');

router.get('/', function(req, res, next) {
  const imageService = new ImageService;
  imageService.getCarImages(req.query).then((response)=>{ 
    res.send(response);
  }, (error) => {
    res.status(400).send(error);
  });
});

router.put('/', function(req, res, next) {
  const imageService = new ImageService;
  imageService.addCarImages(req.body).then((response)=> {
    res.status(200).send(response);
  }, (error) => {
    res.status(400).send(error);
  })
});

module.exports = router;
