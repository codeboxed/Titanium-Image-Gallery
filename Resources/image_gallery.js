/*
   image_gallery.js
   Titanium-Image-Gallery
   
   Created by Codeboxed on 2011-05-20.
*/

var win = Ti.UI.currentWindow;
var isAndroid = false;

if (Ti.Platform.name == 'android') {
	isAndroid = true;
}

// Images array
var images = [
	{filename: '1.jpg', caption: 'Kitten placeholder'},
	{filename: '2.jpg', caption: 'Kitten placeholder'},
	{filename: '3.jpg', caption: 'Kitten placeholder'},
	{filename: '4.jpg', caption: 'Kitten placeholder'},
	{filename: '5.jpg', caption: 'Kitten placeholder'},
	{filename: '6.jpg', caption: 'Kitten placeholder'}
];

var rows = 0;
var columns = 0;
var thumbPadding = 5;

var rowPosition = 2;
var rowPositionReset = 2;
var padding = 5;

var columnPosition = 15;

var imageLocation;

if (isAndroid) {
	imageLocation = '/images/';
} else {
	imageLocation = 'images/';
}

win.orientationModes = [ Ti.UI.PORTRAIT ];

var scrollView = Ti.UI.createScrollView({
	contentWidth : 320,
	contentHeight : 'auto',
	top : 0,
	backgroundColor : '#000',
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : false
});

for (i = 0, b = images.length; i < b; i++) {
	if (columns % 4 == 0 && rows != 0) {
		columnPosition += 75 + thumbPadding;
		rowPosition = rowPositionReset;
	}

	var img = Ti.UI.createLabel({
		backgroundImage : imageLocation + images[i].filename,
		width : 75,
		height : 75,
		myID : i,
		left : rowPosition,
		top : columnPosition
	});

	img.borderColor = null;
	img.borderWidth = 0;
	img.backgroundPaddingLeft = 0;
	img.backgroundPaddingRight = 0;
	img.backgroundPaddingTop = 0;
	img.backgroundPaddingBottom = 0;
	img.backgroundLeftCap = 0;
	img.backgroundTopCap = 0;

	img.addEventListener('click', function(e) {
		var win_photo = Ti.UI.createWindow({
			backgroundColor : '#000',
			title : e.source.myID + 1 + ' of ' + images.length,
			windowInfo : images,
			myID : e.source.myID,
			url : 'image_gallery_single.js'
		});

		win_photo.hideTabBar();

		Ti.UI.currentTab.open(win_photo, {
			animated : true
		});
	});
	
	scrollView.add(img);

	columns++;
	rows++;
	rowPosition += 75 + padding;
}

win.add(scrollView);