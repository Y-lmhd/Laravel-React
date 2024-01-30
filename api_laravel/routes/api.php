<?php

use App\Http\Controllers\TestController;
use App\Http\Controllers\PhotoController;
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










/* /users */

// Route::get('/users', [TestController::class, 'getMethod']);

// Route::post('/users', [TestController::class, 'postMethod']);

// Route::post('/photos', [PhotoController::class, 'store'])->middleware('App\Http\\Middleware\PhotoMiddleware');
// Route::get('/photos', [PhotoController::class, 'index']);

//Route::resource('/photos', 'PhotoController');

// Route::get('/env', function(){
//     return response()->json(
//         [
//             'connection' => env('DB_CONNECTION'),
//             'host' => env('DB_HOST'),
//             'Port' => env('DB_PORT'),
//             'database' => env('DB_DATABASE'),
//             'username' => env('DB_USERNAME'),
//             'pass' => env('DB_PASSWORD')
//         ]
//     );
// });
