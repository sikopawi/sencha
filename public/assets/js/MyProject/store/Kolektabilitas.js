Ext.define(MyIndo.getNameSpace('store.Kolektabilitas'), {
	extend: 'Ext.data.Store',
	model: MyIndo.getNameSpace('model.Kolektabilitas'),
	proxy: {
		type: 'ajax',
		api: {
			read: MyIndo.siteUrl('kolektabilitas/request/read'),
			destroy: MyIndo.siteUrl('kolektabilitas/request/destroy')
		},
		actionMethods: MyIndo.config.defaultActionMethods,
		reader: MyIndo.config.defaultReader
	},
	sorters: {
		property: "KOLEKTIBILITAS_ID",
        direction: "ASC"
	},
	remoteSort: true
});