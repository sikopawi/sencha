Ext.define(MyIndo.getNameSpace('view.Master.PaymentPoint.PaymentPointView'), {
	extend: 'Ext.grid.Panel',
	alias: 'widget.paymentpointview',
	border: false,
	columns: [/*{
		text: 'Payment Point ID',
		width: 110,
		align: 'center',
		dataIndex: 'PAYMENT_POINT_ID'
	},*/{
		text: 'Payment Point Code',
		align: 'center',
		width: 150,
		dataIndex: 'PAYMENT_POINT_CODE'
	},{
		text: 'Payment Point Name',
		flex: 1,
		dataIndex: 'PAYMENT_POINT_NAME'
	},{
		text: 'Created Date',
		align: 'center',
		width: 150,
		dataIndex: 'CREATED_DATE'
	},{
		text: 'Modified Date',
		align: 'center',
		width: 150,
		dataIndex: 'MODIFIED_DATE'
	}],

	initComponent: function() {
		Ext.apply(this, {
			tbar: [{
				text: 'Tambah Payment Point',
				iconCls: 'icon-accept',
				action: 'add'
			},{
				text: 'Update Payment Point',
				iconCls: 'icon-pencil',
				action: 'update'
			},{
				text: 'Hapus Payment Point',
				iconCls: 'icon-delete',
				action: 'delete'
			}],
			dockedItems: [{
				xtype: 'pagingtoolbar',
				displayInfo: true,
				dock: 'bottom',
				store: this.store
			}]
		});
		this.callParent(arguments);
	}
});