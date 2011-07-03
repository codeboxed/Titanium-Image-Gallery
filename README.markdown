# Titanium Image Gallery

Example implementation of an Image Gallery for Titanium Mobile. It runs on iOS and Android platforms.

Created by:

* Codeboxed - <team@codeboxed.com>

## Use as a module

	var ImageGallery = require('com.codeboxed.imagegallery');
	
	var win = Ti.UI.currentWindow;
	
	var imageGallery = ImageGallery.create({
		images: [
			{path:'1.jpg', caption:'Kitten 1'},
			{path:'2.jpg', caption:'Kitten 2'}
		]
	});

win.add(imageGallery);

## Notes
* If you have any suggestions or bug reports, open a GitHub Issue.
* If you have in mind any fixes/improvements, feel free to contribute to the project.