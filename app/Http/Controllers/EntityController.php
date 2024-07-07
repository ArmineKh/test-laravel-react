<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EntityController extends Controller
{
    public function index()
    {
            $fields = [
        ['name' => 'id', 'type' => 'increments', 'size' => null, 'index' => null, 'nullable' => 0, 'unsigned' => 0, 'default' => null],
        ['name' => 'field_1', 'type' => 'string', 'size' => 300, 'index' => null, 'nullable' => 0, 'unsigned' => 0, 'default' => null],
        ['name' => 'field_2', 'type' => 'string', 'size' => null, 'index' => 'unique', 'nullable' => 1, 'unsigned' => 0, 'default' => null],
        ['name' => 'field_3', 'type' => 'integer', 'size' => null, 'index' => null, 'nullable' => 0, 'unsigned' => 1, 'default' => null],
        ['name' => 'field_4', 'type' => 'integer', 'size' => null, 'index' => null, 'nullable' => 0, 'unsigned' => 0, 'default' => 123]
    ];

        createTable($fields);
    }

}
