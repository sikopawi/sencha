Ext.define(MyIndo.getNameSpace('store.Payments'), {
	extend: 'Ext.data.Store',
	model: MyIndo.getNameSpace('model.Payment'),
	proxy: {
		type: 'ajax',
		api: {
			read: MyIndo.siteUrl('payment/request/read'),
			destroy: MyIndo.siteUrl('payment/request/destroy')
		},
		actionMethods: MyIndo.config.defaultActionMethods,
		reader: MyIndo.config.defaultReader
	},
	sorters: {
		property: 'CREATED_DATE',
		direction: 'DESC'
	},
	remoteSort: true
});