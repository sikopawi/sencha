Ext.define(MyIndo.getNameSpace('view.Master.PermohonanKredit.AddUpdateView'), {
	extend: 'Ext.Window',
	alias: 'widget.permohonankreditaddupdateview', // alias objek untuk dikenal controller
	modal: true,
	resizable: false,
	title: 'Tambah Permohonan Kredit',

	initComponent: function() {
		var me = this;
		Ext.apply(this, {
			items: [{
				xtype: 'form',
				layout: 'hbox',
				id: 'permohonankredit-add-update-form',
				border: false,
				bodyPadding: '5 0 5 5',
				margin: '0 0 -10 0',
				width: 764,
				items: [{
					xtype: 'fieldset',
					title: 'Informasi Permohonan Kredit',
					id: 'permohonankredit-add-update-form-fieldset',
					defaults: {
						width: 340
					},
					defaultType: 'textfield',
					items: [{
						fieldLabel: 'No PK',
						name: 'PERMOHONAN_KREDIT_NO',
						allowBlank: false,
						width: 200
					},{
						xtype: 'combobox',
						fieldLabel: 'Nama Lengkap',
						name: 'CUSTOMERS_ID',
						allowBlank: false,
						displayField: 'CUSTOMERS_NAME',
						valueField: 'CUSTOMERS_ID',
						pageSize: 25,
						editable: false,
						store: me.customerstore
					},{
						fieldLabel: 'Tanggal Lahir',
						name: 'CUSTOMERS_BIRTHDATE',
						allowBlank: false,
						width: 200
					},{
						xtype: 'textarea',
						fieldLabel: 'Alamat Tinggal',
						name: 'CUSTOMERS_ADDRESS',
						height: 100,
						allowBlank: false
					},{
						fieldLabel: 'No. KTP',
						name: 'CUSTOMERS_NO_KTP',
						allowBlank: false,
					},{
						fieldLabel: 'No. Telp',
						name: 'CUSTOMERS_PHONE',
						allowBlank: false
					},{
						fieldLabel: 'NOPEG/NOPEN',
						name: 'CUSTOMERS_NOPEN',
						allowBlank: false
					},{
						fieldLabel: 'No Buku',
						name: 'PERMOHONAN_KREDIT_NO_BUKU',
						allowBlank: false
					},{
						xtype: 'combobox',
						fieldLabel: 'Kategori Debitur',
						name: 'DEBITUR_CATEGORY_ID',
						allowBlank: false,
						displayField: 'DEBITUR_CATEGORY_NAME',
						valueField: 'DEBITUR_CATEGORY_ID',
						pageSize: 25,
						editable: false,
						store: me.debiturkategorystore
					},{
						xtype: 'combobox',
						fieldLabel: 'Kategori Kredit',
						name: 'KREDIT_CATEGORY_ID',
						displayField: 'KREDIT_CATEGORY_NAME',
						valueField: 'KREDIT_CATEGORY_ID',
						allowBlank: false,
						store: me.kreditkategorystore,
						pageSize: 25,
						editable: false
					},{
						fieldLabel: 'Penghasilan',
						name: 'PERMOHONAN_KREDIT_PENGHASILAN',
						allowBlank: false
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
							xtype: 'combobox',
							fieldLabel: 'Payment Point',
							name: 'PAYMENT_POINT_ID',
							allowBlank: false,
							displayField: 'PAYMENT_POINT_CODE',
							valueField: 'PAYMENT_POINT_ID',
							pageSize: 25,
							editable: false,
							store: me.paymentpointstore
						},{
							xtype: 'combobox',
							fieldLabel: 'Ukp',
							name: 'UNIT_KERJA_ID',
							displayField: 'UNIT_KERJA_NAME',
							valueField: 'UNIT_KERJA_ID',
							allowBlank: false,
							store: me.unitkerjastore,
							pageSize: 25,
							editable: false
						},{
							xtype: 'combobox',
							fieldLabel: 'Cabang',
							name: 'CABANG_ID',
							displayField: 'CABANG_NAME',
							valueField: 'CABANG_ID',
							allowBlank: false,
							store: me.cabangstore,
							pageSize: 25,
							editable: false
						},{
							xtype: 'combobox',
							fieldLabel: 'Status Permohonan',
							name: 'PERMOHONAN_KREDIT_STATUS',
							displayField: 'statusPermohonan',
							valueField: 'statusPermohonan',
							allowBlank: false,
							fields:['statusPermohonan'],
							store: ['Baru','Lama'],
							editable: false
						}]
					},{
						xtype: 'fieldset',
						title: 'Kredit Yang Diajukan',
						defaults: {
							width: 360
						},
						defaultType: 'textfield',
						items: [{
							fieldLabel: 'Flapond',
							name: 'PERMOHONAN_KREDIT_PLAFOND',
							allowBlank: false
						},{
							fieldLabel: 'Jwaktu',
							name: 'PERMOHONAN_KREDIT_JWAKTU',
							allowBlank: false
						},{
							fieldLabel: 'Sifat Bunga',
							name: 'PERMOHONAN_KREDIT_SIFAT_BUNGA',
							allowBlank: false
						},{
							fieldLabel: 'Suku Bunga',
							name: 'PERMOHONAN_KREDIT_SUKU_BUNGA',
							allowBlank: false
						},{
							fieldLabel: 'Pokok',
							name: 'PERMOHONAN_KREDIT_POKOK',
							allowBlank: false
						},{
							fieldLabel: 'Bunga',
							name: 'PERMOHONAN_KREDIT_BUNGA',
							allowBlank: false
						},{
							fieldLabel: 'Angsuran',
							name: 'PERMOHONAN_KREDIT_ANGSURAN',
							allowBlank: false
						},{
							xtype: 'textarea',
							fieldLabel: 'Catatan',
							name: 'PERMOHONAN_KREDIT_CATATAN',
							height: 100,
							allowBlank: false
						}]
					}]
				}]
			}],
			buttons: [{
				text: 'Simpan',
				action: 'add-PermohonanKredit-save'
			},{
				text: 'Batal',
				action: 'add-PermohonanKredit-cancel'
			}]
		});
		this.callParent(arguments);
	}
});