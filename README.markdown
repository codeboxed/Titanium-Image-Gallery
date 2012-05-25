# Titanium Image Gallery

Example implementation of an Image Gallery for Titanium Mobile. It runs on iOS and Android platforms.

Created by:

* Codeboxed - <team@codeboxed.com>

## Use as a Titanium module

### Install the module

1. Run `Module/ios/imagegallery/build.py` or <strike>ant Module/android/imagegallery</strike> which creates your distribution or click `Downloads` and select your download
2. cd to `/Library/Application Support/Titanium`
3. copy this zip file into the folder of your Titanium SDK

### Register the module

Register your module with your application by editing `tiapp.xml` and adding your module.
Example:
```xml
	<modules>
		<module version="{VERSION_NUMBER}" platform="iphone">com.codeboxed.imagegallery</module>
		<module version="{VERSION_NUMBER}" platform="android">com.codeboxed.imagegallery</module>
	</modules>
```
When you run your project, the compiler will know automatically compile in your module
dependencies and copy appropriate image assets into the application.

### Use the module
```javascript
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
		images: imagesArray,
		columns: 4, // Set the numbers of columns (optional). Default is 4
		thumbSize: 75, // Set the thumb image size (optional). Default is 75
		thumbPadding: 5 // Set the thumb image padding (optional). Default is 5 
	});

	// Add it to the current window
	win.add(imageGallery);
```
## Notes
* For an example on how to integrate the modules, check the Titanium mobile project included in the repo.
* If you have any suggestions or bug reports, open a GitHub Issue.
* If you have in mind any fixes/improvements, please feel free to contribute to the project.
* Android is not supported any longer. It works with 1.6.x and hopefully will be supported again in the future.
