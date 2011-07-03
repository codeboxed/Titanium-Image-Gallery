# Titanium Image Gallery

Example implementation of an Image Gallery for Titanium Mobile. It runs on iOS and Android platforms.

Created by:

* Codeboxed - <team@codeboxed.com>

## Use as a module

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

## Notes
* If you have any suggestions or bug reports, open a GitHub Issue.
* If you have in mind any fixes/improvements, feel free to contribute to the project.