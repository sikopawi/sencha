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
				->where('PAYMENT_POINT_CODE = ?', $this->_posts['PAYMENT_POINT_CODE'])
				->where('PAYMENT_POINT_NAME = ?', $this->_posts['PAYMENT_POINT_NAME']);

				if($query->query()->rowCount() == 0) {
					$model->insert(array(
						'PAYMENT_POINT_CODE' => $this->_posts['PAYMENT_POINT_CODE'],
						'PAYMENT_POINT_NAME' => $this->_posts['PAYMENT_POINT_NAME'],
						'CREATED_DATE' => $this->_date
						));
				} else {
					$this->error(101, 'Payment point sudah terdaftar, silahkan gunakan data lain.');
				}
			} else {
				$this->error(901);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}
}