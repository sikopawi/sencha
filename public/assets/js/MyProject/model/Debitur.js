Ext.define(MyIndo.getNameSpace('model.Debitur'), {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'DEBITUR_ID',
		type: 'int'
	},{
		name: 'DEBITUR_NO_REK',
		type: 'string'
	},{
		name: 'CREATED_DATE',
		type: 'string'
	},{
		name: 'MODIFIED_DATE',
		type: 'string'
	},{
		name: 'CUSTOMERS_ID',
		type: 'int'
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
		name: 'PERMOHONAN_KREDIT_ID',
		type: 'string'
	},{
		name: 'PERMOHONAN_KREDIT_NO',
		type: 'string'
	},{
		name: 'PERMOHONAN_KREDIT_NO_BUKU',
		type: 'string'
	},{
		name: 'PERMOHONAN_KREDIT_STATUS',
		type: 'string'
	},{
		name: 'PERMOHONAN_KREDIT_PENGHASILAN',
		type: 'float'
	},{
		name: 'PERMOHONAN_KREDIT_PLAFOND',
		type: 'float'
	},{
		name: 'PERMOHONAN_KREDIT_JWAKTU',
		type: 'float'
	},{
		name: 'PERMOHONAN_KREDIT_SIFAT_BUNGA',
		type: 'string'
	},{
		name: 'PERMOHONAN_KREDIT_SUKU_BUNGA',
		type: 'float'
	},{
		name: 'PERMOHONAN_KREDIT_POKOK',
		type: 'float'
	},{
		name: 'PERMOHONAN_KREDIT_BUNGA',
		type: 'float'
	},{
		name: 'PERMOHONAN_KREDIT_ANGSURAN',
		type: 'int'
	},{
		name: 'PERMOHONAN_KREDIT_CATATAN',
		type: 'text'
	},{
		name: 'STATUS',
		type: 'text'
	}]
});