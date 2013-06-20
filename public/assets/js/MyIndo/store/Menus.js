Ext.define('MyIndo.store.Menus', {
	extend: 'Ext.data.TreeStore',
	proxy: {
		type: 'ajax',
		api: {
			read: MyIndo.siteUrl('myindo/request/get-list-menu')
		},
		actionMethods: MyIndo.config.defaultActionMethods,
		reader: {
			type: 'json',
			root: 'data'
		}
	}
});