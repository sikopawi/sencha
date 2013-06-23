Ext.define('MyIndo.app.Controller', {
	extend: 'Ext.app.Controller',

	isLogin: function(data) {
		if(!data.login) {
			var mainContent = Ext.getCmp('main-content');
			var items = mainContent.items;
			
			/* Close all tabs */
			Ext.each(items.items, function(item) {
				mainContent.items.get(item.id).close();
			});

			/* Close all window */
			Ext.WindowManager.each(function(cmp) { cmp.destroy(); });

			/* Reload Menus */
			var menuPanel = Ext.getCmp('main-menu');
			var menuPanelStore = menuPanel.getStore();
			//menuPanelStore.load();
		}
		return data.login;
	},

	isSuccess: function(data) {
		console.log(data);
		if(!data.success) {
			Ext.Msg.alert('Application Error', '<strong>Error Code: ' + data.error_code + '</strong><br/><strong>Error Message</strong>: ' + data.error_message);
		}
		return data.success;
	},

	getActiveUser: function() {
		return 'admin';
	}
});