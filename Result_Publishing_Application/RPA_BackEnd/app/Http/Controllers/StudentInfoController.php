<?php

namespace App\Http\Controllers;

use App\Models\StudentInfo;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class StudentInfoController extends Controller
{
    public function studentinfo(){
        $data = StudentInfo::get();
        return $data;
    }

    public function updateStudentInfo($roll, Request $req){

            $data = new StudentInfo;
            $data = StudentInfo::where("roll", $roll)
                                ->first();
            // ->first();d
    
            $data->cgpa = $req->cgpa;
            $result = $data->save();
    
            if($result){
                return 'Successfully added cgpa';
            }
            else return 'Something is wrong';

       
    }

    public function search(Request $req){
        
    }
}
