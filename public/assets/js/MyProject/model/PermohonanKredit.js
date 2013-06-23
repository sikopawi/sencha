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
		name : 'DEBITUR_CATEGORY_ID',
		type : 'int'
	},{
		name : 'PAYMENT_POINT_ID',
		type : 'int'
	},{
		name : 'UNIT_KERJA_ID',
		type : 'int'
	},{
		name : 'CABANG_ID',
		type : 'int'
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