Ext.define('MyIndo.view.Layout.MainMenu', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.mainmenu',
	title: 'Main Menu',
	padding: '1 0 0 0',
	autoScroll: true,

	initComponent: function() {

		var store = Ext.getStore('Menus');
		store.load();

		Ext.apply(this,{
			items: [{
				xtype: 'treepanel',
				id: 'main-menu',
				store: store,
				border: false,
				rootVisible: false
			}]
		});
		this.callParent(arguments);
	}
});