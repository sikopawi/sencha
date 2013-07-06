Ext.define('MyIndo.controller.Menu', {
	extend: 'MyIndo.app.Controller',

	requires: [
	'MyIndo.view.Loading',
	//'MyIndo.view.Users',
	],

	init: function() {
		this.control({
			'#main-menu': {
				itemclick: this.onMenuClicked
			}
		});
	},

	onMenuClicked: function(record) {
		var obj = record.getSelectionModel().getSelection();
		if(obj.length > 0) {
			if(obj[0].get('parentId') !== 'root') {
				if(obj[0].isLeaf()) {
					var menuTitle = obj[0].get('text');
					var menuId = obj[0].raw.MENU_ID;
					var menuAction = obj[0].raw.ACTION;
					var mainContent = Ext.getCmp('main-content');
					var loadingWindow = Ext.create('MyIndo.view.Loading');
					if(menuAction.length > 0) {
						eval('this.' + menuAction + '(menuTitle, menuId, mainContent)');
					}
				}
			}
		}
	},

	// onUsersClicked: function(menuTitle, menuId, mainContent) {
	// 	if(!mainContent.items.get(menuId)) {
	// 		// var store = Ext.create(MyIndo.getNameSpace('store.Cabangs'));
	// 		// store.load();
	// 		mainContent.add({
	// 			xtype: 'usersview',
	// 			title: menuTitle,
	// 			id: menuId,
	// 			closable: true,
	// 			//store: store
	// 		});
	// 	}
	// 	mainContent.setActiveTab(menuId);
	// }
});