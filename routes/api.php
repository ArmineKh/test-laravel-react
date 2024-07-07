<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/createTable', function (Request $request){
//    $fields = [
//        ['name' => 'id', 'type' => 'increments', 'size' => null, 'index' => null, 'nullable' => 0, 'unsigned' => 0, 'default' => null],
//        ['name' => 'field_1', 'type' => 'string', 'size' => 300, 'index' => null, 'nullable' => 0, 'unsigned' => 0, 'default' => null],
//        ['name' => 'field_2', 'type' => 'string', 'size' => null, 'index' => 'unique', 'nullable' => 1, 'unsigned' => 0, 'default' => null],
//        ['name' => 'field_3', 'type' => 'integer', 'size' => null, 'index' => null, 'nullable' => 0, 'unsigned' => 1, 'default' => null],
//        ['name' => 'field_4', 'type' => 'integer', 'size' => null, 'index' => null, 'nullable' => 0, 'unsigned' => 0, 'default' => 123]
//    ];
    createTable($request->inputFields, $request->tableName);
//    dd($request);
});
