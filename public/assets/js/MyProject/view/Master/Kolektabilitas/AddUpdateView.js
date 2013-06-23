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
						fieldLabel: 'Kode Kolektabilitas',
						emptyText: 'kode kolektabilitas..',
						allowBlank: false,
						name: 'KOLEKTIBILITAS_CODE'
					},{
						xtype: 'textfield',
						fieldLabel: 'Uraian Kolektabilitas',
						emptyText: 'uraian kolektabilitas..',
						allowBlank: false,
						name: 'KOLEKTIBILITAS_URAIAN'
					},{
						xtype: 'textfield',
						fieldLabel: 'Tunggakan Kolektabilitas Minimum',
						emptyText: 'Tunggakan Kolektabilitas Minimum..',
						allowBlank: false,
						name: 'KOLEKTIBILITAS_TUNGGAKAN_MIN'
						
					},{
						xtype: 'textfield',
						fieldLabel: 'Tunggakan Kolektabilits Maximum',
						emptyText: 'tunggakan kolektabilitas maximum..',
						allowBlank: false,
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