Ext.define(MyIndo.getNameSpace('model.Rekening'), {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'REKENING_ID',
		type: 'int'
	},{
		name: 'CUSTOMERS_ID',
		type: 'int'
	},{
		name: 'REKENING_NO',
		type: 'string'
	},{
		name: 'REKENING_NO_REF',
		type: 'string'
	},{
		name: 'REKENING_STATUS',
		type: 'string'
	},{
		name: 'ENTRY_BY',
		type: 'string'
	},{
		name: 'UNIT_KERJA_ID',
		type: 'int'
	},{
		name: 'UNIT_KERJA_NAME',
		type: 'string'
	},{
		name: 'CABANG_ID',
		type: 'int'
	},{
		name: 'CABANG_NAME',
		type: 'string'
	},{
		name: 'PAYMENT_POINT_ID',
		type: 'int'
	},{
		name: 'PAYMENT_POINT_CODE',
		type: 'string'
	},{
		name: 'PAYMENT_POINT_NAME',
		type: 'string'
	},{
		name: 'CUSTOMERS_NO_REG',
		type: 'string'
	},{
		name: 'CUSTOMERS_NAME',
		type: 'string'
	},{
		name: 'CUSTOMERS_ADDRESS',
		type: 'string'
	},{
		name: 'CUSTOMERS_NO_KTP',
		type: 'string'
	},{
		name: 'CUSTOMERS_PHONE',
		type: 'string'
	},{
		name: 'CUSTOMERS_BIRTHDATE',
		type: 'string'
	},{
		name: 'CUSTOMERS_NOPEN',
		type: 'string'
	},{
		name: 'CUSTOMERS_COMPANY',
		type: 'string'
	},{
		name: 'CUSTOMERS_COMPANY_ADDRESS',
		type: 'string'
	},{
		name: 'CUSTOMERS_COMPANY_PHONE',
		type: 'string'
	},{
		name: 'CUSTOMERS_COMPANY_POSITION',
		type: 'string'
	},{
		name: 'CUSTOMERS_REFERENCE_NAME',
		type: 'string'
	},{
		name: 'CUSTOMERS_REFERENCE_ADDRESS',
		type: 'string'
	},{
		name: 'CUSTOMERS_REFERENCE_PHONE',
		type: 'string'
	},{
		name: 'CUSTOMERS_REFERENCE_STATUS',
		type: 'string'
	},{
		name: 'CREATED_DATE',
		type: 'string'
	},{
		name: 'MODIFIED_DATE',
		type: 'string'
	}]
});