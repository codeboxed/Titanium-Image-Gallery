# imagegallery Module

## Description

Titanium Image Gallery Module

## Accessing the imagegallery Module

To access this module from JavaScript, you would do the following:

	var imageGallery = require("com.codeboxed.imagegallery");

The imageGallery variable is a reference to the Module object.	

## Reference

### imageGallery.create

	/**
	* Create an image gallery
	*
	* @method create
	* @param properties The object to configure the library
	* @param properties.win (optional) The window to attach the image gallery to.
	* Only use the Ti.UI.currentWindow for now
	* @param properties.images An Array containg the image objects
	* @param properties.images[].path The relative path for the image
	* @param properties.images[].caption The image caption
	* @param properties.rows (optional) Number of rows
	* @param properties.thumbSize (optional) The square thumbnail size
	* @param properties.thumbPadding (optional) The square padding
	* @return {Titanium.UI.ScrollView} Returns a ScrollView
	*/

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
	    images: imagesArray,
	    columns: 4, // Set the numbers of columns (optional). Default is 4
	    thumbSize: 75, // Set the thumb image size (optional). Default is 75
	    thumbPadding: 5 // Set the thumb image padding (optional). Default is 5 
	});
	
	// Add it to the window
	win.add(imageGallery);
	
	win.open();

## Usage

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

## Author

Codeboxed - <team@codeboxed.com>

## License

Copyright (c) 2011 Codeboxed

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
