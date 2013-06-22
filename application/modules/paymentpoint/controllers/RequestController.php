<?php

class PaymentPoint_RequestController extends MyIndo_Controller_Action
{
	public function readAction()
	{
		$model = new paymentpoint_Model_PaymentPoint();
		try {
			$this->_data = array(
				'items' => $model->getList($this->_limit, $this->_start, $this->_order),
				'totalCount' => $model->count()
				);
		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function addAction()
	{
		try {
			if(isset($this->_posts['PAYMENT_POINT_CODE']) && isset($this->_posts['PAYMENT_POINT_NAME'])) {
				$model = new paymentpoint_Model_PaymentPoint();
				$query = $model->select()
				->where('PAYMENT_POINT_CODE = ?', $this->_posts['PAYMENT_POINT_CODE']);

				if($query->query()->rowCount() == 0) {
					$model->insert(array(
						'PAYMENT_POINT_CODE' => $this->_posts['PAYMENT_POINT_CODE'],
						'PAYMENT_POINT_NAME' => $this->_posts['PAYMENT_POINT_NAME'],
						'CREATED_DATE' => $this->_date
						));
				} else {
					$this->error(101, 'Payment point code sudah terdaftar, silahkan gunakan code lain.');
				}
			} else {
				$this->error(901);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function updateAction()
	{
		try {
			if(isset($this->_posts['PAYMENT_POINT_ID']) && isset($this->_posts['PAYMENT_POINT_CODE']) && isset($this->_posts['PAYMENT_POINT_NAME'])) {
				$model = new paymentpoint_Model_PaymentPoint();
				if($model->isExist('PAYMENT_POINT_ID', $this->_posts['PAYMENT_POINT_ID'])) {
					if(strlen($this->_posts['PAYMENT_POINT_CODE']) > 0 && strlen($this->_posts['PAYMENT_POINT_NAME']) > 0) {
						$model->update(array(
							'PAYMENT_POINT_CODE' => $this->_posts['PAYMENT_POINT_CODE'],
							'PAYMENT_POINT_NAME' => $this->_posts['PAYMENT_POINT_NAME']
							), $model->getAdapter()->quoteInto('PAYMENT_POINT_ID = ?', $this->_posts['PAYMENT_POINT_ID']));
					} else {
						$this->error(901);
					}
				} else {
					$this->error(102, 'Update gagal, data Payment Point tidak terdaftar.');
				}
			} else {
				$this->error(901);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function destroyAction()
	{
		try {
			$this->_posts = Zend_Json::decode($this->getRequest()->getRawBody());
			$model = new paymentpoint_Model_PaymentPoint();
			if(isset($this->_posts['PAYMENT_POINT_ID'])) {
				if($model->isExist('PAYMENT_POINT_ID', $this->_posts['PAYMENT_POINT_ID'])) {
					$model->delete($model->getAdapter()->quoteInto('PAYMENT_POINT_ID = ?', $this->_posts['PAYMENT_POINT_ID']));
				} else {
					$this->error(102, 'Hapus data Payment Point gagal, data tidak terdaftar.');
				}
			} else {
				$this->error(901);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}
}