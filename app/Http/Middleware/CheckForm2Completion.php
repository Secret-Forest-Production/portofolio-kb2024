<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class CheckForm2Completion
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $id = $request->route('jenisLomba');

        if (!session('isStep2Complete')) {
            // Redirect ke form1 jika belum selesai
            return Inertia::location(route('daftar1', ['jenisLomba' => $id]));
        }

        return $next($request);
    }
}
