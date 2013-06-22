Ext.define(MyIndo.getNameSpace('model.UnitKerja'), {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'UNIT_KERJA_ID',
		type: 'int'
	},{
		name: 'UNIT_KERJA_NAME',
		type: 'string'
	},{
		name: 'UNIT_KERJA_ADDRESS',
		type: 'string'
	},{
		name: 'UNIT_KERJA_PHONE',
		type: 'string'
	},{
		name : 'UNIT_KERJA_FAX',
		type : 'string'
	},{
		name : 'UNIT_KERJA_CONTACT_PERSON',
		type : 'string'
	},{
		name : 'CREATED_DATE',
		type : 'string'
	},{
		name : 'MODIFIED_DATE',
		type : 'string'
	}]
});