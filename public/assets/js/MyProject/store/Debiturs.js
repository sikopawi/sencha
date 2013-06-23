Ext.define(MyIndo.getNameSpace('store.Debiturs'), {
	extend: 'Ext.data.Store',
	model: MyIndo.getNameSpace('model.Debitur'),
	proxy: {
		type: 'ajax',
		api: {
			read: MyIndo.siteUrl('debitur/request/read'),
			destroy: MyIndo.siteUrl('debitur/request/destroy')
		},
		actionMethods: MyIndo.config.defaultActionMethods,
		reader: MyIndo.config.defaultReader
	},
	sorters: {
		property: 'DEBITUR_NO_REK',
		direction: 'ASC'
	},
	remoteSort: true
});