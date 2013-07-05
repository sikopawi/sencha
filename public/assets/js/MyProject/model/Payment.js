Ext.define(MyIndo.getNameSpace('model.Payment'), {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'PAYMENT_ID',
		type: 'int'
	},{
		// For 'Cards' store only
		name: 'NO',
		type: 'int'
	},{
		name: 'DEBITUR_ID',
		type: 'int'
	},{
		name: 'DEBITUR_NO_REK',
		type: 'string'
	},{
		name: 'CUSTOMERS_ID',
		type: 'int'
	},{
		name: 'CUSTOMERS_NAME',
		type: 'string'
	},{
		name: 'CUSTOMERS_NO_REG',
		type: 'string'
	},{
		name: 'TANGGAL',
		type: 'string'
	},{
		name: 'BAKI_AWAL',
		type: 'float'
	},{
		name: 'ATD_POKOK',
		type: 'float'
	},{
		name: 'ATD_BUNGA',
		type: 'float'
	},{
		name: 'ATD_JUMLAH',
		type: 'float'
	},{
		name: 'AJT_POKOK',
		type: 'float'
	},{
		name: 'AJT_BUNGA',
		type: 'float'
	},{
		name: 'AJT_JUMLAH',
		type: 'float'
	},{
		name: 'BAKI_AKHIR',
		type: 'float'
	},{
		name: 'CREATED_DATE',
		type: 'string'
	},{
		name: 'MODIFIED_DATE',
		type: 'string'
	},{
		name: 'UNIT_KERJA_ID',
		type: 'int'
	},{
		name: 'UNIT_KERJA_NAME',
		type: 'string'
	},{
		name: 'PAYMENT_POINT_ID',
		type: 'int'
	},{
		name: 'PAYMENT_POINT_NAME',
		type: 'string'
	},{
		name: 'CABANG_ID',
		type: 'int'
	},{
		name: 'CABANG_NAME',
		type: 'string'
	}]
});