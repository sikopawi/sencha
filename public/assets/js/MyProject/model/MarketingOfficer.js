Ext.define(MyIndo.getNameSpace('model.MarketingOfficer'), {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'MARKETING_OFFICER_ID',
		type: 'int'
	},{
		name: 'MARKETING_OFFICER_NAME',
		type: 'string'
	},{
		name : 'CREATED_DATE',
		type : 'string'
	},{
		name : 'MODIFIED_DATE',
		type : 'string'
	}]
});