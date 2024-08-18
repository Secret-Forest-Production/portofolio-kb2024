<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');
Route::get('/faq', function () {
    return Inertia::render('Faq');
})->name('faq');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/pendaftaran', function () {
    return Inertia::render('Pendaftaran');
})->name('daftar');
// Route::get('/pendaftaran/step2', function () {
//     return Inertia::render('Pendaftaran_2');
// })->name('daftar2');
Route::get('/pendaftaran/step2', function () {
    return Inertia::render('Pendaftaran_3');
})->name('daftar2');
Route::get('/pendaftaran/step1/{jenisLomba}', function ($jenisLomba) {
    return Inertia::render('Daftar', [
        'jenisLomba' => $jenisLomba
    ]);
})->name('daftar1');

Route::get('/pendaftaran/{title}', function ($title) {
    return Inertia::render('Pendaftaran', [
        'title' => $title,
    ]);
});

require __DIR__.'/auth.php';
