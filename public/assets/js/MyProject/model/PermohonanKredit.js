Ext.define(MyIndo.getNameSpace('model.PermohonanKredit'), {
	extend: 'Ext.data.Model',
	
	fields: [{
		name: 'PERMOHONAN_KREDIT_ID',
		type: 'int'
	},{
		name: 'PERMOHONAN_KREDIT_NO',
		type: 'string'
	},{
		name: 'CUSTOMERS_ID',
		type: 'int'
	},{
		name: 'CUSTOMERS_NAME',
		type: 'string'
	},{
		name: 'CUSTOMERS_ADDRESS',
		type: 'string'
	},{
		name: 'CUSTOMERS_NO_REG',
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
		name: 'PERMOHONAN_KREDIT_STATUS',
		type: 'string'
	},{
		name: 'PERMOHONAN_KREDIT_PENGHASILAN',
		type: 'string'
	},{
		name : 'PERMOHONAN_KREDIT_PLAFOND',
		type : 'string'
	},{
		name : 'PERMOHONAN_KREDIT_JWAKTU',
		type : 'string'
	},{
		name : 'PERMOHONAN_KREDIT_SIFAT_BUNGA',
		type : 'string'
	},{
		name : 'PERMOHONAN_KREDIT_SUKU_BUNGA',
		type : 'string'
	},{
		name : 'PERMOHONAN_KREDIT_POKOK',
		type : 'string'
	},{
		name : 'PERMOHONAN_KREDIT_BUNGA',
		type : 'string'
	},{
		name : 'PERMOHONAN_KREDIT_ANGSURAN',
		type : 'string'
	},{
		name : 'PERMOHONAN_KREDIT_CATATAN',
		type : 'string'
	},{
		name : 'KREDIT_CATEGORY_ID',
		type : 'int'
	},{
		name: 'KREDIT_CATEGORY_NAME',
		type: 'string'
	},{
		name : 'DEBITUR_CATEGORY_ID',
		type : 'int'
	},{
		name: 'DEBITUR_CATEGORY_NAME',
		type: 'string'
	},{
		name : 'PAYMENT_POINT_ID',
		type : 'int'
	},{
		name: 'PAYMENT_POINT_NAME',
		type: 'string'
	},{
		name: 'STATUS',
		type: 'string'
	},{
		name : 'UNIT_KERJA_ID',
		type : 'int'
	},{
		name: 'UNIT_KERJA_NAME',
		type: 'string'
	},{
		name : 'CABANG_ID',
		type : 'int'
	},{
		name : 'CABANG_NAME',
		type : 'string'
	},{
		name : 'PERMOHONAN_KREDIT_NO_BUKU',
		type : 'int'
	},{
		name : 'CREATED_DATE',
		type : 'string'
	},{
		name : 'MODIFIED_DATE',
		type : 'string'
	}]
});