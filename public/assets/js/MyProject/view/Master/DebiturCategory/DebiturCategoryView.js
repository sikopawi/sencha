Ext.define(MyIndo.getNameSpace('view.Master.DebiturCategory.DebiturCategoryView'), {
	extend: 'Ext.grid.Panel',
	alias: 'widget.debiturcategoryview',
	border: false,
	columns: [{
		text: 'Debitur Category',
		flex: 1,
		dataIndex: 'DEBITUR_CATEGORY_NAME'
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
				text: 'Tambah Debitur Category',
				iconCls: 'icon-accept',
				action: 'add'
			},{
				text: 'Update Debitur Category',
				iconCls: 'icon-pencil',
				action: 'update'
			},{
				text: 'Hapus Debitur Category',
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