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
		try {
			$model = new rekening_Model_Rekening();
			$q = $model->select()->where('REKENING_ID = ?', $this->_posts['REKENING_ID']);
			if($q->query()->rowCount() > 0) {
				
				$res = $q->query()->fetch();

				$q1 = $model->select()->where('REKENING_NO = ?', $this->_posts['REKENING_NO']);
				$c1 = $q1->query()->rowCount();
				
				$q2 = $model->select()->where('CUSTOMERS_ID = ?', $this->_posts['CUSTOMERS_ID']);
				$c2 = $q2->query()->rowCount();

				$updates = array();

				if($res['REKENING_NO'] != $this->_posts['REKENING_NO']) {
					if($c1 == 0) {
						if($res['CUSTOMERS_ID'] != $this->_posts['CUSTOMERS_ID']) {
							if($c2 == 0) {
								$model->update(array(
									'REKENING_NO' => $this->_posts['REKENING_NO'],
									'CUSTOMERS_ID' => $this->_posts['CUSTOMERS_ID'],
									'REKENING_NO_REF' => $this->_posts['REKENING_NO_REF'],
									'REKENING_STATUS' => $this->_posts['REKENING_STATUS'],
									'ENTRY_BY' => $this->_posts['ENTRY_BY']
									), $model->getAdapter()->quoteInto('REKENING_ID = ?', $this->_posts['REKENING_ID']));
							} else {
								$this->error(101, 'Customer sudah memiliki rekening, silahkan menambahkan customer lain.');
							}
						} else {
							$model->update(array(
								'REKENING_NO' => $this->_posts['REKENING_NO'],
								'CUSTOMERS_ID' => $this->_posts['CUSTOMERS_ID'],
								'REKENING_NO_REF' => $this->_posts['REKENING_NO_REF'],
								'REKENING_STATUS' => $this->_posts['REKENING_STATUS'],
								'ENTRY_BY' => $this->_posts['ENTRY_BY']
								), $model->getAdapter()->quoteInto('REKENING_ID = ?', $this->_posts['REKENING_ID']));
						}
					} else {
						$this->error(101, 'Nomor rekening sudah terdaftar, silahkan gunakan rekening lain.');
					}
				} else {
					if($res['CUSTOMERS_ID'] != $this->_posts['CUSTOMERS_ID']) {
						if($c2 == 0) {
							$model->update(array(
								'REKENING_NO' => $this->_posts['REKENING_NO'],
								'CUSTOMERS_ID' => $this->_posts['CUSTOMERS_ID'],
								'REKENING_NO_REF' => $this->_posts['REKENING_NO_REF'],
								'REKENING_STATUS' => $this->_posts['REKENING_STATUS'],
								'ENTRY_BY' => $this->_posts['ENTRY_BY']
								), $model->getAdapter()->quoteInto('REKENING_ID = ?', $this->_posts['REKENING_ID']));
						} else {
							$this->error(101, 'Customer sudah memiliki rekening, silahkan menambahkan customer lain.');
						}
					} else {
						$model->update(array(
							'REKENING_NO' => $this->_posts['REKENING_NO'],
							'CUSTOMERS_ID' => $this->_posts['CUSTOMERS_ID'],
							'REKENING_NO_REF' => $this->_posts['REKENING_NO_REF'],
							'REKENING_STATUS' => $this->_posts['REKENING_STATUS'],
							'ENTRY_BY' => $this->_posts['ENTRY_BY']
							), $model->getAdapter()->quoteInto('REKENING_ID = ?', $this->_posts['REKENING_ID']));
					}
				}
			} else {
				$this->error(102, 'Rekening tidak terdaftar.');
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function destroyAction()
	{
		try {
			$this->_posts = Zend_Json::decode($this->getRequest()->getRawBody());
			$model = new rekening_Model_Rekening();
			if(isset($this->_posts['REKENING_ID'])) {
				if($model->isExist('REKENING_ID', $this->_posts['REKENING_ID'])) {
					$model->delete($model->getAdapter()->quoteInto('REKENING_ID = ?', $this->_posts['REKENING_ID']));
				} else {
					$this->error(102, 'Hapus data gagal, Rekening tidak terdaftar.');
				}
			} else {
				$this->error(901);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function searchAction()
	{

	}
}