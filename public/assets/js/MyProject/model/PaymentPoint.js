Ext.define(MyIndo.getNameSpace('model.PaymentPoint'), {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'PAYMENT_POINT_ID',
		type: 'int'
	},{
		name: 'PAYMENT_POINT_CODE',
		type: 'string'
	},{
		name: 'PAYMENT_POINT_NAME',
		type: 'string'
	},{
		name: 'CREATED_DATE',
		type: 'string'
	},{
		name: 'MODIFIED_DATE',
		type: 'string'
	}]
});