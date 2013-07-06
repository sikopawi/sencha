<?php
require_once('MyIndo/Tcpdf/html2pdf.class.php');
class Pdf_PrintController extends Zend_Controller_Action
{
	public function init()
	{
		$this->_helper->layout()->disableLayout();
		$this->_helper->viewRenderer->setNoRender(true);
	}

	public function cardAction()
	{
		$noRekening = $this->getParam('no_rekening', 0);
		$modelDebitur = new debitur_Model_DebiturView();
		$modelPayment = new payment_Model_PaymentView();
		
		$data = $modelDebitur->getDetail(array($modelDebitur->getAdapter()->quoteInto('DEBITUR_NO_REK = ?', $noRekening)));
		//$this->view->data = $data;

		$paymentData = $modelPayment->getList(60, 0, 'PAYMENT_ID ASC', array($modelPayment->getAdapter()->quoteInto('DEBITUR_NO_REK = ?', $noRekening)));
		foreach($paymentData as $k=>$d) {
			$paymentData[$k]['PAYMENT_ID'] = 60 - (60 - ($k+1));
		}
		//$this->view->paymentData = $paymentData;

		$tbl = '';
		$atd_pokok = 0;
		$atd_bunga = 0;
		$atd_jumlah = 0;
		$ajt_pokok = 0;
		$ajt_bunga = 0;
		$ajt_jumlah = 0;
		foreach($paymentData as $k=>$d) {
			$atd_pokok += $d['ATD_POKOK'];
			$atd_bunga += $d['ATD_BUNGA'];
			$atd_jumlah += $d['ATD_JUMLAH'];
			$ajt_pokok += $d['AJT_POKOK'];
			$ajt_bunga += $d['AJT_BUNGA'];
			$ajt_jumlah += $d['AJT_JUMLAH'];
			$tbl .= '<tr>
					<td ' . (($k%2>0) ? 'class="grey"' : '') . 'align="center">' . $d['PAYMENT_ID'] . '</td>
					<td ' . (($k%2>0) ? 'class="grey"' : '') . 'align="center">' . $d['TANGGAL'] . '</td>
					<td ' . (($k%2>0) ? 'class="grey"' : '') . 'align="center">Rp ' . number_format($d['BAKI_AWAL']) . '</td>
					<td ' . (($k%2>0) ? 'class="grey"' : '') . 'align="right">Rp ' . number_format($d['ATD_POKOK']) . '</td>
					<td ' . (($k%2>0) ? 'class="grey"' : '') . 'align="right">Rp ' . number_format($d['ATD_BUNGA']) . '</td>
					<td ' . (($k%2>0) ? 'class="grey"' : '') . 'align="right">Rp ' . number_format($d['ATD_JUMLAH']) . '</td>
					<td ' . (($k%2>0) ? 'class="grey"' : '') . 'align="right">Rp ' . number_format($d['AJT_POKOK']) . '</td>
					<td ' . (($k%2>0) ? 'class="grey"' : '') . 'align="right">Rp ' . number_format($d['AJT_BUNGA']) . '</td>
					<td ' . (($k%2>0) ? 'class="grey"' : '') . 'align="right">Rp ' . number_format($d['AJT_JUMLAH']) . '</td>
					<td ' . (($k%2>0) ? 'class="grey"' : '') . 'align="right">Rp ' . number_format($d['BAKI_AKHIR']) . '</td>
				</tr>';
		}

		$tbl .= "<tr>
			<td class='grey' align='center' colspan='3' style='border-top: 1px solid #000'><strong>TOTAL</strong></td>
			<td align='right' class='grey' style='border-top: 1px solid #000'><strong>Rp " . number_format($atd_pokok) . "</strong></td>
			<td align='right' class='grey' style='border-top: 1px solid #000'><strong>Rp " . number_format($atd_bunga) . "</strong></td>
			<td align='right' class='grey' style='border-top: 1px solid #000'><strong>Rp " . number_format($atd_jumlah) . "</strong></td>
			<td align='right' class='grey' style='border-top: 1px solid #000'><strong>Rp " . number_format($ajt_pokok) . "</strong></td>
			<td align='right' class='grey' style='border-top: 1px solid #000'><strong>Rp " . number_format($ajt_bunga) . "</strong></td>
			<td align='right' class='grey' style='border-top: 1px solid #000'><strong>Rp " . number_format($ajt_jumlah) . "</strong></td>
			<td class='grey' style='border-top: 1px solid #000'></td>
		</tr>";

		$css = '<style type="text/css">
				.strong {
					font-weight: 800;
				}
				#detail-left {
					float: left;
				}
				#detail-right {
					float: right;
				}
				.table {
					margin-top: 10px;
					border: 1px solid #aaa;
					width: \'100%\';
				}
				.table tr th {
					background-color: #BBB;
					padding: 4px;
					text-shadow: 0 1px 1px #FFF;
				}
				.table tr td {
					padding: 4px;
					font-size: 12px;
				}
				.grey {
					background-color: #eee;
				}
			</style>';

		$content = $css . '<div id="content">
			<h3>KSP SIKOPAWI MANDIRI, Purwakarta</h3>
			<p>Kartu Piutang</p>

			<div style="float: left;">
				<table>
					<tr>
						<td><strong>No. Rekening</strong></td>
						<td>:</td>
						<td>' . $data['DEBITUR_NO_REK'] . '</td>
						<td>&nbsp;&nbsp;&nbsp;<strong>Nama</strong></td>
						<td>:</td>
						<td>' . $data['CUSTOMERS_NAME']. '</td>
						<td>&nbsp;&nbsp;&nbsp;<strong>Status</strong></td>
						<td>:</td>
						<td>' . $data['STATUS'] . '</td>
					</tr>
					<tr>
						<td><strong>Plafond</strong></td>
						<td>:</td>
						<td>Rp ' . number_format($data['PERMOHONAN_KREDIT_PLAFOND']) . '</td>
						<td>&nbsp;&nbsp;&nbsp;<strong>Alamat</strong></td>
						<td>:</td>
						<td>' . $data['CUSTOMERS_ADDRESS'] . '</td>
					</tr>
					<tr>
						<td><strong>Jangka Waktu</strong></td>
						<td>:</td>
						<td>' . $data['PERMOHONAN_KREDIT_JWAKTU'] .' Bulan</td>
						<td>&nbsp;&nbsp;&nbsp;<strong>Kategori Debitur</strong></td>
						<td>:</td>
						<td>' . $data['DEBITUR_CATEGORY_NAME']. '</td>
					</tr>
					<tr>
						<td><strong>Bunga</strong></td>
						<td>:</td>
						<td>Rp ' . number_format($data['PERMOHONAN_KREDIT_BUNGA']) . '</td>
						<td>&nbsp;&nbsp;&nbsp;<strong>Kategori Kredit</strong></td>
						<td>:</td>
						<td>' . $data['KREDIT_CATEGORY_NAME'] . '</td>
					</tr>
					<tr>
						<td><strong>Angsuran</strong></td>
						<td>:</td>
						<td>Rp ' . number_format($data['PERMOHONAN_KREDIT_ANGSURAN']) . '</td>
						<td>&nbsp;&nbsp;&nbsp;<strong>Payment Point</strong></td>
						<td>:</td>
						<td>' . $data['PAYMENT_POINT_NAME'] . '</td>
					</tr>
				</table>
			</div>

			<br clear="all" />

			<table style="width: 100%" class="table" cellspacing="0" cellpadding="0">
				<tr>
					<th align="center">No</th>
					<th align="center">Tanggal</th>
					<th align="center">Baki Awal</th>
					<th align="center">ATD<br/>Pokok</th>
					<th align="center">ATD<br/>Bunga</th>
					<th align="center">ATD<br/>Jumlah</th>
					<th align="center">AJT<br/>Pokok</th>
					<th align="center">AJT<br/>Bunga</th>
					<th align="center">AJT<br/>Jumlah</th>
					<th align="center">Baki Akhir</th>
				</tr>
				' . $tbl . '
			</table>
		</div>';

		$html2pdf = new HTML2PDF('P', 'A4');
		$html2pdf->pdf->SetDisplayMode('fullpage');
		$html2pdf->writeHTML($content, false);
		$html2pdf->Output('Debitur_Card_'.$noRekening.'.pdf');
	}

	public function kwitansiTagihanAction()
	{
		$id = $this->_getParam('id', 0);
		$id = (int)$id;
		$model = new payment_Model_PaymentView();
		$modelDebitur = new debitur_Model_DebiturView();
		$q = $model->select()->where('PAYMENT_ID = ?', $id);
		
		/* Properties */

		$tempatBayar = '';
		$noRekening = '';
		$nama = '';
		$nopeg = '';
		$noBuku = '';
		$jenisDebitur = '';
		$cicilanKe = '';
		$jumlahAngsuran = '';

		if($q->query()->rowCount() > 0) {
			$detail = $q->query()->fetch();
			$tempatBayar = $detail['CABANG_NAME'];
			$noRekening = $detail['DEBITUR_NO_REK'];
			$nama = $detail['CUSTOMERS_NAME'];

			$q = $modelDebitur->select()->where('DEBITUR_ID = ?', $detail["DEBITUR_ID"]);
			$dDetail = $q->query()->fetch();

			$nopeg = $dDetail['CUSTOMERS_NOPEN'];
			$noBuku = $dDetail['PERMOHONAN_KREDIT_NO_BUKU'];
			$jenisDebitur = $dDetail['DEBITUR_CATEGORY_NAME'];
			$jumlahAngsuran = number_format(($detail['ATD_JUMLAH'] > 0) ? $detail['ATD_JUMLAH'] : $detail['AJT_JUMLAH']);

			/* cek cicilan ke : */
			$q = $model->select()->where('DEBITUR_ID = ?', $detail['DEBITUR_ID'])->order('PAYMENT_ID ASC');
			$res = $q->query()->fetchAll();
			$index = 0;
			foreach($res as $k=>$d) {
				if($id == $d['PAYMENT_ID']) {
					$index = $k+1;
				}
			}
			$isLunas = ($detail['BAKI_AKHIR'] == 0) ? '(LUNAS)' : '';
			$cicilanKe = $index . ' / ' . $dDetail['PERMOHONAN_KREDIT_JWAKTU'] . ' ' . $isLunas;
		}

		$content = '
		<div style="width: 712px; border: 1px solid #AAA;padding: 10px">
			<div style="border-bottom: 1px solid #AAA">
				<p style="font-size: 16px"><strong>KSP SIKOPAWI MANDIRI</strong></p>
				<p stype="font-size: 16px"><strong>TANDA TERIMA ANGSURAN</strong> | <span style="font-size: 12px">Tempat Bayar : ' . $tempatBayar . '</span></p>
			</div>
			
			<div style="border-bottom: 1px solid #AAA">
				<table style="font-size: 14px">
					<tr>
						<td><strong>No. Rekening</strong></td><td style="width: 30px" align="center">:</td><td>' . $noRekening . '</td>
					</tr>
					<tr>
						<td><strong>Nama Debitur</strong></td><td style="width: 30px" align="center">:</td><td>' . $nama . '</td>
					</tr>
					<tr>
						<td><strong>NOPEG / NOPEN</strong></td><td style="width: 30px" align="center">:</td><td>' . $nopeg . '</td>
					</tr>
					<tr>
						<td><strong>No. Buku / Karip</strong></td><td style="width: 30px" align="center">:</td><td>' . $noBuku . '</td>
					</tr>
					<tr>
						<td><strong>Jenis Debitur</strong></td><td style="width: 30px" align="center">:</td><td>' . $jenisDebitur . '</td>
					</tr>
					<tr>
						<td><strong>Cicilan Ke</strong></td><td style="width: 30px" align="center">:</td><td>' . $cicilanKe . '</td>
					</tr>
					<tr>
						<td><strong>Jumlah Angsuran</strong></td><td style="width: 30px" align="center">:</td><td>Rp ' . $jumlahAngsuran . ',-</td>
					</tr>
				</table>
			</div>

			<div style="border-bottom: 1px solid #AAA">
				<p style="font-size: 12px"><strong><u>Mohon diisi jika tidak tertagih :</u></strong></p>
				<table style="font-size: 11px">
					<tr>
						<td style="border: 1px solid #AAA;width: 20px">&nbsp;</td>
						<td>Tidak Mengambil Gaji</td>
						<td style="border: 1px solid #AAA;width: 20px">&nbsp;</td>
						<td>Gaji Minus</td>
						<td style="border: 1px solid #AAA;width: 20px">&nbsp;</td>
						<td>Meninggal Dunia</td>
						<td style="border: 1px solid #AAA;width: 20px">&nbsp;</td>
						<td>Pindah Tempat</td>
						<td style="border: 1px solid #AAA;width: 20px">&nbsp;</td>
						<td>Gaji Tidak Terbit</td>
					</tr>
				</table>
				<p style="font-size: 12px">Harap disimak baik-baik !</p>
			</div>
				<p style="font-size: 12px;text-align: right">Dicetak Oleh : ' . $this->view->fname . ' ' . $this->view->lname . ' </p>
		</div>';

		$html2pdf = new HTML2PDF('P', 'A4' ,'en');
		$html2pdf->pdf->SetDisplayMode('fullpage');
		$html2pdf->writeHTML($content, false);
		$html2pdf->Output('Kwitansi_Tagihan_'.$this->_getParam('id',0).'.pdf');
	}
}