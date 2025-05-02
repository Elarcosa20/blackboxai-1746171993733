<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    public function getItems()
    {
        // Fetch all items from 'items' table
        $items = DB::table('items')->get();
        return response()->json($items);
    }
}
