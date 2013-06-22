Ext.define(MyIndo.getNameSpace('view.Master.UnitKerja.UnitKerjaView'), {
	extend: 'Ext.grid.Panel',
	alias: 'widget.UnitKerjaView',
	border: false,
	columns: [/*{
		text: 'Unit Kerja ID',
		width: 110,
		align: 'center',
		dataIndex: 'PAYMENT_POINT_ID'
	},*/{
		text: 'Unit Kerja Name',
		align: 'center',
		width: 150,
		dataIndex: 'UNIT_KERJA_NAME'
	},{
		text: 'Unit Kerja Alamat',
		flex: 1,
		dataIndex: 'UNIT_KERJA_ADDRESS'
	},{
		text: 'Unit Kerja Telephone',
		flex: 1,
		dataIndex: 'UNIT_KERJA_PHONE'
	},{
		text: 'Unit Kerja Fax',
		flex: 1,
		dataIndex: 'UNIT_KERJA_FAX'
	},{
		text: 'Unit Kerja Contac Person',
		flex: 1,
		dataIndex: 'UNIT_KERJA_CONTACT_PERSON'
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
				text: 'Tambah Unit Kerja',
				iconCls: 'icon-accept',
				action: 'add'
			},{
				text: 'Update Unit Kerja',
				iconCls: 'icon-pencil',
				action: 'update'
			},{
				text: 'Hapus Unit Kerja',
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