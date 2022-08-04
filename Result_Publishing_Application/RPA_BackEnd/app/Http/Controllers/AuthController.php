<?php

namespace App\Http\Controllers;

use App\Models\StudentInfo;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    public function register(Request $request){
        
        $data = $request->validate([
            'name'=> 'required|string',
            'email'=>'required|email|string|unique:users,email',
            'roll'=>'required|string',
            'password'=>'required'
            ]);

        $user = User::create([
            'name'=>$data['name'],
            'email'=>$data['email'],
            'roll' => $data['roll'],
            'password'=>bcrypt($data['password']) 
        ]); 

        StudentInfo::create([
            'name' => $data['name'],
            'roll'=> $data['roll']
        ]);
        
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' =>$user,
            'token' => $token
        ]);
    }
}
