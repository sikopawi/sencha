Ext.define('MyIndo.view.Layout.NorthPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.northpanel',
	title: 'MyProject',
	border: false,
	tbar: [{
		text: 'Logout',
		iconCls: 'icon-lock-break',
		listeners: {
			click: function() {
				Ext.Msg.confirm('Logout', 'Anda yakin ingin keluar dari aplikasi ?', function(btn) {
					if(btn == 'yes') {
						Ext.create('MyIndo.view.Loading').show();
						document.location = MyIndo.siteUrl('login/index/logout');
					}
				});
			}
		}
	}]
});