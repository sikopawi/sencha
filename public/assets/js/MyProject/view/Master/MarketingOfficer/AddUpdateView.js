Ext.define(MyIndo.getNameSpace('view.Master.MarketingOfficer.AddUpdateView'), {
	extend: 'Ext.Window',
	alias: 'widget.MarketingOfficeraddwindow',
	modal: true,
	resizable: false,
	title: 'Tambah Marketing Officer',

	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'form',
				id: 'marketingofficer-add-update-form',
				border: false,
				bodyPadding: '5 0 0 0',
				margin: '0 0 -10 0',
				items: [{
					xtype: 'fieldset',
					width: '100%',
					id: 'marketingofficer-add-update-form-fieldset',
					border: false,
					items: [{
						xtype: 'textfield',
						fieldLabel: 'Nama Marketing Officer',
						emptyText: 'nama marketing officer..',
						allowBlank: false,
						name: 'MARKETING_OFFICER_NAME'
					}]
				}]
			}],
			buttons: [{
				text: 'Simpan',
				action: 'add-marketingofficer-save'
			},{
				text: 'Batal',
				action: 'add-marketingofficer-cancel'
			}]
		});
		this.callParent(arguments);
	}
});