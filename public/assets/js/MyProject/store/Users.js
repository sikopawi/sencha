Ext.define(MyIndo.getNameSpace('store.Users'), {
	extend: 'Ext.data.Store',
	model: MyIndo.getNameSpace('model.User'),
	proxy: {
		type: 'ajax',
		api: {
			read: MyIndo.siteUrl('users/request/read'),
			destroy: MyIndo.siteUrl('users/request/destroy')
		},
		actionMethods: MyIndo.config.defaultActionMethods,
		reader: MyIndo.config.defaultReader
	},
	sorters: {
		property: 'USERNAME',
		direction: 'ASC'
	},
	remoteSort: true
});