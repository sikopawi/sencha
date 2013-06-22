Ext.define(MyIndo.getNameSpace('view.Master.Customer.AddUpdateView'), {
	extend: 'Ext.Window',
	alias: 'widget.customeraddupdateview',
	modal: true,
	resizable: false,
	title: 'Tambah Customer',

	initComponent: function() {
		var me = this;
		Ext.apply(this, {
			items: [{
				xtype: 'form',
				layout: 'hbox',
				id: 'customer-add-update-form',
				border: false,
				bodyPadding: '5 0 5 5',
				margin: '0 0 -10 0',
				width: 764,
				items: [{
					xtype: 'fieldset',
					title: 'Informasi Customer',
					defaults: {
						width: 340
					},
					defaultType: 'textfield',
					items: [{
						fieldLabel: 'No Reg.',
						name: 'NO_REG',
						allowBlank: false,
						width: 200
					},{
						fieldLabel: 'Nama Lengkap',
						name: 'CUSTOMERS_NAME',
						allowBlank: false
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
						xtype: 'datefield',
						fieldLabel: 'Tanggal Lahir',
						name: 'CUSTOMERS_BIRTHDATE',
						format: 'Y-m-d',
						allowBlank: false,
						width: 195
					},{
						fieldLabel: 'NOPEG/NOPEN',
						name: 'CUSTOMERS_NOPEN',
						allowBlank: false
					},{
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
						fieldLabel: 'UKP',
						name: 'UNIT_KERJA_ID',
						displayField: 'UNIT_KERJA_NAME',
						valueField: 'UNIT_KERJA_ID',
						allowBlank: false,
						store: me.ukstore,
						pageSize: 25
					},{
						xtype: 'combobox',
						fieldLabel: 'Cabang',
						name: 'CABANG_ID',
						allowBlank: false,
						store: me.cbstore,
						displayField: 'CABANG_NAME',
						valueField: 'CABANG_ID',
						pageSize: 25
					}]
				},{
					xtype: 'fieldset',
					layout: 'vbox',
					border: false,
					items: [{
						xtype: 'fieldset',
						title: 'Pekerjaan',
						defaults: {
							width: 360
						},
						defaultType: 'textfield',
						items: [{
							fieldLabel: 'Perusahaan',
							name: 'CUSTOMERS_COMPANY'
						},{
							xtype: 'textarea',
							fieldLabel: 'Alamat',
							name: 'CUSTOMERS_COMPANY_ADDRESS',
							height: 73
						},{
							fieldLabel: 'No. Telp',
							name: 'CUSTOMERS_COMPANY_PHONE'
						},{
							fieldLabel: 'Jabatan',
							name: 'CUSTOMERS_COMPANY_POSITION'
						}]
					},{
						xtype: 'fieldset',
						title: 'Referensi / Contact Person',
						defaults: {
							width: 360
						},
						defaultType: 'textfield',
						items: [{
							fieldLabel: 'Nama',
							name: 'CUSTOMERS_REFERENCE_NAME'
						},{
							xtype: 'textarea',
							fieldLabel: 'Alamat',
							name: 'CUSTOMERS_REFERENCE_ADDRESS',
							height: 73
						},{
							fieldLabel: 'No. Telp',
							name: 'CUSTOMERS_REFERENCE_PHONE'
						},{
							fieldLabel: 'Sebagai',
							name: 'CUSTOMERS_REFERENCE_STATUS'
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