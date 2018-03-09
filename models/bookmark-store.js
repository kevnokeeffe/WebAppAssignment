
'use strict';
const logger = require('../utils/logger');
const _ = require('lodash');
logger.info('lodash');

const bookmarkStore ={

 bookmarkCollection:require('./bookmark-store.json').bookmarkCollection,
  
  getAllBookmarks(){
  return this.bookmarkCollection;
  },
   
  getBookmark(id) {
    return _.find(this.bookmarkCollection, { id: id });
  },  
  removeWeb(id,webId){
 const bookmark = this.getBookmark(id); 
    _.remove(bookmark.websites, {id: webId});
}   
  
  
};




