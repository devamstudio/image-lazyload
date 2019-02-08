// Main func
function preloadImages(images){
	'use strict';
	console.log('Start loading')
	for (let image of images){
		let url = image.dataset.src;
		console.log(url)
		let img = new Image();
		img.src = url;
		img.onload = () => {
			image.src = url;
		};
	};
}
// Init
document.addEventListener('DOMContentLoaded', function () {
	'use strict';
	var preloadImagesList = document.querySelectorAll('.g-image__preload');
	preloadImages(preloadImagesList);
})