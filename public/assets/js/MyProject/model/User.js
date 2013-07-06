Ext.define(MyIndo.getNameSpace('model.User'), {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'USERNAME',
		type: 'string'
	},{
		name: 'FNAME',
		type: 'string'
	},{
		name: 'LNAME',
		type: 'string'
	},{
		name: 'CREATED_DATE',
		type: 'string'
	},{
		name: 'MODIFIED_DATE',
		type: 'string'
	}]
});