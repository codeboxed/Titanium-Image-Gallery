var ImageGallery = require('com.codeboxed.imagegallery');

var win = Ti.UI.currentWindow;

var imagesArray = [
	{path:'images/1.jpg', caption:'Kitten 1'},
	{path:'images/2.jpg', caption:'Kitten 2'},
	{path:'images/3.jpg', caption:'Kitten 3'},
	{path:'images/4.jpg', caption:'Kitten 4'},
	{path:'images/5.jpg', caption:'Kitten 5'},
	{path:'images/6.jpg', caption:'Kitten 6'}
];

var imageGallery = ImageGallery.create({
	images: imagesArray
});

win.add(imageGallery);