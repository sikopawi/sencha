Ext.define(MyIndo.getNameSpace('view.Master.PermohonanKredit.PermohonanKreditView'), {
	extend: 'Ext.grid.Panel',
	alias: 'widget.PermohonanKreditView',
	border: false,
	columns: [/*{
		text: 'Unit Kerja ID',
		width: 110,
		align: 'center',
		dataIndex: 'PAYMENT_POINT_ID'
	},*/{
		text: 'No Permohonan',
		align: 'center',
		width: 150,
		dataIndex: 'PERMOHONAN_KREDIT_NO'
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
				text: 'Tambah Permohonan Kredit',
				iconCls: 'icon-accept',
				action: 'add'
			},{
				text: 'Update Permohonan Kredit',
				iconCls: 'icon-pencil',
				action: 'update'
			},{
				text: 'Hapus Permohonan Kredit',
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