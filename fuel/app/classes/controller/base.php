<?php

use Auth\Auth;
use Auth\Model\Auth_User;
use Fuel\Core\View;

class Controller_Base extends Controller_Template
{
    public $current_user;

    public function before()
    {
        parent::before();

        $this->current_user = null;

        foreach (Auth::verified() as $driver) {
            if (($id = $driver->get_user_id()) !== false) {
                $this->current_user = Auth_User::find($id[1]);
            }
            break;
        }

        // Set a global variable so views can use it
        View::set_global('current_user', $this->current_user);
    }

}
