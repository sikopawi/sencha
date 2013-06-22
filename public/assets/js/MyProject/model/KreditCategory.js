Ext.define(MyIndo.getNameSpace('model.KreditCategory'), {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'KREDIT_CATEGORY_ID',
		type: 'int'
	},{
		name: 'KREDIT_CATEGORY_NAME',
		type: 'string'
	},{
		name: 'CREATED_DATE',
		type: 'string'
	},{
		name: 'MODIFIED_DATE',
		type: 'string'
	}]
})