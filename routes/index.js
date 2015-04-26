var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'COMPLY' });
});

/* GET patient dashboard page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Welcome!' });
});

/* GET progress page. */
router.get('/progress', function(req, res, next) {
  res.render('progress', { title: 'Progress' });
});

/* GET medications page. */
router.get('/medications', function(req, res, next) {
  res.render('medications', { title: 'Medications' });
});

/* GET upload page. */
router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'Upload' });
});

/* GET message inbox page. */
router.get('/messages', function(req, res, next) {
  res.render('messages', { title: 'Messages' });
});

/* GET reminders page. */
router.get('/reminders', function(req, res, next) {
  res.render('reminders', { title: 'Reminders' });
});

/* GET settings page. */
router.get('/settings', function(req, res, next) {
  res.render('settings', { title: 'Settings' });
});

module.exports = router;
