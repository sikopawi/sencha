Ext.define(MyIndo.getNameSpace('store.PermohonanKredits'), {
	extend: 'Ext.data.Store',
	model: MyIndo.getNameSpace('model.PermohonanKredit'),
	proxy: {
		type: 'ajax',
		api: {
			read: MyIndo.siteUrl('permohonankredit/request/read'),
			destroy: MyIndo.siteUrl('permohonankredit/request/destroy')
		},
		actionMethods: MyIndo.config.defaultActionMethods,
		reader: MyIndo.config.defaultReader
	},
	sorters: {
		property: "PERMOHONAN_KREDIT_NO",
        direction: "ASC"
	},
	remoteSort: true
});