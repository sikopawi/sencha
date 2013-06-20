Ext.define(MyIndo.getNameSpace('view.Master.Cabang.AddUpdateView'), {
	extend: 'Ext.Window',
	alias: 'widget.cabangaddwindow',
	modal: true,
	resizable: false,
	title: 'Tambah Cabang',

	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'form',
				id: 'cabang-add-update-form',
				border: false,
				bodyPadding: '5 0 0 0',
				margin: '0 0 -10 0',
				items: [{
					xtype: 'fieldset',
					id: 'cabang-add-update-form-fieldset',
					border: false,
					items: [{
						xtype: 'textfield',
						fieldLabel: 'Nama Cabang',
						emptyText: 'Nama Cabang..',
						allowBlank: false,
						name: 'CABANG_NAME'
					}]
				}]
			}],
			buttons: [{
				text: 'Simpan',
				action: 'add-cabang-save'
			},{
				text: 'Batal',
				action: 'add-cabang-cancel'
			}]
		});
		this.callParent(arguments);
	}
});