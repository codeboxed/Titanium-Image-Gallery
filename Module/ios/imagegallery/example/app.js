// Import ImageGallery module
var ImageGallery = require('com.codeboxed.imagegallery');

var win = Ti.UI.createWindow();

// Array with image objects
var imagesArray = [
    {path:'1.jpg', caption:'Kitten 1'},
    {path:'2.jpg', caption:'Kitten 2'}
];

// Initialize the Image Gallery
var imageGallery = ImageGallery.create({
    images: imagesArray
});

// Add it to the window
win.add(imageGallery);

win.open();
