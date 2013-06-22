Ext.define(MyIndo.getNameSpace('store.UnitKerjas'), {
	extend: 'Ext.data.Store',
	model: MyIndo.getNameSpace('model.UnitKerja'),
	proxy: {
		type: 'ajax',
		api: {
			read: MyIndo.siteUrl('unitkerja/request/read'),
			destroy: MyIndo.siteUrl('unitkerja/request/destroy')
		},
		actionMethods: MyIndo.config.defaultActionMethods,
		reader: MyIndo.config.defaultReader
	},
	sorters: {
		property: "UNIT_KERJA_NAME",
        direction: "ASC"
	},
	remoteSort: true
});