Ext.define(MyIndo.getNameSpace('store.PaymentPoints'), {
	extend: 'Ext.data.Store',
	model: MyIndo.getNameSpace('model.PaymentPoint'),
	proxy: {
		type: 'ajax',
		api: {
			read: MyIndo.siteUrl('paymentpoint/request/read'),
			destroy: MyIndo.siteUrl('paymentpint/request/destroy')
		},
		actionMethods: MyIndo.config.defaultActionMethods,
		reader: MyIndo.config.defaultReader
	},
	sorters: {
		property: "PAYMENT_POINT_CODE",
        direction: "ASC"
	},
	remoteSort: true
});