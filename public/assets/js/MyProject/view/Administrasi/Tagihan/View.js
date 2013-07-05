Ext.define(MyIndo.getNameSpace('view.Administrasi.Tagihan.View'), {
	extend: 'Ext.grid.Panel',
	alias: 'widget.tagihanview',
	border: false,
	columns: [{
		text: 'Nama Debitur',
		width: 200,
		dataIndex: 'CUSTOMERS_NAME'
	},{
		text: 'Tgl. Pembayaran',
		width: 110,
		align: 'center',
		dataIndex: 'TANGGAL'
	},{
		text: 'Payment Point',
		width: 150,
		dataIndex: 'PAYMENT_POINT_NAME'
	},{
		text: 'Unit Kerja',
		width: 150,
		dataIndex: 'UNIT_KERJA_NAME'
	},{
		text: 'Cabang',
		width: 150,
		dataIndex: 'CABANG_NAME'
	},{
		text: 'ATD Baki Awal',
		width: 100,
		dataIndex: 'BAKI_AWAL',
		align: 'right',
		renderer: Ext.util.Format.numberRenderer('0.,/i')
	},{
		text: 'ATD Pokok',
		width: 100,
		dataIndex: 'ATD_POKOK',
		align: 'right',
		renderer: Ext.util.Format.numberRenderer('0.,/i')
	},{
		text: 'ATD Bunga',
		width: 100,
		dataIndex: 'ATD_BUNGA',
		align: 'right',
		renderer: Ext.util.Format.numberRenderer('0.,/i')
	},{
		text: 'ATD Angsuran',
		width: 100,
		dataIndex: 'ATD_JUMLAH',
		align: 'right',
		renderer: Ext.util.Format.numberRenderer('0.,/i')
	},{
		text: 'AJT Pokok',
		width: 100,
		dataIndex: 'AJT_POKOK',
		align: 'right',
		renderer: Ext.util.Format.numberRenderer('0.,/i')
	},{
		text: 'AJT Bunga',
		width: 100,
		dataIndex: 'AJT_BUNGA',
		align: 'right',
		renderer: Ext.util.Format.numberRenderer('0.,/i')
	},{
		text: 'AJT Angsuran',
		width: 100,
		dataIndex: 'AJT_JUMLAH',
		align: 'right',
		renderer: Ext.util.Format.numberRenderer('0.,/i')
	},{
		text: 'Baki Akhir',
		width: 100,
		dataIndex: 'BAKI_AKHIR',
		align: 'right',
		renderer: Ext.util.Format.numberRenderer('0.,/i')
	},{
		text: 'Created Date',
		width: 150,
		dataIndex: 'CREATED_DATE',
		align: 'center'
	},{
		text: 'Modified Date',
		width: 150,
		dataIndex: 'MODIFIED_DATE',
		align: 'center'
	}],

	initComponent: function() {
		Ext.apply(this, {
			tbar: [{
				text: 'Tagihan Reguler',
				iconCls: 'icon-master-card',
				action: 'tagihan-reguler'
			},{
				text: 'Tagihan Sisipan',
				iconCls: 'icon-visa-card',
				action: 'tagihan-sisipan'
			},{
				text: 'Pelunasan Tagihan',
				iconCls: 'icon-card-money',
				action: 'tagihan-pelunasan'
			},{
				text: 'Tagihan Rekap',
				iconCls: 'icon-detail',
				action: 'tagihan-rekap'
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