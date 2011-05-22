/*
   image_gallery_single.js
   Titanium-Image-Gallery
   
   Created by Codeboxed on 2011-05-20.
*/

var win = Ti.UI.currentWindow;
var isAndroid = false;

if (Ti.Platform.name == 'android') {
	isAndroid = true;
}

win.orientationModes = [ Ti.UI.PORTRAIT ];

var isFullscreen = false;
var isGesture = true;
var images = win.windowInfo;
var myID = win.myID;
var viewArray = [];

if (isAndroid) {
	imageLocation = '/images/';
} else {
	imageLocation = 'images/';
}

var photosView = Ti.UI.createScrollableView({
	width : 320,
	height : 480,
	top : 0,
	showPagingControl : false,
	pagingControlColor : '#fff',
	maxZoomScale : 2.0,
	currentPage : 0
});

var descriptionLabel = Ti.UI.createLabel({
	text : images[myID].caption,
	width : 320,
	bottom : 45,
	height : 'auto',
	backgroundColor : '#000',
	font : {
		fontSize : 12,
		fontWeight : 'bold'
	},
	color : '#FFF',
	zIndex : 2,
	opacity : 0.8
});

if (!isAndroid) {
	for (i = 0; i < images.length; i++) {
		var view = Ti.UI.createImageView({
			backgroundColor : '#000',
			image : imageLocation + images[i].filename,
			width : 320,
			height : '100%',
			top : -50
		});

		viewArray[i] = view;
	}

	photosView.views = viewArray;
}

if (!isAndroid) {
	photosView.currentPage = myID;

	win.add(photosView);
	win.hideTabBar();

	var flexSpace = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});

	var leftButton = Ti.UI.createButton({
		image : 'images/icon_arrow_left.png'
	});

	leftButton.addEventListener('click', function() {
		var index = (photosView.currentPage - 1 < 0) ? 0
		: photosView.currentPage - 1;
		var view = photosView.views[index];

		isGesture = false;

		photosView.scrollToView(view);
	});
	var rightButton = Ti.UI.createButton({
		image : 'images/icon_arrow_right.png'
	});

	rightButton.addEventListener('click', function() {
		var index = (photosView.currentPage + 1 >= photosView.views.length) ? photosView.currentPage : photosView.currentPage + 1;
		var view = photosView.views[index];

		isGesture = false;

		photosView.scrollToView(view);
	});
	
	var toolbar = Ti.UI.createToolbar({
		items : [ flexSpace, leftButton, flexSpace, rightButton, flexSpace ],
		bottom : 0,
		borderTop : true,
		borderBottom : true,
		barColor : '#000'
	});

	win.add(toolbar);

	photosView.addEventListener('singletap', function() {
		if (isFullscreen) {
			Ti.UI.iPhone.showStatusBar();
			win.showNavBar();
			toolbar.show();
			descriptionLabel.show();
		} else {
			Ti.UI.iPhone.hideStatusBar();
			win.hideNavBar();
			toolbar.hide();
			descriptionLabel.hide();
		}

		isFullscreen = !isFullscreen;
	});
	
	photosView.addEventListener('scroll', function(e) {
		if (isGesture) {
			Ti.UI.iPhone.hideStatusBar();
			win.hideNavBar();
			toolbar.hide();
			descriptionLabel.hide();

			isFullscreen = true;
		} else {
			isGesture = true;
		}

		i = e.currentPage;
		activeView = e.view;
		descriptionLabel.text = images[i].caption;

		win.title = i + 1 + ' of ' + images.length;
	});
} else {
	var view = Ti.UI.createImageView({
		backgroundColor : '#000',
		image : imageLocation + images[myID].filename,
		width : 'auto',
		height : 350,
		top : 0,
		canScale : true
	});

	win.add(view);

	descriptionLabel.bottom = 0;
}

win.add(descriptionLabel);