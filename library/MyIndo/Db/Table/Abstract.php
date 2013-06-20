<?php

class MyIndo_Db_Table_Abstract extends Zend_Db_Table_Abstract
{
	public function getList($limit = null, $offset = null, $order = null)
	{
		try {

			$query = $this->select();

			if(!is_null($limit) && !is_null($offset) && is_numeric($limit) && is_numeric($offset)) {
				$query->limit($limit, $offset);
			}

			if(!is_null($order)) {
				$query->order($order);
			}

			return $query->query()->fetchAll();

		} catch(Exception $e) {

			return array();

		}
	}

	public function isExist($colName, $value)
	{
		try {

			$query = $this->select()->where($colName . ' = ?', $value);

			return (count($query->query()->fetchAll()) > 0) ? true : false;

		} catch(Exception $e) {
			return false;
		}
	}

	public function count($where = array())
	{
		try {

			$query = $this->select();

			foreach($where as $k=>$d) {
				$query->where($d);
			}

			return $query->query()->rowCount();

		} catch(Exception $e) {
			return 0;
		}
	}
}