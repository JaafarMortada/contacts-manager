<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\ContactController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::get('/contacts', [ContactController::class, "getContacts"]);
Route::get('/delete_contact/{id}', [ContactController::class, "deleteContact"]);
Route::post('/add_update_contact/{id?}', [ContactController::class, "addOrUpdateContact"]);