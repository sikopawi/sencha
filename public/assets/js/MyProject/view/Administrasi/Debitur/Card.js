Ext.define(MyIndo.getNameSpace('view.Administrasi.Debitur.Card'), {
	extend: 'Ext.Window',
	alias: 'widget.debiturcard',
	closable: true,
	title: 'Kartu Debitur',
	modal: true,
	width: 750,
	height: 356,
	resizable: false,
	autoScroll: true,

	initComponent: function() {
		var me = this;
		Ext.apply(this, {
			items: [{
				xtype: 'panel',
				border: false,
				items: [{
					border: false,
					bodyPadding: 5,
					html: '<p style="font-weight: 800;font-size: 16px">KSP SIKOPAWI MANDIRI, Purwakarta</p>' +

					'<div style="float:left"><table cellpadding="0" cellspacing="0">' +

					'<tr>' +
						'<td style="font-weight: 800">No Rekening</td><td style="width: 10px" align="center">:</td>' +
						'<td>' + this.data.DEBITUR_NO_REK + '</td>' +
					'</tr>' +

					'<tr>' +
						'<td style="font-weight: 800">Plafond</td><td style="width: 10px" align="center">:</td>' +
						'<td>Rp ' + this.number_format(this.data.PERMOHONAN_KREDIT_PLAFOND,0,'','.') + ' ,-</td>' +
					'</tr>' +

					'<tr>' +
						'<td style="font-weight: 800">JWaktu</td><td style="width: 10px" align="center">:</td>' +
						'<td>' + this.data.PERMOHONAN_KREDIT_JWAKTU + ' Bulan</td>' +
					'</tr>' +

					'<tr>' +
						'<td style="font-weight: 800">Bunga</td><td style="width: 10px" align="center">:</td>' +
						'<td>' + this.data.PERMOHONAN_KREDIT_SUKU_BUNGA + '% ' + this.data.PERMOHONAN_KREDIT_SIFAT_BUNGA + '</td>' +
					'</tr>' +

					'<tr>' +
						'<td style="font-weight: 800">Angsuran</td><td style="width: 10px" align="center">:</td>' +
						'<td>Rp ' + this.number_format(this.data.PERMOHONAN_KREDIT_ANGSURAN,0,'','.') + ' ,-</td>' +
					'</tr>' +

					'</table></div><div style="float:left;margin-left: 20px"><table cellpadding="0" cellspacing="0">' + 


					'<tr>' +
						'<td style="font-weight: 800">Nama</td><td style="width: 10px" align="center">:</td>' +
						'<td>' + this.data.CUSTOMERS_NAME + '</td>' +
					'</tr>' +

					'<tr>' +
						'<td style="font-weight: 800">Alamat</td><td style="width: 10px" align="center">:</td>' +
						'<td>' + this.data.CUSTOMERS_ADDRESS + '</td>' +
					'</tr>' +

					'<tr>' +
						'<td style="font-weight: 800">Kategori Debitur</td><td style="width: 10px" align="center">:</td>' +
						'<td>' + this.data.DEBITUR_CATEGORY_NAME + '</td>' +
					'</tr>' +

					'<tr>' +
						'<td style="font-weight: 800">Kategori Kredit</td><td style="width: 10px" align="center">:</td>' +
						'<td>' + this.data.KREDIT_CATEGORY_NAME + '</td>' +
					'</tr>' +

					'<tr>' +
						'<td style="font-weight: 800">Payment Point</td><td style="width: 10px" align="center">:</td>' +
						'<td>' + this.data.PAYMENT_POINT_NAME + '</td>' +
					'</tr>' +

					'</table></div><div style="float: left;margin-left: 20px"><table cellpadding="0" cellspacing="0"><tr><td style="font-weight: 800">Status</td><td style="width: 10px">:</td><td>'+this.data.STATUS+'</td></tr></table></div><br clear="all"/><br/>'
				},{
					xtype: 'gridpanel',
					autoScroll: true,
					store: this.cardStore,
					border: false,
					minHeight: 150,
					columns: [{
						text: 'No.',
						width: 40,
						align: 'center',
						dataIndex: 'PAYMENT_ID'
					},{
						text: 'Tanggal',
						width: 100,
						align: 'center',
						dataIndex: 'TANGGAL'
					},{
						text: 'Baki Awal',
						flex: 1,
						align: 'right',
						dataIndex: 'BAKI_AWAL',
						renderer: Ext.util.Format.numberRenderer('0.,/i')
					},{
						text: 'ATD Pokok',
						flex: 1,
						align: 'right',
						dataIndex: 'ATD_POKOK',
						renderer: Ext.util.Format.numberRenderer('0.,/i')
					},{
						text: 'ATD Bunga',
						flex: 1,
						align: 'right',
						dataIndex: 'ATD_BUNGA',
						renderer: Ext.util.Format.numberRenderer('0.,/i')
					},{
						text: 'ATD Jumlah',
						flex: 1,
						align: 'right',
						dataIndex: 'ATD_JUMLAH',
						renderer: Ext.util.Format.numberRenderer('0.,/i')
					},{
						text: 'AJT Pokok',
						flex: 1,
						align: 'right',
						dataIndex: 'AJT_POKOK',
						renderer: Ext.util.Format.numberRenderer('0.,/i')
					},{
						text: 'AJT Bunga',
						flex: 1,
						align: 'right',
						dataIndex: 'AJT_BUNGA',
						renderer: Ext.util.Format.numberRenderer('0.,/i')
					},{
						text: 'AJT Jumlah',
						flex: 1,
						align: 'right',
						dataIndex: 'AJT_JUMLAH',
						renderer: Ext.util.Format.numberRenderer('0.,/i')
					},{
						text: 'Baki Akhir',
						flex: 1,
						align: 'right',
						dataIndex: 'BAKI_AKHIR',
						renderer: Ext.util.Format.numberRenderer('0.,/i')
					}],
					dockedItems: [{
						xtype: 'pagingtoolbar',
						displayInfo: true,
						dock: 'bottom',
						store: this.cardStore
					}]
				}]
			}],
			buttons: [{
				text: 'Cetak Kartu',
				iconCls: 'icon-printer',
				listeners: {
					click: function() {
						window.open(MyIndo.siteUrl('pdf/print/card?no_rekening='+me.data.DEBITUR_NO_REK), '_blank');
					}
				}
			},{
				text: 'Tutup',
				iconCls: 'icon-cross',
				listeners: {
					click: function() {
						this.up().up().close();
					}
				}
			}]
		});
		this.callParent(arguments);
	},

	number_format: function(number, decimals, dec_point, thousands_sep) {
		  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
		  var n = !isFinite(+number) ? 0 : +number,
		    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
		    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
		    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
		    s = '',
		    toFixedFix = function (n, prec) {
		      var k = Math.pow(10, prec);
		      return '' + Math.round(n * k) / k;
		    };
		  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
		  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
		  if (s[0].length > 3) {
		    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
		  }
		  if ((s[1] || '').length < prec) {
		    s[1] = s[1] || '';
		    s[1] += new Array(prec - s[1].length + 1).join('0');
		  }
		  return s.join(dec);
	}

});