Ext.define(MyIndo.getNameSpace('view.Master.KreditCategory.KreditCategoryView'), {
	extend: 'Ext.grid.Panel',
	alias: 'widget.kreditcategoryview',
	border: false,
	columns: [{
		text: 'Kredit Category',
		flex: 1,
		dataIndex: 'KREDIT_CATEGORY_NAME'
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
				text: 'Tambah Kredit Category',
				iconCls: 'icon-accept',
				action: 'add'
			},{
				text: 'Update Kredit Category',
				iconCls: 'icon-pencil',
				action: 'update'
			},{
				text: 'Hapus Kredit Category',
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