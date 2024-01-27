<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function getMethod(){
        return response()->json(['success' => 'Methode Get ok']);
    }
    public function postMethod(Request $request){
        return $request->all();
    }
}
