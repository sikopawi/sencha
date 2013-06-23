Ext.define(MyIndo.getNameSpace('view.Simpanan.Rekening.View'), {
	extend: 'Ext.grid.Panel',
	alias: 'widget.rekeningview',
	border: false,
	columns: [{
		text: 'No. Rekening',
		width: 150,
		align: 'center',
		dataIndex: 'REKENING_NO'
	},{
		text: 'Nama Pemilik Rekening',
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
				text: 'Tambah Rekening',
				iconCls: 'icon-accept',
				action: 'add'
			},{
				text: 'Update Rekening',
				iconCls: 'icon-pencil',
				action: 'update'
			},{
				text: 'Hapus Rekening',
				iconCls: 'icon-delete',
				action: 'delete'
			},{
				text: 'Detail Rekening',
				iconCls: 'icon-detail',
				action: 'detail'
			},{
				text: 'Cari Rekening',
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