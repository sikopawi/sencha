<?php

class Customer_RequestController extends MyIndo_Controller_Action
{
	public function readAction()
	{
		$model = new customer_Model_Customer();
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

	}
}