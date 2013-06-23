Ext.define(MyIndo.getNameSpace('store.TagihanRegulers'), {
	extend: 'Ext.data.Store',
	model: MyIndo.getNameSpace('model.TagihanReguler'),
	proxy: {
		type: 'ajax',
		api: {
			read: MyIndo.siteUrl('tagihanreguler/request/read'),
			destroy: MyIndo.siteUrl('tagihanreguler/request/destroy')
		},
		actionMethods: MyIndo.config.defaultActionMethods,
		reader: MyIndo.config.defaultReader
	},
	sorters: {
		property: 'TAGIHAN_REGULER_ID',
		direction: 'DESC'
	},
	remoteSort: true
});