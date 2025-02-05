var express = require('express');
var router = express.Router();
var ContactBook = require('../controller/ContactBookController');

router.post('/Contact',ContactBook.RegisterUser);
router.post('/ContactLogin',ContactBook.LoginUser);
router.post('/ContactAdd',ContactBook.AddContact);
router.get('/ContactView',ContactBook.ViewContact);
router.get('/ContactUpdate/:id',ContactBook.UpdateContactGetValue);
router.post('/ContactUpdate/:id',ContactBook.UpdateContact);
router.get('/ContactDelete/:id',ContactBook.DeleteContact);
router.get('/ContactAccount',ContactBook.UpdateAccoutGetValue);
router.post('/ContactAccount',ContactBook.UpdateAccout);
router.get('/ContactLogout',ContactBook.ContactBookLogout);



module.exports = router;
