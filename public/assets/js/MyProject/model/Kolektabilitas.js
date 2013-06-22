Ext.define(MyIndo.getNameSpace('model.Kolektabilitas'), {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'KOLEKTIBILITAS_ID',
		type: 'int'
	},{
		name: 'KOLEKTIBILITAS_CODE',
		type: 'string'
	},{
		name: 'KOLEKTIBILITAS_URAIAN',
		type: 'string'
	},{
		name: 'KOLEKTIBILITAS_TUNGGAKAN_MIN',
		type: 'int'
	},{
		name : 'KOLEKTIBILITAS_TUNGGAKAN_MAX',
		type : 'int'
	},{
		name : 'CREATED_DATE',
		type : 'string'
	},{
		name : 'MODIFIED_DATE',
		type : 'string'
	}]
});