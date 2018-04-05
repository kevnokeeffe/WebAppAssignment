'use strict';

const logger = require('../utils/logger');
const bookmarkStore = require('../models/bookmark-store');
const uuid = require('uuid');
const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Bookmark Buddy Dashboard',
      bookmark: bookmarkStore.getAllBookmarks(),
    };
    
    
    
    logger.info('about to render',bookmarkStore.getAllBookmarks());
    response.render('dashboard', viewData);
  },
  
  removeBookmark(request, response) {
    const bookmarkId = request.params.id;
    logger.debug(`Deleting Bookmark ${bookmarkId}`);
    bookmarkStore.removeBookmark(bookmarkId);
    response.redirect('/dashboard');
  },
  
  addBookmark(request, response) {
    const newBookmark = {
      id: uuid(),
      title: request.body.title,
      websites: [],
    };
    bookmarkStore.addBookmark(newBookmark);
    response.redirect('/dashboard');
  },
};



module.exports = dashboard;
