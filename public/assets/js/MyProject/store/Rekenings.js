Ext.define(MyIndo.getNameSpace('store.Rekenings'), {
	extend: 'Ext.data.Store',
	model: MyIndo.getNameSpace('model.Rekening'),
	proxy: {
		type: 'ajax',
		api: {
			read: MyIndo.siteUrl('rekening/request/read'),
			destroy: MyIndo.siteUrl('rekening/request/destroy')
		},
		actionMethods: MyIndo.config.defaultActionMethods,
		reader: MyIndo.config.defaultReader
	},
	sorters: {
		property: "REKENING_NO",
        direction: "ASC"
	},
	remoteSort: true
});