"use strict";function preloadImages(images){"use srtict";var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{var _loop=function _loop(){var image=_step.value;var responsiveCheck=image.dataset.srcset?true:false;var url=image.dataset.srcset?image.dataset.srcset:image.dataset.src;var img_loader=new Image;responsiveCheck==true?img_loader.srcset=url:img_loader.src=url;img_loader.onload=function(){responsiveCheck==true?image.srcset=url:image.src=url}};for(var _iterator=images[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){_loop()}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}}