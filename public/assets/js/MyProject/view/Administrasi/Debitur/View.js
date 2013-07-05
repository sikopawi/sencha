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
		align: 'right',
		dataIndex: 'PERMOHONAN_KREDIT_PENGHASILAN',
		renderer: Ext.util.Format.numberRenderer('0.,/i')
	},{
		text: 'Plafond',
		width: 100,
		align: 'right',
		dataIndex: 'PERMOHONAN_KREDIT_PLAFOND',
		renderer: Ext.util.Format.numberRenderer('0.,/i')
	},{
		text: 'JW',
		width: 40,
		align: 'center',
		dataIndex: 'PERMOHONAN_KREDIT_JWAKTU'
	},{
		text: 'Status',
		width: 80,
		align: 'center',
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
				text: 'Kartu',
				iconCls: 'icon-align-middle',
				action: 'card'
			}/*,{
				text: 'Tagihan Reguler',
				iconCls: 'icon-card-money',
				action: 'tagihan-reguler'
			},{
				text: 'Tagihan Sisipan',
				iconCls: 'icon-visa-electron',
				action: 'tagihan-sisipan'
			},{
				text: 'Pelunasan Kredit',
				iconCls: 'icon-master-card',
				action: 'pelunasan-kredit'
			}*/],
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