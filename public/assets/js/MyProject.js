Ext.Loader.setConfig({
	enabled: true
});

Ext.Loader.setPath('MyIndo', 'assets/js/MyIndo');

Ext.application({
	appFolder: 'assets/js/MyProject',
	name: 'MyProject',

	controllers: [
	'Menu',
	'Master.Cabang',
	'Master.PaymentPoint',
	'Master.KreditCategory',
	'Master.DebiturCategory',
	'Master.Customer',
	'Master.UnitKerja',
	'Master.MarketingOfficer',
	'Master.Kolektabilitas',
	'Master.PermohonanKredit',

	'Kredit.AnalisaKredit',
	'Kredit.PencairanKredit',
	
	'Simpanan.Rekening'
	],

	autoCreateViewport: true,
	launch: function() {
		
		Ext.Error.handle = function(err) {
			Ext.create('Ext.Window', {
				title: 'Application Error !',
				modal: true,
				minWidth: 500,
				minHeight: 120,
				maxWidth: 780,
				maxHeight: 900,
				resizable: false,
				draggable: true,
				bodyPadding: '10 10 10 10',
				html: '<strong>Source:</strong> ' + err.sourceClass + '<br/><strong>Source Method:</strong> ' + err.sourceMethod + '<br/><strong>Message</strong>:<pre>' + err.msg + '</pre>',
				buttons: [{
					text: 'Close',
					listeners: {
						click: function() {
							this.up().up().close();
						}
					}
				}]
			}).show();
			return true;
		};

	}
});