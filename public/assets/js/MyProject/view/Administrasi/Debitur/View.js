Ext.define(MyIndo.getNameSpace('view.Administrasi.Debitur.View'), {
	extend: 'Ext.grid.Panel',
	alias: 'widget.debiturview',
	border: false,
	columns: [{
		text: 'No. Rekening',
		width: 200,
		align: 'center',
		dataIndex: 'DEBITUR_NO_REK'
	},{
		text: 'Nama Customer',
		flex: 1,
		dataIndex: 'CUSTOMERS_NAME'
	},{
		text: 'Penghasilan',
		width: 100,
		dataIndex: 'PERMOHONAN_KREDIT_PENGHASILAN',
		renderer: Ext.util.Format.numberRenderer('0.,/i')
	},{
		text: 'Plafond',
		width: 100,
		dataIndex: 'PERMOHONAN_KREDIT_PLAFOND',
		renderer: Ext.util.Format.numberRenderer('0.,/i')
	},{
		text: 'JW',
		width: 40,
		align: 'center',
		dataIndex: 'PERMOHONAN_KREDIT_JWAKTU'
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
				text: 'Kartu',
				iconCls: 'icon-card',
				action: 'card'
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