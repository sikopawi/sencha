<?php

class Debitur_RequestController extends MyIndo_Controller_Action
{
	public function readAction()
	{
		try {
			$model = new debitur_Model_DebiturView();
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

		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function updateAction()
	{
		try {

		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function destroyAction()
	{
		try {

		} catch(Exception $e) {
			$this->exception($e);
		}
	}
}