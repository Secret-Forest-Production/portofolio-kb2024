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

    $pendaftaran = Pendaftaran::all();


    return Inertia::render('Dashboard', [
      'pendaftaran' =>  $pendaftaran
    ]);
  }

  public function store(Request $request)
  {

  
    $validated =$request->validate([
      'nama' => 'required',
      'instansi' => 'required',
      'lomba' => 'required',
      'bukti' => 'required',
      'telp' => 'required',
      'instagram' => 'required',
      'email' => 'required',
    ]);
    if ($validated) {
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
        session()->flash('message', 'Pendaftaran berhasil!');
        
        // Redirect using Inertia::location()
        return Inertia::location(route('home'));
    }

      return back()->with('error', 'Pendaftaran gagal. Silakan coba lagi.');
    } else {
      return back()->with('error', 'Pendaftaran gagal. Silakan coba lagi.');
     
    }
    



  }






  public function delete($id)
  {
    
      $pendaftaran = Pendaftaran::findOrFail($id);
      $pendaftaran->delete();
  
      return redirect()->route('dashboard')->with('message', 'Data berhasil dihapus');
  }
  
}
