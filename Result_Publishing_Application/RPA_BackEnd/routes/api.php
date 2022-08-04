<?php

use App\Http\Controllers\AdminLoginController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GetItem;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\StudentInfoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);

Route::get('/get/{id}/{roll}', [GetItem::class, 'getItemById']);

Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout']);

Route::post('/admin/login', [AdminLoginController::class, 'adminLogin']);
Route::get('/admin/all', [StudentInfoController::class, 'studentinfo']);

Route::put('/admin/all/update/{roll}', [StudentInfoController::class, 'updateStudentInfo']);

Route::post('/admin/register', [AdminLoginController::class, 'adminRegister']);
Route::post('/admin/logout', [AdminLoginController::class, 'adminLogout']);
