function preloadImages(images){
	for (let i=0; i < images.length; i++){
		let responsiveCheck = images[i].dataset.srcset ? true : false;
		let url = images[i].dataset.srcset ? images[i].dataset.srcset : images[i].dataset.src;
		//console.log(url);
		let img_loader = new Image();
		responsiveCheck == true ? img_loader.srcset = url : img_loader.src = url;
		img_loader.onload = function(){
			responsiveCheck == true ? images[i].srcset = url : images[i].src = url;
		};
	};
}