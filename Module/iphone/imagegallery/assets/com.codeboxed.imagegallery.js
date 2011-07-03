/*
 * Titanium-Image-Gallery
 * Created by Codeboxed on 2011-07-03.
 */

/**
 * Create an image gallery
 * 
 * @method create
 * @param properties The object to configure the library
 * @param properties.win (optional) The window to attach the image gallery to. 
 * 						 Only use the Ti.UI.currentWindow for now
 * @param properties.images An Array containg the image objects
 * @param properties.images[].path The relative path for the image
 * @param properties.images[].caption The image caption
 * @return {Titanium.UI.ScrollView} Returns a ScrollView
 */
exports.create = function (properties) {
	var
	/**
	 * The rows pointer
	 * @property _rows
	 * @type Number
	 */ 
	_rows 				= 0,
	
	/**
	 * The columns pointer
	 * @property _columns
	 * @type Number
	 */
	_columns 			= 0,
	
	/**
	 * The thumb padding setting
	 * @property _thumbPadding
	 * @type Number
	 */
	_thumbPadding	 	= 5,
	
	/**
	 * The row position pointer
	 * @property _rowPosition
	 * @type Number
	 */
	_rowPosition 		= 2,
	
	/**
	 * @property _rowPositionReset
	 * @type Number
	 */
	_rowPositionReset 	= 2,
	
	/**
	 * @property _padding
	 * @type Number
	 */
	_padding 			= 5,
	
	/**
	 * @property _columnPosition
	 * @type Number
	 */
	_columnPosition 	= 15,
	
	/**
	 * @property _images
	 * @type Array
	 */
	_images 			= properties.images,
	
	/**
	 * @property _win
	 * @type Titanium.UI.Window
	 */
	_win				= properties.win,
	
	/**
	 * @property _isFullscreen
	 * @type Boolean
	 */
	_isFullscreen 		= false,
	
	/**
	 * @property _isGesture
	 * @type Boolean
	 */
	_isGesture 			= true,
	
	/**
	 * @property _viewArray
	 * @type Array
	 */
	_viewArray 			= [],
	
	/**
	 * @property _imageWin
	 * @type Titanium.UI.Window
	 */
	_imageWin			= null,
	
	/**
	 * @property _scrollView
	 * @type Titanium.UI.ScrollView
	 */
	_scrollView			= null;	

	/**
	 * Check if the platform is Android
	 * 
	 * @method _isAndroid
	 * @return {Boolean} True if Android, false otherwise
	 */
	var _isAndroid = function () {
		if (Ti.Platform.name === 'android') {
			return true;
		}

		return false;
	};
	
	/**
	 * Add elements to image window
	 * 
	 * @method _createImageWin
	 * @param {Number} The image to start with ID
	 */
	var _createImageWin = function (myID) {
		var photosView,
			descriptionLabel,
			view,
			flexSpace,
			leftButton,
			rightButton,
			toolbar;
			
		photosView = Ti.UI.createScrollableView({
			width: 320,
			height: 480,
			top: 0,
			showPagingControl: false,
			pagingControlColor: '#fff',
			maxZoomScale: 2.0,
			currentPage: 0
		});

		descriptionLabel = Ti.UI.createLabel({
			text: _images[myID].caption,
			width: 320,
			bottom: 45,
			height: 'auto',
			backgroundColor: '#000',
			font: {
				fontSize: 12,
				fontWeight: 'bold'
			},
			color: '#FFF',
			zIndex: 2,
			opacity: 0.8
		});

		/*
		 * Check for the platform 
		 * iPhone has more functionality
		 */
		if (_isAndroid()) {
			// Android			
			view = Ti.UI.createImageView({
				backgroundColor: '#000',
				image: _images[myID].path,
				width: 'auto',
				height: 350,
				top: 0,
				canScale: true
			});
			
			// Add the image view to the window
			_imageWin.add(view);

			descriptionLabel.bottom = 0;
		} else {
			// iPhone
			for (var i = 0, b = _images.length; i < b; i++) {
				view = Ti.UI.createImageView({
					backgroundColor: '#000',
					image: _images[i].path,
					width: 320,
					height: '100%',
					top: -50
				});

				_viewArray[i] = view;
			}

			photosView.views = _viewArray;
			photosView.currentPage = myID;

			_imageWin.add(photosView);
			
			_imageWin.hideTabBar();

			flexSpace = Ti.UI.createButton({
				systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
			});

			leftButton = Ti.UI.createButton({
				// TODO: Allow to pass the leftButton image as an option 
				systemButton: Ti.UI.iPhone.SystemButton.REWIND
			});

			leftButton.addEventListener('click', function() {
				// Defined the boundries
				var index = (photosView.currentPage - 1 < 0) ? 0: photosView.currentPage - 1;
				var view = photosView.views[index];

				_isGesture = false;

				photosView.scrollToView(view);
			});
			
			rightButton = Ti.UI.createButton({
				// TODO: Allow to pass the rightButton image as an option
				systemButton: Ti.UI.iPhone.SystemButton.FAST_FORWARD
			});

			rightButton.addEventListener('click', function() {
				// Defined the boundries
				var index = (photosView.currentPage + 1 >= photosView.views.length) ? photosView.currentPage: photosView.currentPage + 1;
				var view = photosView.views[index];

				_isGesture = false;

				photosView.scrollToView(view);
			});
			
			toolbar = Ti.UI.createToolbar({
				items: [flexSpace, leftButton, flexSpace, rightButton, flexSpace],
				bottom: 0,
				borderTop: true,
				borderBottom: true,
				barColor: '#000'
			});

			_imageWin.add(toolbar);

			photosView.addEventListener('singletap', function() {
				// If the view is fullscreen the exit fullscreen
				// else go fullscreen
				if (_isFullscreen) {
					// Exit fullscreen
					Ti.UI.iPhone.showStatusBar();
					_imageWin.showNavBar();
					toolbar.show();
					descriptionLabel.show();
				} else {
					// Go fullscreen
					Ti.UI.iPhone.hideStatusBar();
					_imageWin.hideNavBar();
					toolbar.hide();
					descriptionLabel.hide();
				}

				_isFullscreen = !_isFullscreen;
			});
			
			photosView.addEventListener('scroll', function(e) {
				if (_isGesture) {
					Ti.UI.iPhone.hideStatusBar();
					_imageWin.hideNavBar();
					toolbar.hide();
					descriptionLabel.hide();

					_isFullscreen = true;
				} else {
					_isGesture = true;
				}

				descriptionLabel.text = _images[e.currentPage].caption;

				_imageWin.title = e.currentPage + 1 + ' of ' + _images.length;
			});
		}

		_imageWin.add(descriptionLabel);
	};
	
	// Create ScrollView
	_scrollView = Ti.UI.createScrollView({
		contentWidth: 320,
		contentHeight: 'auto',
		top: 0,
		backgroundColor: '#000',
		showVerticalScrollIndicator: true,
		showHorizontalScrollIndicator: false
	});

	for (var i = 0, b = _images.length; i < b; i++) {
		var _img;
		
		// Display the thumbs on 4 collumns
		if (_columns % 4 === 0 && _rows !== 0) {
			_columnPosition += 75 + _thumbPadding;
			_rowPosition = _rowPositionReset;
		}
		
		// Create the thumb as a label with a background image
		_img = Ti.UI.createLabel({
			backgroundImage: _images[i].path,
			width: 75,
			height: 75,
			myID: i,
			left: _rowPosition,
			top: _columnPosition
		});
	
		// Set the thumbs properties
		// TODO: Properties should be sent as an option
		_img.borderColor 				= null;
		_img.borderWidth 				= 0;
		_img.backgroundPaddingLeft 		= 0;
		_img.backgroundPaddingRight 	= 0;
		_img.backgroundPaddingTop 		= 0;
		_img.backgroundPaddingBottom	= 0;
		_img.backgroundLeftCap	 		= 0;
		_img.backgroundTopCap 			= 0;

		// Attach click listener to each thumb
		_img.addEventListener('click', function (e) {
			// Create a new window and show the image selected
			_imageWin = Ti.UI.createWindow({
				backgroundColor: '#000',
				title: e.source.myID + 1 + ' of ' + _images.length
			});
			
			// Add elements to the window 
			_createImageWin(e.source.myID);
			
			// Push the window in the tabbar controller
			Ti.UI.currentTab.open(_imageWin);
		});
		
		// Add thumb to the scrollview
		_scrollView.add(_img);

		// Increment pointers
		_columns += 1;
		_rows += 1;
		_rowPosition += 75 + _padding;
	}
	
	return _scrollView;
};