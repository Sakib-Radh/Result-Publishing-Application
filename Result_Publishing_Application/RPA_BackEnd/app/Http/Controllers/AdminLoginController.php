<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;

class AdminLoginController extends Controller
{   
    public function adminRegister(Request $request){
        $data = $request->validate([
            'email'=>'required|email|string',
            'password'=>'required'
            ]);

          Admin::create([
            'email'=>$data['email'],
            'password'=>bcrypt($data['password']) 
        ]); 

    }

    public function adminLogin(Request $req){
        $credentials = $req->validate([
            'email' => 'required|email',
            'password' => 'required',
            'remember' => 'boolean'
        ]);

        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if(!Auth::guard('admin')->attempt($credentials, $remember)){
            return response([
                'error' => 'Credentials are not correct'
            ], 422);
        }

        $user = Auth::guard('admin')->user();
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token,
            'role' => 'admin'
        ]);
    }

    public function adminLogout(){
        $user = Auth::guard('admin')->user();
        $user->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);
    }
}
