Ext.define(MyIndo.getNameSpace('store.DebiturCategorys'), {
	extend: 'Ext.data.Store',
	model: MyIndo.getNameSpace('model.DebiturCategory'),
	proxy: {
		type: 'ajax',
		api: {
			read: MyIndo.siteUrl('debiturcategory/request/read'),
			destroy: MyIndo.siteUrl('debiturcategory/request/destroy')
		},
		actionMethods: MyIndo.config.defaultActionMethods,
		reader: MyIndo.config.defaultReader
	},
	sorters: {
		property: 'DEBITUR_CATEGORY_NAME',
		direction: 'ASC'
	},
	remoteSort: true
});