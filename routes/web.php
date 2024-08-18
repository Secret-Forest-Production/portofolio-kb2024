<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PendaftaranController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/faq', function () {
    return Inertia::render('Faq');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/list', [PendaftaranController::class, 'index'])->name('pendaftaran.index');
    Route::delete('/list/{$id}', [PendaftaranController::class, 'delete'])->name('pendaftaran.delete');
});

Route::get('/pendaftaran', function () {
    return Inertia::render('Pendaftaran');
});
Route::get('/pendaftaran2', function () {
    return Inertia::render('Pendaftaran_2');
});
Route::get('/pendaftaran3', function () {
    return Inertia::render('Pendaftaran_3');
});
Route::get('/pendaftaran/1', function () {
    return Inertia::render('Daftar');
});

Route::get('/pendaftaran/{title}', function ($title) {
    return Inertia::render('Pendaftaran', [
        'title' => $title,
    ]);
});

require __DIR__.'/auth.php';
