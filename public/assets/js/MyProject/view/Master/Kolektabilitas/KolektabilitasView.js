Ext.define(MyIndo.getNameSpace('view.Master.Kolektabilitas.KolektabilitasView'), {
	extend: 'Ext.grid.Panel',
	alias: 'widget.KolektabilitasView',
	border: false,
	columns: [/*{
		text: 'Unit Kerja ID',
		width: 110,
		align: 'center',
		dataIndex: 'PAYMENT_POINT_ID'
	},*/{
		text: 'Kolektabilitas Kode',
		align: 'center',
		width: 150,
		dataIndex: 'KOLEKTIBILITAS_CODE'
	},{
		text: 'Uraian Kolektabilitas',
		flex: 1,
		dataIndex: 'KOLEKTIBILITAS_URAIAN'
	},{
		text: 'Tunggakan Kolektabilitas Minimum',
		flex: 1,
		dataIndex: 'KOLEKTIBILITAS_TUNGGAKAN_MIN'
	},{
		text: 'Tunggakan Kolektabilitas Maximum',
		flex: 1,
		dataIndex: 'KOLEKTIBILITAS_TUNGGAKAN_MAX'
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
				text: 'Tambah Kolektabilitas',
				iconCls: 'icon-accept',
				action: 'add'
			},{
				text: 'Update Kolektabilitas',
				iconCls: 'icon-pencil',
				action: 'update'
			},{
				text: 'Hapus Kolektabilitas',
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