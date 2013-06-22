Ext.define(MyIndo.getNameSpace('store.KreditCategorys'), {
	extend: 'Ext.data.Store',
	model: MyIndo.getNameSpace('model.KreditCategory'),
	proxy: {
		type: 'ajax',
		api: {
			read: MyIndo.siteUrl('kreditcategory/request/read'),
			destroy: MyIndo.siteUrl('kreditcategory/request/destroy')
		},
		actionMethods: MyIndo.config.defaultActionMethods,
		reader: MyIndo.config.defaultReader
	},
	sorters: {
		property: 'KREDIT_CATEGORY_NAME',
		direction: 'ASC'
	},
	remoteSort: true
});