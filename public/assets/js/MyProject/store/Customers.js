Ext.define(MyIndo.getNameSpace('store.Customers'), {
	extend: 'Ext.data.Store',
	model: MyIndo.getNameSpace('model.Customer'),
	proxy: {
		type: 'ajax',
		api: {
			read: MyIndo.siteUrl('customer/request/read'),
			destroy: MyIndo.siteUrl('customer/request/destroy')
		},
		actionMethods: MyIndo.config.defaultActionMethods,
		reader: MyIndo.config.defaultReader
	},
	sorters: {
		property: 'CUSTOMERS_NAME',
		direction: 'ASC'
	},
	remoteSort: true
});