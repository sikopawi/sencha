Ext.define(MyIndo.getNameSpace('view.Master.Customer.Detail'), {
	extend: 'Ext.Window',
	alias: 'widget.customerdetail',
	modal: true,
	resizable: false,
	title: 'Detail Customer',

	initComponent: function() {
		var me = this;
		Ext.apply(this, {
			items: [{
				xtype: 'form',
				layout: 'hbox',
				id: 'customer-detail-form',
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
						name: 'CUSTOMERS_NO_REG',
						allowBlank: false,
						width: 200,
						readOnly: true
					},{
						fieldLabel: 'Nama Lengkap',
						name: 'CUSTOMERS_NAME',
						allowBlank: false,
						readOnly: true
					},{
						xtype: 'textarea',
						fieldLabel: 'Alamat Tinggal',
						name: 'CUSTOMERS_ADDRESS',
						height: 127,
						allowBlank: false,
						readOnly: true
					},{
						fieldLabel: 'No. KTP',
						name: 'CUSTOMERS_NO_KTP',
						allowBlank: false,
						readOnly: true
					},{
						fieldLabel: 'No. Telp',
						name: 'CUSTOMERS_PHONE',
						allowBlank: false,
						readOnly: true
					},{
						xtype: 'datefield',
						fieldLabel: 'Tanggal Lahir',
						name: 'CUSTOMERS_BIRTHDATE',
						format: 'Y-m-d',
						allowBlank: false,
						width: 195,
						readOnly: true
					},{
						fieldLabel: 'NOPEG/NOPEN',
						name: 'CUSTOMERS_NOPEN',
						allowBlank: false,
						readOnly: true
					},{
						fieldLabel: 'Payment Point',
						name: 'PAYMENT_POINT_NAME',
						readOnly: true
					},{
						fieldLabel: 'Unit Kerja',
						name: 'UNIT_KERJA_NAME',
						readOnly: true
					},{
						fieldLabel: 'Cabang',
						name: 'CABANG_NAME',
						readOnly: true
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
							name: 'CUSTOMERS_COMPANY',
							readOnly: true
						},{
							xtype: 'textarea',
							fieldLabel: 'Alamat',
							name: 'CUSTOMERS_COMPANY_ADDRESS',
							height: 73,
							readOnly: true
						},{
							fieldLabel: 'No. Telp',
							name: 'CUSTOMERS_COMPANY_PHONE',
							readOnly: true
						},{
							fieldLabel: 'Jabatan',
							name: 'CUSTOMERS_COMPANY_POSITION',
							readOnly: true
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
							name: 'CUSTOMERS_REFERENCE_NAME',
							readOnly: true
						},{
							xtype: 'textarea',
							fieldLabel: 'Alamat',
							name: 'CUSTOMERS_REFERENCE_ADDRESS',
							height: 73,
							readOnly: true
						},{
							fieldLabel: 'No. Telp',
							name: 'CUSTOMERS_REFERENCE_PHONE',
							readOnly: true
						},{
							fieldLabel: 'Sebagai',
							name: 'CUSTOMERS_REFERENCE_STATUS',
							readOnly: true
						}]
					}]
				}]
			}],
			buttons: [{
				text: 'Tutup',
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