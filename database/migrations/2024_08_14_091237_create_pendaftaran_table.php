<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pendaftaran', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('instansi');
            $table->enum('lomba', ['lensa_budaya', 'ekspresi_tubuh', 'moda_tradisional', 'bazar_kebudayaan', 'legenda_nusantara']);
            $table->enum('kategori', ['forda', 'mahasiswa', 'sma']);
            $table->string('telp');
            $table->string('instagram');
            $table->string('email');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pendaftaran');
    }
};
