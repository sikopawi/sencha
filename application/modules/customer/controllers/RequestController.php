<?php

class Customer_RequestController extends MyIndo_Controller_Action
{
	public function readAction()
	{
		$model = new customer_Model_CustomerView();
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
			$model = new customer_Model_Customer();
			$newId = $model->getLastId('CUSTOMERS_ID')+1;
			$noReg = '';
			for($i=0;$i<(10-(strlen($newId)));$i++) {
				$noReg .= '0';
			}
			$noReg .= $newId;
			$this->_posts['CUSTOMERS_NO_REG'] = $noReg;
			$this->_posts['CREATED_DATE'] = $this->_date;
			$model->insert($this->_posts);
		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function updateAction()
	{
		try {
			$model = new customer_Model_Customer();
			$id = $this->_posts['CUSTOMERS_ID'];
			unset($this->_posts['CUSTOMERS_ID']);
			$model->update($this->_posts, $model->getAdapter()->quoteInto('CUSTOMERS_ID = ?', $id));
		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function destroyAction()
	{
		try {
			$this->_posts = Zend_Json::decode($this->getRequest()->getRawBody());
			$model = new customer_Model_Customer();
			if(isset($this->_posts['CUSTOMERS_ID'])) {
				if($model->isExist('CUSTOMERS_ID', $this->_posts['CUSTOMERS_ID'])) {
					$model->delete($model->getAdapter()->quoteInto('CUSTOMERS_ID = ?', $this->_posts['CUSTOMERS_ID']));
				} else {
					$this->error(102, 'Hapus data gagal, Customer tidak terdaftar.');
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
		try {
			$model = new customer_Model_CustomerView();

			/* No Reg */
			$no_reg = (isset($this->_posts['CUSTOMERS_NO_REG'])) ? $this->_posts['CUSTOMERS_NO_REG'] : '';
			$name = (isset($this->_posts['CUSTOMERS_NAME'])) ? $this->_posts['CUSTOMERS_NAME'] : '';

			$q = $model->select();
			$where = array();
			if(strlen($no_reg) > 0) {
				$where[] = $model->getAdapter()->quoteInto('CUSTOMERS_NO_REG LIKE ?', '%' . $no_reg . '%');
				$q->where('CUSTOMERS_NO_REG LIKE ?', '%' . $no_reg . '%');
			}

			if(strlen($name) > 0) {
				$where[] = $model->getAdapter()->quoteInto('CUSTOMERS_NAME LIKE ?', '%' . $name . '%');
				$q->where('CUSTOMERS_NAME LIKE ?', '%' . $name . '%');
			}

			$q->limit($this->_limit, $this->_start);

			if(!is_null($this->_order)) {
				$q->order($this->_order);
			}

			$this->_data['items'] = $q->query()->fetchAll();
			$this->_data['totalCount'] = $model->count($where);

		} catch(Exception $e) {
			$this->exception($e);
		}
	}
}