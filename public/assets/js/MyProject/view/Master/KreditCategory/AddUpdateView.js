Ext.define(MyIndo.getNameSpace('view.Master.KreditCategory.AddUpdateView'), {
	extend: 'Ext.Window',
	alias: 'widget.kreditcategoryaddupdatewindow',
	modal: true,
	resizable: false,
	title: 'Tambah Kredit Category',

	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'form',
				id: 'kreditcategory-add-update-form',
				border: false,
				bodyPadding: '5 0 0 0',
				margin: '0 0 -10 0',
				items: [{
					xtype: 'fieldset',
					id: 'kreditcategory-add-update-form-fieldset',
					border: false,
					items: [{
						xtype: 'textfield',
						fieldLabel: 'Kredit Category',
						emptyText: 'Kredit Category..',
						allowBlank: false,
						name: 'KREDIT_CATEGORY_NAME'
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