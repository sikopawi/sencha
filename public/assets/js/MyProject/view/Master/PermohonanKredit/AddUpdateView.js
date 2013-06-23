Ext.define(MyIndo.getNameSpace('view.Master.PermohonanKredit.AddUpdateView'), {
	extend: 'Ext.Window',
	alias: 'widget.permohonankreditaddupdateview',
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
						name: 'PAYMENT_POINT_ID',
						allowBlank: false,
						displayField: 'PAYMENT_POINT_CODE',
						valueField: 'PAYMENT_POINT_ID',
						pageSize: 25,
						editable: false,
						store: me.customerstore
					},{
						xtype: 'datefield',
						fieldLabel: 'Tanggal Lahir',
						name: 'permohonankreditS_ADDRESS',
						format: 'Y-m-d',
						allowBlank: false
					},{
						xtype: 'textarea',
						fieldLabel: 'Alamat Tinggal',
						name: 'permohonankreditS_ADDRESS',
						height: 100,
						allowBlank: false
					},{
						fieldLabel: 'No. KTP',
						name: 'permohonankreditS_NO_KTP',
						allowBlank: false,
					},{
						fieldLabel: 'No. Telp',
						name: 'permohonankreditS_PHONE',
						allowBlank: false
					},{
						fieldLabel: 'NOPEG/NOPEN',
						name: 'permohonankreditS_NOPEN',
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
						displayField: 'PAYMENT_POINT_CODE',
						valueField: 'PAYMENT_POINT_ID',
						pageSize: 25,
						editable: false,
						store: me.pptstore
					},{
						xtype: 'combobox',
						fieldLabel: 'Kategori Kredit',
						name: 'KREDIT_CATEGORY_ID',
						displayField: 'UNIT_KERJA_NAME',
						valueField: 'UNIT_KERJA_ID',
						allowBlank: false,
						store: me.ukstore,
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
							store: me.pptstore
						},{
							xtype: 'combobox',
							fieldLabel: 'Ukp',
							name: 'UNIT_KERJA_ID',
							displayField: 'UNIT_KERJA_NAME',
							valueField: 'UNIT_KERJA_ID',
							allowBlank: false,
							store: me.ukstore,
							pageSize: 25,
							editable: false
						},{
							xtype: 'combobox',
							fieldLabel: 'Cabang',
							name: 'UNIT_KERJA_ID',
							displayField: 'UNIT_KERJA_NAME',
							valueField: 'CABANG_ID',
							allowBlank: false,
							store: me.ukstore,
							pageSize: 25,
							editable: false
						},{
							xtype: 'combobox',
							fieldLabel: 'Status Permohonan',
							name: 'UNIT_KERJA_ID',
							displayField: 'UNIT_KERJA_NAME',
							valueField: 'CABANG_ID',
							allowBlank: false,
							store: me.ukstore,
							pageSize: 25,
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
							name: 'PERMOHONAN_KREDIT_PLAFOND	'
						},{
							fieldLabel: 'Jwaktu',
							name: 'PERMOHONAN_KREDIT_JWAKTU'
						},{
							fieldLabel: 'Sifat Bunga',
							name: 'PERMOHONAN_KREDIT_SIFAT_BUNGA'
						},{
							fieldLabel: 'Suku Bunga',
							name: 'PERMOHONAN_KREDIT_SUKU_BUNGA'
						},{
							fieldLabel: 'Pokok',
							name: 'PERMOHONAN_KREDIT_POKOK'
						},{
							fieldLabel: 'Bunga',
							name: 'PERMOHONAN_KREDIT_BUNGA'
						},{
							fieldLabel: 'Angsuran',
							name: 'PERMOHONAN_KREDIT_ANGSURAN'
						}]
					}]
				}]
			}],
			buttons: [{
				text: 'Simpan',
				action: 'add-save'
			},{
				text: 'Batal',
				action: 'add-cancel'
			}]
		});
		this.callParent(arguments);
	}
});