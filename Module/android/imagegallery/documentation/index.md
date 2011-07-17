# imagegallery Module

## Description

Titanium Image Gallery Module

## Accessing the imagegallery Module

To access this module from JavaScript, you would do the following:

	var imageGallery = require("com.codeboxed.imagegallery");

The imageGallery variable is a reference to the Module object.	

## Reference

TODO: If your module has an API, you should document
the reference here.

### ___PROJECTNAMEASIDENTIFIER__.function

TODO: This is an example of a module function.

### ___PROJECTNAMEASIDENTIFIER__.property

TODO: This is an example of a module property.

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
