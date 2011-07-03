// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Image Gallery',
    backgroundColor:'#fff',
    url:'image_gallery.js'
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Image Gallery',
    window:win1
});

var win2 = Titanium.UI.createWindow({  
    title:'Module',
    backgroundColor:'#fff',
    url:'image_gallery_module.js'
});

var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Module',
    window:win2
});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);  

// open tab group
tabGroup.open();
