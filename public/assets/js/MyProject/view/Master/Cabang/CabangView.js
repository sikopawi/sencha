Ext.define(MyIndo.getNameSpace('view.Master.Cabang.CabangView'), {
	extend: 'Ext.grid.Panel',
	alias: 'widget.cabangview',
	border: false,
	columns: [/*{
		text: 'Cabang ID',
		align: 'center',
		width: 90,
		dataIndex: 'CABANG_ID'
	},*/{
		text: 'Nama Cabang',
		flex: 1,
		dataIndex: 'CABANG_NAME'
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
				text: 'Tambah Cabang',
				iconCls: 'icon-accept',
				action: 'add'
			},{
				text: 'Update Cabang',
				iconCls: 'icon-pencil',
				action: 'update'
			},{
				text: 'Hapus Cabang',
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