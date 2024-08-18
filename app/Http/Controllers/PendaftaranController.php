<?php

namespace App\Http\Controllers;


use App\Models\Pendaftaran;
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

    return Inertia::render('Dashboard', [
      'pendaftaran' => Pendaftaran::all()
    ]);
  }

  public function store(Request $request)
  {


    $request->validate([
      'nama' => 'required',
      'instansi' => 'required',
      'lomba' => 'required',
      'bukti' => 'required',
      'telp' => 'required',
      'instagram' => 'required',
      'email' => 'required',
    ]);
    $store = Pendaftaran::create([
      'nama' => $request->nama,
      'instansi' => $request->instansi,
      'lomba' => $request->lomba,
      'bukti' => $request->bukti,
      'telp' => $request->telp,
      'instagram' => $request->instagram,
      'email' => $request->email,
    ]);

    if ($store) {
      session()->flash('message', 'Data pendaftaran berhasil ditambahkan');
      return Inertia::location(route('home'));
    }
  }






  public function delete($id)
  {
    
      $pendaftaran = Pendaftaran::findOrFail($id);
      $pendaftaran->delete();
  
      return redirect()->route('dashboard')->with('message', 'Data berhasil dihapus');
  }
  
}
