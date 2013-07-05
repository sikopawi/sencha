Ext.define(MyIndo.getNameSpace('view.Kredit.AnalisaKredit.Detail'), {
	extend: 'Ext.Window',
	alias: 'widget.detailpermohonankreditview',
	modal: true,
	resizable: false,
	title: 'Detail Permohonan Kredit',

	initComponent: function() {
		var me = this;
		Ext.apply(this, {
			items: [{
				xtype: 'form',
				layout: 'hbox',
				id: 'analisakredit-add-update-form',
				border: false,
				bodyPadding: '5 0 5 5',
				margin: '0 0 -10 0',
				width: 764,
				items: [{
					xtype: 'fieldset',
					title: 'Informasi Permohonan Kredit',
					id: 'analisakredit-add-update-form-fieldset',
					defaults: {
						width: 340
					},
					defaultType: 'textfield',
					items: [{
						xtype: 'hidden',
						name: 'PERMOHONAN_KREDIT_ID'
					},{
						fieldLabel: 'No PK',
						name: 'PERMOHONAN_KREDIT_NO',
						allowBlank: false,
						width: 200,
						readOnly: true
					},{
						fieldLabel: 'No. Reg',
						name: 'CUSTOMERS_NO_REG',
						allowBlank: false,
						readOnly: true
					},{
						fieldLabel: 'Nama Lengkap',
						name: 'CUSTOMERS_NAME',
						allowBlank: false,
						readOnly: true
					},{
						fieldLabel: 'Tanggal Lahir',
						name: 'CUSTOMERS_BIRTHDATE',
						width: 200,
						readOnly: true
					},{
						xtype: 'textarea',
						fieldLabel: 'Alamat Tinggal',
						name: 'CUSTOMERS_ADDRESS',
						height: 100,
						readOnly: true
					},{
						fieldLabel: 'No. KTP',
						name: 'CUSTOMERS_NO_KTP',
						readOnly: true
					},{
						fieldLabel: 'No. Telp',
						name: 'CUSTOMERS_PHONE',
						readOnly: true
					},{
						fieldLabel: 'NOPEG/NOPEN',
						name: 'CUSTOMERS_NOPEN',
						readOnly: true
					},{
						fieldLabel: 'No Buku',
						name: 'PERMOHONAN_KREDIT_NO_BUKU',
						allowBlank: false,
						readOnly: true
					},{
						fieldLabel: 'Kategori Debitur',
						name: 'DEBITUR_CATEGORY_NAME',
						allowBlank: false,
						readOnly: true
					},{
						fieldLabel: 'Kategori Kredit',
						name: 'KREDIT_CATEGORY_NAME',
						allowBlank: false,
						readOnly: true
					},{
						fieldLabel: 'Penghasilan',
						name: 'PERMOHONAN_KREDIT_PENGHASILAN',
						allowBlank: false,
						readOnly: true
					}]
				},{
					xtype: 'fieldset',
					layout: 'vbox',
					border: false,
					items: [{
						xtype: 'fieldset',
						title: 'Informasi Permohonan Kredit',
						defaults: {
							width: 360
						},
						defaultType: 'textfield',
						items: [{
							fieldLabel: 'Payment Point',
							name: 'PAYMENT_POINT_NAME',
							allowBlank: false,
							readOnly: true
						},{
							fieldLabel: 'Ukp',
							name: 'UNIT_KERJA_NAME',
							allowBlank: false,
							readOnly: true
						},{
							fieldLabel: 'Cabang',
							name: 'CABANG_NAME',
							allowBlank: false,
							readOnly: true
						},{
							fieldLabel: 'Status Permohonan',
							name: 'PERMOHONAN_KREDIT_STATUS',
							allowBlank: false,
							readOnly: true
						}]
					},{
						xtype: 'fieldset',
						title: 'Kredit Yang Diajukan',
						defaults: {
							width: 360
						},
						defaultType: 'textfield',
						items: [{
							fieldLabel: 'Plafond',
							name: 'PERMOHONAN_KREDIT_PLAFOND',
							allowBlank: false,
							readOnly: true
						},{
							fieldLabel: 'Jwaktu',
							name: 'PERMOHONAN_KREDIT_JWAKTU',
							allowBlank: false,
							readOnly: true
						},{
							fieldLabel: 'Sifat Bunga',
							name: 'PERMOHONAN_KREDIT_SIFAT_BUNGA',
							allowBlank: false,
							readOnly: true
						},{
							fieldLabel: 'Suku Bunga',
							name: 'PERMOHONAN_KREDIT_SUKU_BUNGA',
							allowBlank: false,
							readOnly: true
						},{
							fieldLabel: 'Pokok',
							name: 'PERMOHONAN_KREDIT_POKOK',
							allowBlank: false,
							readOnly: true
						},{
							fieldLabel: 'Bunga',
							name: 'PERMOHONAN_KREDIT_BUNGA',
							allowBlank: false,
							readOnly: true
						},{
							fieldLabel: 'Angsuran',
							name: 'PERMOHONAN_KREDIT_ANGSURAN',
							allowBlank: false,
							readOnly: true
						},{
							xtype: 'textarea',
							fieldLabel: 'Catatan',
							name: 'PERMOHONAN_KREDIT_CATATAN',
							height: 100,
							allowBlank: false,
							readOnly: true
						}]
					}]
				}]
			}],
			buttons: [{
				text: 'Setujui',
				iconCls: 'icon-accept',
				action: 'analisakredit-accept'
			},{
				text: 'Tolak',
				iconCls: 'icon-cross',
				action: 'analisakredit-decline'
			},{
				text: 'Batal',
				action: 'analisakredit-cancel'
			}]
		});
		this.callParent(arguments);
	}
});