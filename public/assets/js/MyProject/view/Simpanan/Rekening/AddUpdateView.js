Ext.define(MyIndo.getNameSpace('view.Simpanan.Rekening.AddUpdateView'), {
	extend: 'Ext.Window',
	alias: 'widget.rekeningaddupdateview',
	modal: true,
	resizable: false,
	title: 'Tambah Rekening',

	initComponent: function() {
		var me = this;
		Ext.apply(this, {
			items: [{
				xtype: 'form',
				layout: 'hbox',
				id: 'rekening-add-update-form',
				bodyPadding: '5 0 5 5',
				margin: '0 0 -10 0',
				width: 650,
				border: false,
				items: [{
					xtype: 'fieldset',
					id: 'rekeing-add-update-form-fieldset-1',
					defaultType: 'textfield',
					border: false,
					defaults: {
						width: 350
					},
					items: [{
						fieldLabel: 'No. Rekening',
						name: 'REKENING_NO',
						allowBlank: false,
						width: 350,
					},{
						xtype: 'combobox',
						name: 'CUSTOMERS_ID',
						fieldLabel: 'No. Reg',
						id: 'rekening_combo',
						displayField: 'CUSTOMERS_NO_REG',
						inputField: 'CUSTOMERS_ID',
						allowBlank: false,
						editable: false,
						store: me.cusstore,
						pageSize: 25,
						width: 350
					},{
						xtype: 'textarea',
						fieldLabel: 'Alamat Tinggal',
						name: 'CUSTOMERS_ADDRESS',
						readOnly: true
					},{
						fieldLabel: 'Telepon',
						name: 'CUSTOMERS_PHONE',
						readOnly: true
					},{
						fieldLabel: 'Tanggal Lahir',
						name: 'CUSTOMERS_BIRTHDATE',
						readOnly: true,
						width: 200
					},{
						fieldLabel: 'No. Ref',
						name: 'REKEING_NO_REF',
						allowBlank: false
					},{
						fieldLabel: 'Unit Kerja',
						name: 'UNIT_KERJA_NAME',
						readOnly: true,
						width: 300
					},{
						fieldLabel: 'Cabang',
						name: 'CABANG_NAME',
						readOnly: true,
						width: 300
					}]
				},{
					xtype: 'fieldset',
					id: 'rekeing-add-update-form-fieldset-2',
					border: false,
					defaultType: 'textfield',
					defaults: {
						width: 250
					},
					items: [{
						fieldLabel: 'Status',
						name: 'REKENING_STATUS',
						allowBlank: false
					},{
						fieldLabel: 'Entry By',
						name: 'ENTRY_BY',
						allowBlank: false,
						readOnly: true
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