<?php

namespace App\Http\Controllers;

use Illuminate\Models\Pendaftaran;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class PendaftaranController extends Controller
{
    // public function __construct(){
    //   $this->middleware('auth')->except(['store']);
    // }

    public function index()
    {
        return Inertia::render('Pendaftaran/Index', [
          'pendaftaran' => Pendaftaran::all()->map(function ($pendaftaran){
            return [
                'id' => $pendaftaran->id,
                'nama' => $pendaftaran->nama,
                'instansi' => $pendaftaran->instansi,
                'lomba' => $pendaftaran->lomba,
                'telp' => $pendaftaran->telp,
                'instagram' => $pendaftaran->instagram,
                'email' => $pendaftaran->email

            ];
          })  
        ]);
    }

    public function store(){
      $request->validate([
        'nama' => 'required',
        'instansi' => 'required',
        'lomba' => 'required',
        'telp' => 'required',
        'instagram' => 'required',
        'email' => 'required',
      ]);
      $store = Post::create([
        'nama' => $request->nama,
        'instansi' => $request->instansi,
        'lomba' => $request->lomba,
        'telp' => $request->telp,
        'instagram' => $request->instagram,
        'email' => $request->email,
      ]);

      if($store){
        return Redirect::route('home')->with('message', 'Data pendaftaran berhasil ditambahkan');
      }
    }

    public function delete($id)
    {
      $pendaftaran = Pendaftaran::findOrFail($id);
      $pendaftaran->delete();

      return Redirect::route('pendaftaran.index')->with('message', 'Data pendaftaran berhasil dihapus');
    }
}
