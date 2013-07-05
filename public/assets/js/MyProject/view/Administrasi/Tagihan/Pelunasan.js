Ext.define(MyIndo.getNameSpace('view.Administrasi.Tagihan.Pelunasan'), {
	extend: 'Ext.Window',
	alias: 'widget.tagihanpelunasanwindow',
	closable: true,
	resizable: false,
	title: 'Tagihan Pelunasan',
	modal: true,
	width: 618,
	id: 'tagihan-pelunasan-window',

	initComponent: function() {
		var me = this;
		Ext.apply(this, {
			items: [{
				xtype: 'form',
				layout: 'hbox',
				id: 'pelunasan-form',
				bodyPadding: 5,
				border: false,
				items: [{
					xtype: 'fieldset',
					title: 'Info Pembayaran',
					items: [{
						xtype: 'combobox',
						fieldLabel: 'Payment Point',
						name: 'PAYMENT_POINT_ID',
						allowBlank: false,
						displayField: 'PAYMENT_POINT_NAME',
						valueField: 'PAYMENT_POINT_ID',
						pageSize: 25,
						editable: false,
						store: me.paymentPointStore
					},{
						xtype: 'combobox',
						fieldLabel: 'Unit Kerja',
						name: 'UNIT_KERJA_ID',
						allowBlank: false,
						displayField: 'UNIT_KERJA_NAME',
						valueField: 'UNIT_KERJA_ID',
						pageSize: 25,
						editable: false,
						store: me.unitKerjaStore
					},{
						xtype: 'combobox',
						fieldLabel: 'Cabang',
						name: 'CABANG_ID',
						allowBlank: false,
						displayField: 'CABANG_NAME',
						valueField: 'CABANG_ID',
						pageSize: 25,
						editable: false,
						store: me.cabangStore
					}]
				},{
					xtype: 'fieldset',
					title: 'Info Rekening',
					style: {
						marginLeft: '5px'
					},
					items: [{
						xtype: 'combobox',
						fieldLabel: 'No. Rekening',
						id: 'pel-no-rek',
						name: 'DEBITUR_ID',
						allowBlank: false,
						displayField: 'DEBITUR_NO_REK',
						valueField: 'DEBITUR_ID',
						pageSize: 25,
						editable: false,
						store: me.debiturStore
					},{
						xtype: 'numberfield',
						name: 'BAKI_AWAL',
						fieldLabel: 'Baki Awal',
						minValue: 0,
						value: 0,
						allowBlank: false,
						readOnly: true
					},{
						xtype: 'numberfield',
						name: 'ATD_POKOK',
						fieldLabel: 'Pokok',
						minValue: 0,
						value: 0,
						allowBlank: false,
						readOnly: true
					},{
						xtype: 'numberfield',
						name: 'ATD_BUNGA',
						id: 'pel-bunga',
						fieldLabel: 'Bunga',
						minValue: 0,
						value: 0,
						allowBlank: false
					},{
						xtype: 'numberfield',
						name: 'ATD_JUMLAH',
						fieldLabel: 'Angsuran',
						minValue: 0,
						value: 0,
						allowBlank: false,
						readOnly: true
					},{
						xtype: 'numberfield',
						name: 'BAKI_AKHIR',
						fieldLabel: 'Baki AKhir',
						minValue: 0,
						value: 0,
						allowBlank: false,
						readOnly: true
					}]
				}]
			},{
				border: false,
				html: '<div style="float:right;margin-right: 85px"><strong>Note:</strong> Hanya Bunga yang dapat diganti.</div><br clear="all"/><br/>'
			}],
			buttons: [{
				text: 'Bayar',
				iconCls: 'icon-accept',
				action: 'reguler-save'
			},{
				text: 'Batal',
				iconCls: 'icon-cross',
				listeners: {
					click: function() {
						this.up().up().close();
					}
				}
			}]
		});
		this.callParent(arguments);
	}
});