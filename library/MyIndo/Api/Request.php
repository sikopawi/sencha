<?php

class MyIndo_Api_Request
{
	/**
	  * Function Name 	: getListMenu()
	  * Created Date 	: June, 17 2013
	  * Description 	: Get list menus.
	  * @author 		: Gilang Pratama Putra
	  */
	public function getListMenu()
	{
		try {
			$menuModel = new MyIndo_Model_Menus();
			return $this->getMenuRecursive($menuModel->getList(null, null, 'INDEX ASC'));
		} catch(Exception $e) {
			return array();
		}
	}

	/**
	  * Function Name 	: getMenuRecursive()
	  * Params 			: $menus = array(), $parent = int
	  * Created Date 	: June, 17 2013
	  * Description 	: Create recursive menu.
	  * @author 		: Gilang Pratama Putra
	  */
	protected function getMenuRecursive($menus, $parent = 0)
	{
		$tree = array();
		foreach($menus as $index => $menu) {
			if($menu['PARENT_ID'] == $parent) {
				$idx = count($tree);
				$tree[$idx] = array(
					'text' => $menu['MENU_TITLE'],
					'MENU_ID' => $menu['MENU_ID'],
					'PARENT_ID' => $menu['PARENT_ID'],
					'ACTION' => $menu['ACTION'],
					'data' => $this->getMenuRecursive($menus, $menu['MENU_ID'])
					);
				if(count($tree[$idx]['data']) == 0 && $menu['PARENT_ID'] > 0) {
					unset($tree[$idx]['data']);
					$tree[$idx]['leaf'] = true;
				} else {
					$tree[$idx]['expanded'] = true;
				}
			}
		}
		return $tree;
	}
}