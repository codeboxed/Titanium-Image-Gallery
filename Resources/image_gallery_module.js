var ImageGallery = require('com.codeboxed.imagegallery');

var win = Ti.UI.currentWindow;

var imagesArray = [
	{path:'1.jpg', caption:'Kitten 1'},
	{path:'2.jpg', caption:'Kitten 2'},
	{path:'3.jpg', caption:'Kitten 3'},
	{path:'4.jpg', caption:'Kitten 4'},
	{path:'5.jpg', caption:'Kitten 5'},
	{path:'6.jpg', caption:'Kitten 6'}
];

var imageGallery = ImageGallery.create({
	images: imagesArray
});

win.add(imageGallery);