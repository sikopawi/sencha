Ext.define(MyIndo.getNameSpace('view.Master.MarketingOfficer.MarketingOfficerView'), {
	extend: 'Ext.grid.Panel',
	alias: 'widget.MarketingOfficerView',
	border: false,
	columns: [/*{
		text: 'Unit Kerja ID',
		width: 110,
		align: 'center',
		dataIndex: 'PAYMENT_POINT_ID'
	},*/{
		text: 'Nama Marketing Officer',
		align: 'center',
		width: 150,
		dataIndex: 'MARKETING_OFFICER_NAME'
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
				text: 'Tambah Marketing Officer',
				iconCls: 'icon-accept',
				action: 'add'
			},{
				text: 'Update Marketing Officer',
				iconCls: 'icon-pencil',
				action: 'update'
			},{
				text: 'Hapus Marketing Officer',
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