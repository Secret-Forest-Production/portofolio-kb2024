<?php

namespace App\Http\Controllers;


use App\Models\Pendaftaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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

    $validated = $request->validate([
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
        return Inertia::location(route('daftar3', ['jenisLomba' => $request->lomba]));
      } else {
        return back()->with('error', 'Pendaftaran gagal. Silakan coba lagi.');
      }
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

  public function submitStep1(Request $request)
  {

    // Validasi data
    $validatedData = $request->validate([
      'nama' => 'required|string|max:255',
      'lomba' => 'required|string|max:255',
      'kategori' => 'required|string|max:255',
      'instansi' => 'required|string|max:255',
      'telp' => 'required|string|max:15',
      'bukti' => 'required|string',
      'instagram' => 'nullable|string|max:255',
      'email' => 'required|email|max:255',
    ]);

    $jenisLomba = $validatedData['lomba'];

    // Set status step 1 selesai
    session(['isStep1Complete' => true]);

    return redirect()->route('daftar2', ['jenisLomba' =>  $jenisLomba]);
  }

  public function submitStep2(Request $request)
  {
    // Validasi data
    $validatedData = $request->validate([
      'nama' => 'required|string|max:255',
      'lomba' => 'required|string|max:255',
      'kategori' => 'required|string|max:255',
      'instansi' => 'required|string|max:255',
      'telp' => 'required|string|max:15',
      'bukti' => 'required|string',
      'instagram' => 'nullable|string|max:255',
      'email' => 'required|email|max:255',
    ]);

    // Set status step 1 selesai
    session(['isStep1Complete' => true]);

    // Redirect ke form2
    return redirect()->route('daftar3', ['jenisLomba' =>  $request->route('jenisLomba')]);
  }
}
