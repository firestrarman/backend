<?php

namespace Model;

use Fuel\Core\Model;
use Fuel\Core\DB;
use Fuel\Core\Model_Crud;

class AuthAccess extends Model_Crud
{
    protected static $_table_name = 'AuthLevel';

    protected static $_primary_key = 'Id';

    public static function setMainLevel($userid, $accessible)
    {
        $sql = "UPDATE `AuthLevel` SET `ableView` = {$accessible} WHERE `UserId` = {$userid}";

        $result = DB::query($sql)->execute();

        return $result;
    }


    public static function setAccess($userid, $action, $mainPage, $subPage = null)
    {
        switch ($action)
        {
            case 'view':
                $action = 'ableView';
                break;
            case 'edit':
                $action = 'ableEdit';
                break;
            case 'delete':
                $action = 'ableDelete';
                break;
        }

        $sql = "SELECT `{$action}` FROM `AuthLevel` WHERE `UserId` = $userid";
        $result = DB::query($sql)->execute();

        $level = @json_decode($result);

//        if (!is_array($level)) {
//            $level[$mainPage] = $subPage;
//            return 'success';
//        }
        $level = array(
            'mainPage1' => null,
        );

        $data = self::lop($level, $mainPage, $subPage);
        var_dump($data);

        return 'success';
    }

    private static function lop($level, $mainPage, $subPage)
    {
        foreach ($level as $key => $val) {
            if ($key == $mainPage) {
                $level[$mainPage][] = (isset($val) && !empty($val))? $subPage : null;
                $result['level'] = $level;
                return $result;
            }

            if (isset($val) && !empty($val)) {
                self::lop($val, $mainPage, $subPage);
            }
        }

        $level[] = $mainPage;

        return $level;
    }
}