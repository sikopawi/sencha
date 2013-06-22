Ext.define(MyIndo.getNameSpace('view.Master.DebiturCategory.AddUpdateView'), {
	extend: 'Ext.Window',
	alias: 'widget.debiturcategoryaddupdatewindow',
	modal: true,
	resizable: false,
	title: 'Tambah Debitur Category',

	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'form',
				id: 'debiturcategory-add-update-form',
				border: false,
				bodyPadding: '5 0 0 0',
				margin: '0 0 -10 0',
				items: [{
					xtype: 'fieldset',
					id: 'debiturcategory-add-update-form-fieldset',
					border: false,
					items: [{
						xtype: 'textfield',
						fieldLabel: 'Debitur Category',
						emptyText: 'Debitur Category..',
						allowBlank: false,
						name: 'DEBITUR_CATEGORY_NAME'
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