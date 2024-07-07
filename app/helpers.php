<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


if (!function_exists('createTable')) {
    function createTable(array $fields, $table_name = 'test', $timestamps = true): void
    {
//    $fields = [
//        ['name' => 'id', 'type' => 'increments', 'size' => null, 'index' => null, 'nullable' => 0, 'unsigned' => 0, 'default' => null],
//        ['name' => 'field_1', 'type' => 'string', 'size' => 300, 'index' => null, 'nullable' => 0, 'unsigned' => 0, 'default' => null],
//        ['name' => 'field_2', 'type' => 'string', 'size' => null, 'index' => 'unique', 'nullable' => 1, 'unsigned' => 0, 'default' => null],
//        ['name' => 'field_3', 'type' => 'integer', 'size' => null, 'index' => null, 'nullable' => 0, 'unsigned' => 1, 'default' => null],
//        ['name' => 'field_4', 'type' => 'integer', 'size' => null, 'index' => null, 'nullable' => 0, 'unsigned' => 0, 'default' => 123]
//    ];
        Schema::connection('mysql')->create($table_name, function (Blueprint $table) use ($fields, $timestamps) {
            if (count($fields) > 0) {
                $cnt = 0;
                foreach ($fields as $field) {
                    if ($field['size'] > 0) {
                        $table->{$field['type']}($field['name'], $field['size']);
                    } else {
                        $table->{$field['type']}($field['name']);
                    }
                    if ($field['nullable'] > 0) {
                        $table->getColumns()[$cnt]->nullable();
                    }
                    if ($field['unsigned'] > 0) {
                        $table->getColumns()[$cnt]->unsigned();
                    }
                    if (strlen($field['default']) > 0) {
                        $table->getColumns()[$cnt]->default($field['default']);
                    }
                    if (strlen($field['index']) > 0) {
                        switch ($field['index']) {
                            case 'unique':
                                $table->getColumns()[$cnt]->unique();
                                break;
                            case 'index':
                                $table->getColumns()[$cnt]->index();
                                break;
                            case 'primary':
                                $table->getColumns()[$cnt]->primary();
                                break;
                        }
                    }
                    $cnt++;
                }
            }
            if ($timestamps) {
                $table->timestamps();
            }
        });
    }
}
