Ext.define(MyIndo.getNameSpace('view.Administrasi.TagihanReguler.View'), {
	extend: 'Ext.grid.Panel',
	alias: 'widget.tagihanregulerview',
	border: false,
	columns: [{

	}],

	initComponent: function() {
		Ext.apply(this, {
			tbar: [{
				text: 'Buat Tagihan Reguler',
				iconCls: 'icon-accept',
				action: 'add'
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