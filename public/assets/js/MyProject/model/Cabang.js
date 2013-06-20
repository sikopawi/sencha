Ext.define(MyIndo.getNameSpace('model.Cabang'), {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'CABANG_ID',
		type: 'int'
	},{
		name: 'CABANG_NAME',
		type: 'string'
	},{
		name: 'CREATED_DATE',
		type: 'string'
	},{
		name: 'MODIFIED_DATE',
		type: 'string'
	}]
});