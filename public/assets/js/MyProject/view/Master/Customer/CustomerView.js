Ext.define(MyIndo.getNameSpace('view.Master.Customer.CustomerView'), {
	extend: 'Ext.grid.Panel',
	alias: 'widget.customerview',
	border: false,
	columns: [{
		text: 'No. Reg',
		width: 150,
		align: 'center',
		dataIndex: 'CUSTOMERS_NO_REG'
	},{
		text: 'Customer Name',
		flex: 1,
		dataIndex: 'CUSTOMERS_NAME'
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
				text: 'Tambah Customer',
				iconCls: 'icon-accept',
				action: 'add'
			},{
				text: 'Update Customer',
				iconCls: 'icon-pencil',
				action: 'update'
			},{
				text: 'Hapus Customer',
				iconCls: 'icon-delete',
				action: 'delete'
			},{
				text: 'Detail Customer',
				iconCls: 'icon-detail',
				action: 'detail'
			},{
				text: 'Cari Customer',
				iconCls: 'icon-search',
				action: 'search'
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