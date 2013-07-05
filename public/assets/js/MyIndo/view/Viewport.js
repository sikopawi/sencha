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
			xtype: 'content',
			id: 'main-content'
		},{
			region: 'south',
			html: '<div style="padding: 3px;background-color: #e7e7e7;text-shadow: 0 1px 1px #FFF; color: #000"><strong>Username</strong> : ' + MyIndo.getUsername() + ' --|-- <strong>Name</strong> : ' + MyIndo.getName() + ' --|-- ' + new Date() + '</div>'
		}]
	}
});