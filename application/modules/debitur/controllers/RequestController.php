<?php

class Debitur_RequestController extends MyIndo_Controller_Action
{
	public function readAction()
	{
		try {
			$model = new debitur_Model_DebiturView();
			$where = array();
			if(isset($this->_posts['STATUS'])) {
				$where[] = $model->getAdapter()->quoteInto('STATUS = ?', $this->_posts['STATUS']);
			}
			$this->_data = array(
				'items' => $model->getList($this->_limit, $this->_start, $this->_order, $where),
				'totalCount' => $model->count($where)
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

	public function readCardAction()
	{
		try {
			if(isset($this->_posts['DEBITUR_ID'])) {
				$model = new payment_Model_Payment();
				if($model->isExist('DEBITUR_ID', $this->_posts['DEBITUR_ID'])) {
					$where = array();
					$where[] = $model->getAdapter()->quoteInto('DEBITUR_ID = ?', $this->_posts['DEBITUR_ID']);
					$data = $model->getList($this->_limit, $this->_start, $this->_order, $where);
					$page = $this->_posts['page'];
					foreach($data as $k=>$d) {
						$data[$k]['PAYMENT_ID'] = $this->_limit - ($this->_limit - ($k+1));
					}
					$this->_data = array(
						'items' => $data,
						'totalCount' => $model->count($where)
						);
				} else {
					$this->error(102);
				}
			} else {
				$this->error(901);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}
}