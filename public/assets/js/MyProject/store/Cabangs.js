Ext.define(MyIndo.getNameSpace('store.Cabangs'), {
	extend: 'Ext.data.Store',
	model: MyIndo.getNameSpace('model.Cabang'),
	proxy: {
		type: 'ajax',
		api: {
			read: MyIndo.siteUrl('cabang/request/read'),
			destroy: MyIndo.siteUrl('cabang/request/destroy')
		},
		actionMethods: MyIndo.config.defaultActionMethods,
		reader: MyIndo.config.defaultReader
	},
	sorters: {
		property: 'CABANG_NAME',
		direction: 'ASC'
	},
	remoteSort: true
});