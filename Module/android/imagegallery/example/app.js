// Import ImageGallery module
var ImageGallery = require('com.codeboxed.imagegallery');

var win = Ti.UI.currentWindow;

// Array with image objects
var imagesArray = [
    {path:'1.jpg', caption:'Kitten 1'},
    {path:'2.jpg', caption:'Kitten 2'}
];

// Initialize the Image Gallery
var imageGallery = ImageGallery.create({
    images: imagesArray
});

// Add it to the current window
win.add(imageGallery);