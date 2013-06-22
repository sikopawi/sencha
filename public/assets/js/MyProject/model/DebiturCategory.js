Ext.define(MyIndo.getNameSpace('model.DebiturCategory'), {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'DEBITUR_CATEGORY_ID',
		type: 'int'
	},{
		name: 'DEBITUR_CATEGORY_NAME',
		type: 'string'
	},{
		name: 'CREATED_DATE',
		type: 'string'
	},{
		name: 'MODIFIED_DATE',
		type: 'string'
	}]
})