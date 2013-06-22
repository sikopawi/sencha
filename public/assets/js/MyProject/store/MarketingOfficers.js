Ext.define(MyIndo.getNameSpace('store.MarketingOfficers'), {
	extend: 'Ext.data.Store',
	model: MyIndo.getNameSpace('model.MarketingOfficer'),
	proxy: {
		type: 'ajax',
		api: {
			read: MyIndo.siteUrl('marketingofficer/request/read'),
			destroy: MyIndo.siteUrl('marketingofficer/request/destroy')
		},
		actionMethods: MyIndo.config.defaultActionMethods,
		reader: MyIndo.config.defaultReader
	},
	sorters: {
		property: "MARKETING_OFFICER_NAME",
        direction: "ASC"
	},
	remoteSort: true
});