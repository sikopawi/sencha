<?php

class Permohonankredit_Model_PermohonanKreditDueDate extends MyIndo_Db_Table_Abstract
{
	protected $_name = 'PERMOHONAN_KREDIT_DUE_DATE';
	protected $_primary = 'PERMOHONAN_KREDIT_DUE_DATE_ID';

	public function createDueDate($pkId)
	{
		try {

			$year = date('Y');
			$month = date('m');

			$month++;
			if($month > 12) {
				$month = 1;
				$year++;
			}

			$this->insert(array(
				'PERMOHONAN_KREDIT_ID' => $pkId,
				'DUE_DATE' => $year . '-' . $month . '-21',
				'CREATED_DATE' => date('Y-m-d') 
				));

		} catch(Exception $e) {

		}
	}

	public function getNextDate($date)
	{
		$array = explode('-', $date);
		$year = $array[0];
		$month = $array[1];
		$day = $array[2];

		$month++;
		if($month > 12) {
			$year++;
			$month = 0;
		}

		return $year . '-' . $month . '-21';
	}
}