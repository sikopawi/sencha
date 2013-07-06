<?php

class Payment_RequestController extends MyIndo_Controller_Action
{
	public function init()
	{
		$this->_model = new payment_Model_Payment();
	}

	public function createAction()
	{
		try {
			$modelDebitur = new debitur_Model_Debitur();
			$modelPk = new permohonankredit_Model_PermohonanKredit();
			$modelPkDueDate = new permohonankredit_Model_PermohonanKreditDueDate();
			
			if($modelDebitur->isExist('DEBITUR_ID', $this->_posts['DEBITUR_ID'])) {
				$this->_posts['TANGGAL'] = date('Y-m-d');
				$this->_posts['CREATED_DATE'] = $this->_date;
				$paymentId = $this->_model->insert($this->_posts);

				$q = $modelDebitur->select()->where('DEBITUR_ID = ?', $this->_posts['DEBITUR_ID']);
				$res = $q->query()->fetch();
				$customersId = $res['CUSTOMERS_ID'];

				/* Permohonan Kredit */
				$q = $modelPk->select()
				->where('CUSTOMERS_ID = ?', $customersId)
				->where('STATUS = ?', 'Berjalan')
				->limit(1,0)
				->order('PERMOHONAN_KREDIT_ID DESC');

				$res = $q->query()->fetch();
				$pkId = $res['PERMOHONAN_KREDIT_ID'];

				if($this->_posts['BAKI_AKHIR'] == 0) {
					$modelPk->update(array(
						'STATUS' => 'Closed'
						), $modelPk->getAdapter()->quoteInto('PERMOHONAN_KREDIT_ID = ?', $pkId));
				}

				/* Permohonan Kredit Due Date */
				$q = $modelPkDueDate->select()->where('PERMOHONAN_KREDIT_ID = ?', $pkId);
				$res = $q->query()->fetch();

				$modelPkDueDate->update(array(
					'DUE_DATE' => $modelPkDueDate->getNextDate($res['DUE_DATE'])
					), $modelPkDueDate->getAdapter()->quoteInto('PERMOHONAN_KREDIT_ID = ?', $pkId));
				$this->_data['PAYMENT_ID'] = $paymentId;
			} else {
				$this->error(102, 'Debitur tidak terdaftar.');
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function readAction()
	{
		try {
			$model = new payment_Model_PaymentView();
			$data = $model->getList($this->_limit, $this->_start, $this->_order);
			foreach($data as $k=>$d) {
				$no = $d['PAYMENT_ID'];
				$len = strlen($no);
				$tno = '';
				for($i=0;$i<(10-$len);$i++){
					$tno .= '0';
				}
				$tno .= $no;
				$data[$k]['PAYMENT_ID'] = $tno;
			}
			$this->_data = array(
				'items' => $data,
				'totalCount' => $model->count()
				);
		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function getDetailAction()
	{
		try {
			if(isset($this->_posts['DEBITUR_ID'])) {
				
				$modelDebitur = new debitur_Model_Debitur();
				$modelPK = new permohonankredit_Model_PermohonanKredit();

				if($this->_model->isExist('DEBITUR_ID', $this->_posts['DEBITUR_ID'])) {
					$q = $this->_model->select()
					->where('DEBITUR_ID = ?', $this->_posts['DEBITUR_ID'])
					->limit(1,0)
					->order('PAYMENT_ID DESC');
					$res = $q->query()->fetch();
					$this->_data['BAKI_AWAL'] = $res['BAKI_AKHIR'];

					$q = $modelDebitur->select()->where('DEBITUR_ID = ?', $this->_posts['DEBITUR_ID']);
					$res = $q->query()->fetch();
					$customersId = $res['CUSTOMERS_ID'];
					$q = $modelPK->select()->where('CUSTOMERS_ID = ?', $customersId)
					->where('STATUS = ?', 'Berjalan')
					->limit(1,0)
					->order('PERMOHONAN_KREDIT_ID DESC');
					$res = $q->query()->fetch();
					$this->_data['POKOK'] = $res['PERMOHONAN_KREDIT_POKOK'];
					$this->_data['BUNGA'] = $res['PERMOHONAN_KREDIT_BUNGA'];
					$this->_data['JUMLAH'] = $res['PERMOHONAN_KREDIT_ANGSURAN'];
				} else {

					$q = $modelDebitur->select()->where('DEBITUR_ID = ?', $this->_posts['DEBITUR_ID']);

					if($q->query()->rowCount() > 0) {
						$res = $q->query()->fetch();
						$customerId = $res['CUSTOMERS_ID'];
						$q = $modelPK->select()->where('CUSTOMERS_ID = ?', $customerId)
						->where('STATUS = ?', 'Berjalan')
						->limit(1,0)
						->order('PERMOHONAN_KREDIT_ID DESC');
						if($q->query()->rowCount() > 0) {
							$res = $q->query()->fetch();
							$this->_data['BAKI_AWAL'] = $res['PERMOHONAN_KREDIT_PLAFOND'];
							$this->_data['POKOK'] = $res['PERMOHONAN_KREDIT_POKOK'];
							$this->_data['BUNGA'] = $res['PERMOHONAN_KREDIT_BUNGA'];
							$this->_data['JUMLAH'] = $res['PERMOHONAN_KREDIT_ANGSURAN'];
						} else {
							$this->error(102);
						}
					} else {
						$this->error(102);
					}
				}
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}
}