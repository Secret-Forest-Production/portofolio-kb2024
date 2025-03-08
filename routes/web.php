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

Route::get('/dashboard', [PendaftaranController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::post('/daftar', [PendaftaranController::class, 'store'])->name('pendaftaran');

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


Route::get('/pendaftaran/step1', function () {
    return Inertia::render('Daftar', [
    ]);
});

Route::get('/pendaftaran/step2', function () {
    return Inertia::render('Pendaftaran_3', [
    ]);
});

Route::get('/pendaftaran/step3', function () {
    return Inertia::render('Pendaftaran_4', [

    ]);
});



require __DIR__ . '/auth.php';
