Ext.define(MyIndo.getNameSpace('store.Cards'), {
	extend: 'Ext.data.Store',
	model: MyIndo.getNameSpace('model.Payment'),
	proxy: {
		type: 'ajax',
		api: {
			read: MyIndo.siteUrl('debitur/request/read-card')
		},
		actionMethods: MyIndo.config.defaultActionMethods,
		reader: MyIndo.config.defaultReader
	},
	sorters: {
		property: 'PAYMENT_ID',
		direction: 'ASC'
	},
	remoteSort: true
})