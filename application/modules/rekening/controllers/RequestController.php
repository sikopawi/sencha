<?php

class Rekening_RequestController extends MyIndo_Controller_Action
{
	public function readAction()
	{
		try {
			$model = new rekening_Model_RekeningView();
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
			$model = new rekening_Model_Rekening();
			$q = $model->select()->where('REKENING_NO = ?', $this->_posts['REKENING_NO']);
			if($q->query()->rowCount() == 0) {
				$q = $model->select()->where('CUSTOMERS_ID = ?', $this->_posts['CUSTOMERS_ID']);
				if($q->query()->rowCount() == 0) {
					$model->insert(array(
						'REKENING_NO' => $this->_posts['REKENING_NO'],
						'CUSTOMERS_ID' => $this->_posts['CUSTOMERS_ID'],
						'REKENING_NO_REF' => $this->_posts['REKENING_NO_REF'],
						'REKENING_STATUS' => $this->_posts['REKENING_STATUS'],
						'ENTRY_BY' => $this->_posts['ENTRY_BY'],
						'CREATED_DATE' => $this->_date
						));
				} else {
					$this->error(101, 'Customer sudah memiliki rekening, silahkan menambahkan customer lain.');
				}
			} else {
				$this->error(101, 'Nomor rekening sudah terdaftar, silahkan gunakan rekening lain.');
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function updateAction()
	{

	}

	public function destroyAction()
	{

	}

	public function searchAction()
	{

	}
}