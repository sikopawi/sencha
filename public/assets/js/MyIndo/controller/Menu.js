Ext.define('MyIndo.controller.Menu', {
	extend: 'MyIndo.app.Controller',

	requires: [
	'MyIndo.view.Loading'
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
	}
});