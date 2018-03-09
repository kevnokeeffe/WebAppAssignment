'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const bookmark = require('./controllers/bookmark.js');
const about = require('./controllers/about.js');
const uxdesign = require('./controllers/uxdesign.js');


router.get('/', start.index);

router.get('/dashboard', dashboard.index);
router.get('/dashboard/removeBookmark/:id', dashboard.removeBookmark);
router.get('/bookmark/:id/deleteweb/:webid', bookmark.deleteWeb);

router.get('/bookmark/:id',bookmark.index);
router.get('/uxdesign', uxdesign.index);
router.get('/about', about.index);



module.exports = router;
