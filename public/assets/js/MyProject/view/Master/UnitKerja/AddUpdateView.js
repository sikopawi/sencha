// untuk form pop add unit kerja
Ext.define(MyIndo.getNameSpace('view.Master.UnitKerja.AddUpdateView'), {
	extend: 'Ext.Window',
	alias: 'widget.UnitKerjaaddwindow',
	modal: true,
	resizable: false,
	title: 'Tambah Unit Kerja',

	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'form',
				id: 'unitkerja-add-update-form', 
				border: false,
				bodyPadding: '5 0 0 0',
				margin: '0 0 -10 0',
				items: [{
					xtype: 'fieldset',
					width: '100%',
					id: 'unitkerja-add-update-form-fieldset',
					border: false,
					defaults: {
						width: 300
					},
					items: [{
						xtype: 'textfield',
						fieldLabel: 'Nama Unit Kerja',
						emptyText: 'Nama Unit Kerja..',
						allowBlank: false,
						name: 'UNIT_KERJA_NAME'
					},{
						xtype: 'textarea',
						fieldLabel: 'Alamat Unit Kerja',
						emptyText: 'Alamat Unit Kerja..',
						allowBlank: false,
						name: 'UNIT_KERJA_ADDRESS'
					},{
						xtype: 'textfield',
						fieldLabel: 'Telepon',
						emptyText: 'Telepon unit kerja..',
						allowBlank: false,
						name: 'UNIT_KERJA_PHONE'
						
					},{
						
						xtype: 'textfield',
						fieldLabel: 'Fax',
						emptyText: 'Fax..',
						allowBlank: false,
						name: 'UNIT_KERJA_FAX'
						
							
					},{
						xtype: 'textfield',
						fieldLabel: 'Kontak Person',
						emptyText: 'Kontak Person..',
						allowBlank: false,
						name: 'UNIT_KERJA_CONTACT_PERSON'
					}]
				}]
			}],
			buttons: [{
				text: 'Simpan',
				action: 'add-unitkerja-save'
			},{
				text: 'Batal',
				action: 'add-unitkerja-cancel'
			}]
		});
		this.callParent(arguments);
	}
});