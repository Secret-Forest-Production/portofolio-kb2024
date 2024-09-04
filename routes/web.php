<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PendaftaranController;
use App\Http\Middleware\CheckForm1Completion;
use App\Http\Middleware\CheckForm2Completion;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');
Route::get('/faq', function () {
    return Inertia::render('Faq');
})->name('faq');

Route::get('/dashboard', [PendaftaranController::class,'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::post('/daftar', [PendaftaranController::class,'store'])->name('pendaftaran');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/list', [PendaftaranController::class, 'index'])->name('pendaftaran.index');
    Route::delete('/pendaftaran/{id}', [PendaftaranController::class, 'delete'])->name('destroy');
});

Route::get('/pendaftaran', function () {
    return Inertia::render('Pendaftaran');
})->name('daftar');


Route::get('/pendaftaran/step1/{jenisLomba}', function ($jenisLomba) {
    return Inertia::render('Daftar', [
        'jenisLomba' => $jenisLomba
    ]);
})->name('daftar1');

// Route::post('/pendaftaran/step1/update/session', [PendaftaranController::class, 'submitStep1'])->name('updateSession');

// Route::get('/clear-session', function () {
//     Log::info(session()->all());
//     session()->forget('isStep1Complete');
//     session()->forget('isStep2Complete');
//     Log::info('Session clear success');
//     return redirect()->back();
// });

Route::get('/pendaftaran/step2/{jenisLomba}', function ($jenisLomba) {
    return Inertia::render('Pendaftaran_3', [
        'jenisLomba' => $jenisLomba
    ]);
})->name('daftar2');

Route::get('/pendaftaran/step3/{jenisLomba}', function ($jenisLomba) {
    return Inertia::render('Pendaftaran_4', [
        'jenisLomba' => $jenisLomba
    ]);
})->name('daftar3');




require __DIR__ . '/auth.php';
