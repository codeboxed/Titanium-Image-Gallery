# Titanium Image Gallery

Example implementation of an Image Gallery for Titanium Mobile. It runs on iOS and Android platforms.

Created by:

* Codeboxed - <team@codeboxed.com>

## Use as a Titanium module

### Install the module

1. Run `Module/iphone/imagegallery/build.py` which creates your distribution or download `Module/iphone/imagegallery/com.codeboxed.imagegallery-iphone-0.1.zip`
2. cd to `/Library/Application Support/Titanium`
3. copy this zip file into the folder of your Titanium SDK

### Register the module

Register your module with your application by editing `tiapp.xml` and adding your module.
Example:

	<modules>
		<module version="0.1">com.codeboxed.imagegallery</module>
	</modules>

When you run your project, the compiler will know automatically compile in your module
dependencies and copy appropriate image assets into the application.

### Use the module

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