Ext.define('MyIndo.view.Viewport', {
	extend: 'Ext.container.Viewport',
	requires: ['MyIndo.view.Layout.NorthPanel', 'MyIndo.view.Layout.MainMenu', 'MyIndo.view.Layout.Content'],
	layout: 'border',
	config: {
		items: [{
			region: 'north',
			xtype: 'northpanel'
		},{
			region: 'west',
			xtype: 'mainmenu',
			width: 250
		},{
			region: 'center',
			xtype: 'content'
		}]
	}
});