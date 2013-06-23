// untuk form pop add unit kerja
Ext.define(MyIndo.getNameSpace('view.Master.Kolektabilitas.AddUpdateView'), {
	extend: 'Ext.Window',
	alias: 'widget.Kolektabilitasaddwindow',
	modal: true,
	resizable: false,
	title: 'Tambah Kolektabilitas',

	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'form',
				id: 'kolektabilitas-add-update-form', 
				border: false,
				bodyPadding: '5 0 0 0',
				margin: '0 0 -10 0',
				items: [{
					xtype: 'fieldset',
					width: '100%',
					id: 'kolektabilitas-add-update-form-fieldset',
					border: false,
					items: [{
						xtype: 'textfield',
						fieldLabel: 'Kode',
						emptyText: 'kode kolektabilitas..',
						allowBlank: false,
						name: 'KOLEKTIBILITAS_CODE'
					},{
						xtype: 'textfield',
						fieldLabel: 'Uraian',
						emptyText: 'uraian kolektabilitas..',
						allowBlank: false,
						name: 'KOLEKTIBILITAS_URAIAN'
					},{
						xtype: 'numberfield',
						fieldLabel: 'Tunggakan Minimum',
						emptyText: 'Tunggakan Kolektabilitas Minimum..',
						allowBlank: false,
						minValue: 0,
						name: 'KOLEKTIBILITAS_TUNGGAKAN_MIN'
						
					},{
						xtype: 'numberfield',
						fieldLabel: 'Tunggakan Maximum',
						emptyText: 'tunggakan kolektabilitas maximum..',
						allowBlank: false,
						minValue: 0,
						name: 'KOLEKTIBILITAS_TUNGGAKAN_MAX'
					}]
				}]
			}],
			buttons: [{
				text: 'Simpan',
				action: 'add-Kolektabilitas-save'
			},{
				text: 'Batal',
				action: 'add-Kolektabilitas-cancel'
			}]
		});
		this.callParent(arguments);
	}
});

/*
CREATE TABLE REKENING(
 REKENING_ID INT(19) NOT NULL PRIMARY KEY AUTO_INCREMENT,
 REKENING_NO VARCHAR(100) NOT NULL,
 REKENING_NO_REF VARCHAR(100) NOT NULL,
 REKENING_STATUS VARCHAR(100) NOT NULL DEFAULT '',
 
)ENGINE=InnoDB;
*/