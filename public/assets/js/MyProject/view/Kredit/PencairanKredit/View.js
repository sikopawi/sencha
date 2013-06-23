Ext.define(MyIndo.getNameSpace('view.Kredit.PencairanKredit.View'), {
	extend: 'Ext.grid.Panel',
	alias: 'widget.pencairankreditview',
	border: false,

	columns: [{
		text: 'No Permohonan',
		align: 'center',
		width: 150,
		dataIndex: 'PERMOHONAN_KREDIT_NO'
	},{
		text: 'Customer No. Reg',
		width: 150,
		align: 'center',
		dataIndex: 'CUSTOMERS_NO_REG'
	},{
		text: 'Nama Customer',
		flex: 1,
		dataIndex: 'CUSTOMERS_NAME'
	},{
		text: 'Status',
		align: 'center',
		width: 150,
		dataIndex: 'STATUS'
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
				text: 'Detail Permohonan Kredit',
				iconCls: 'icon-detail',
				action: 'detail'
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